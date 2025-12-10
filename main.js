
const MarlenBrando = {
    currentGame: null,
    imageEl: document.getElementById("current-img"),
    gameContainer: document.querySelector(".img-wrapper"),
    videoEl: document.getElementById("video-step"),
    cataEl: document.getElementById("catapultes-container"),
    audioEl: document.getElementById('bg-sound'),
    creditsWindowEl: document.getElementById('painter-credits'),
    adminMode: true,
    onEndsVideo: {},
    CONSTRUCT_DELAYS: {
        'adminMode': 20,
        'players': 60
    },
    LOADING_TEXTS: [
        'Chargement du moteur 3D ...',
        'Redéfinition du modèle d\'IA ...',
        'Retour au village de Noël ...'
    ],
    MAX_CATA: 64,
    MDP: 'U0xJUFZPVVBMQUk=',
    indexFollower: 0,
    sleep_ms: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    init: async function () {
        this.totalSteps = this.getTotalSteps();
        this.isArrivingToGame = true;
        this.getGameFromLS();
        if (!this.currentGame.stepId) {
            this.currentGame.history = [];
            this.currentGame.stepId = 'start-1';
            this.currentGame.path = 'starter';
            this.currentGame.catapultes = 0;
            this.currentGame.discovery = [];
            this.currentGame.deads = 0;
        } else {
            if (this.currentGame.player) {
                // Set image for returning by player 
            }
            if (!this.currentGame.history) {
                this.currentGame.history = [];
            }
            if (!this.currentGame.catapultes) {
                this.currentGame.catapultes = 0;
            }
        }
        const followingSteps = this.getFollowingSteps(this.currentGame.stepId);
        if (this.currentGame.player && ['brandon', 'marlene'].includes(this.currentGame.player) && this.currentGame.stepId !== 'game-over') {
            const reStep = Object.assign({}, this.GamePaths[this.currentGame.player].find(obj => obj.id == 're-' + this.currentGame.player));
            await this.showImage(reStep.img);
            if (reStep.clickZones) {
                for (const newClickZone of reStep.clickZones) {
                    newClickZone.toStep = this.currentGame.stepId;
                    this.addClickableZone(newClickZone, followingSteps);
                }
            }
        } else {
            return await this.applyStep(this.currentGame.stepId, false, followingSteps);
        }
    },
    // addMenuIcon: function () {
    //     this.showImage('gaufre sacrée.png', {
    //         class: 'menu-icon', onclick: () => {
    //         }
    //     })
    // },
    isThrowStep: (id) => ["page-suspens", "page-suspens-bis", "continuer-plus-haut", "m-104", "m-192", "m-187"].includes(id),
    getFollowingSteps: function (toStepId) {
        let followingSteps = null;
        if (this.isThrowStep(toStepId)) {
            const Steps = this.GamePaths[this.currentGame.path];
            const getPreviousStepId = (previousStepId, index) => {
                const previousStep = Steps.find(obj => obj.id == previousStepId);
                if (previousStep) {
                    if (previousStep.isThrowStep) {
                        return getPreviousStepId(this.currentGame.history[index--].stepId, index);
                    } else {
                        const previousStepZones = previousStep.clickZones;
                        for (const zone of previousStepZones) {
                            if (zone.throwSteps) {
                                followingSteps = [];
                                let throws = zone.throwSteps;
                                if (!Array.isArray(zone.throwSteps) && zone.toStepCondition) {
                                    throws = zone.throwSteps[zone.toStepCondition(this.currentGame.catapultes)];
                                }
                                for (var i = throws.indexOf(toStepId) + 1; i < throws.length; i++) {
                                    followingSteps.push(throws[i]);
                                }
                                if (zone.toStepCondition) {
                                    followingSteps.push(zone.toStepCondition(this.currentGame.catapultes))
                                } else if (zone.toStep) {
                                    followingSteps.push(zone.toStep);
                                }
                            }
                        }
                    }
                }
            }
            const i = this.currentGame.history.length - 2;
            const previousStepId = this.currentGame.history[i].stepId;
            getPreviousStepId(previousStepId, i);
        }
        return followingSteps;
    },
    showImage: function (src, overlay = null) {
        return new Promise((resolve) => {
            const img = overlay ? new Image() : this.imageEl;
            const onLoad = () => {
                img.removeEventListener('load', onLoad);
                this.resizeTextLabel();
                resolve(img);
            };
            img.addEventListener('load', onLoad);
            img.src = 'media/' + src;
            if (overlay) {
                img.classList.add("gif-overlay");
                img.classList.add(overlay.class ? overlay.class : "");
                this.imageEl.parentNode.appendChild(img);
            } else {
                img.classList.add("current-img");
            }
        });
    },
    addClickableZone: function (clickZone, followingSteps = null) {
        const zone = this.createZone(clickZone.toStep, clickZone);
        this.gameContainer.appendChild(zone);

        zone.onclick = async () => {
            if (clickZone.music) {
                this.audioEl.play();
            }
            if (clickZone.manageCatapultes && typeof clickZone.manageCatapultes == 'function') {
                return this.managingCatapultes(clickZone.manageCatapultes);
            }
            if (clickZone.isBack) {
                clearInterval(this.intervalId);
                this.currentGame.history.pop();
            }
            if (clickZone.toStepCondition) {
                clickZone.toStep = clickZone.toStepCondition(this.currentGame.catapultes);
            }
            let toStepId = clickZone.toStep;
            if (toStepId == "demolir-machine") {
                clearInterval(this.intervalId);
                delete this.currentGame.endTime;
            }
            if (clickZone.testPwd) {
                const input = document.getElementById("mdp-input");
                if (input.value) {
                    const inputValue = this.encodeText(input.value);
                    if (inputValue == this.MDP) {
                        return await this.applyStep(clickZone.testPwd.correct.toStep, clickZone.isBack, followingSteps);
                    } else {
                        return await this.applyStep(clickZone.testPwd.incorrect.toStep, clickZone.isBack, followingSteps);
                    }
                } else {
                    return false;
                }
            }
            // add time to machine construction
            if (toStepId == 'time-machine-construct' && !clickZone.addTime && !clickZone.isRe) {
                delete this.currentGame.endTime;
            }
            if (clickZone.randomSteps) {
                toStepId = clickZone.randomSteps[Math.floor(Math.random() * clickZone.randomSteps.length)];
            }
            if (clickZone.toSavedStep) {
                toStepId = this.currentGame.saveStepId;
                this.currentGame.path = this.currentGame.player;
                delete this.currentGame.endTime;
                delete this.currentGame.remainingTime;
            }
            if (!clickZone.isBack) {
                let throws;
                if (Array.isArray(clickZone.throwSteps)) {
                    throws = clickZone.throwSteps;
                } else if (clickZone.throwSteps && clickZone.throwSteps[toStepId]) {
                    throws = clickZone.throwSteps[toStepId];
                }
                if (clickZone.toStep && throws) {
                    followingSteps = [];
                    if (throws) {
                        for (var i = 1; i < throws.length; i++) {
                            followingSteps.push(throws[i]);
                        }
                        followingSteps.push(toStepId);
                        toStepId = throws[0];
                    }
                } else if (clickZone.toStep == null && followingSteps && followingSteps.length > 0) {
                    toStepId = followingSteps.shift();
                }
            }
            if (clickZone.path) {
                if (clickZone.throwSteps) {
                    this.currentGame.nextPath = clickZone.path;
                } else {
                    this.currentGame.path = clickZone.path;
                }
                if (['brandon', 'marlene'].includes(clickZone.path)) {
                    this.currentGame.player = clickZone.path;
                }
            }
            if (clickZone.isBack) {
                followingSteps = this.getFollowingSteps(toStepId);
            }
            await this.applyStep(toStepId, clickZone.isBack, followingSteps);
        };
    },
    getTotalSteps: function () {
        let n = 0;
        for (const path in this.GamePaths) {
            if (path !== 'bouzin') {
                n += this.GamePaths[path].length;
            }
        }
        return n - 3;
    },
    addDiscoveredStep: function (id) {
        if (!this.currentGame.discovery.includes(id)) {
            this.currentGame.discovery.push(id);
        }
    },
    updateDiscoveryPercent: function () {
        this.discoveryPercent = Math.round(this.currentGame.discovery.length / this.totalSteps * 100);
    },
    applyStep: async function (id, isBack = false, followingSteps = null) {
        if (id == 'start-1') {
            this.currentGame.player = null;
            delete this.currentGame.endTime;
            delete this.currentGame.remainingTime;
            delete this.currentGame.saveStepId;
        }
        if (id == "fabrique-de-catapultes") {
            document.querySelector('#catapultes-container').style.display = 'block';
        }
        this.removeElementsFromPreviousStep();
        // get step by id
        let step;
        if (id == 'bouzin') {
            step = this.GamePaths.bouzin;
        } else {
            if (!this.isThrowStep(id) && this.currentGame.nextPath) {
                this.currentGame.path = this.currentGame.nextPath;
                delete this.currentGame.nextPath;
            }
            const pathSteps = this.GamePaths[this.currentGame.path];
            if (pathSteps) {
                step = pathSteps.find(obj => (obj.id === id));
            } else {
                return console.error("Le chemin '" + this.currentGame.path + "' est introuvable.")
            }
        }
        if (!step) {
            console.error("Unable to find step: " + id + " for player " + this.currentGame.player + " (check also path)");
            return await this.applyStep('bouzin');
        } else {
            this.addDiscoveredStep(step.id);
            this.updateDiscoveryPercent();
        }
        if (step.id == "game-over") {
            if (!this.currentGame.isArrivingToGame) {
                this.currentGame.deads += 1;
            }
        }
        if (step.isSaveStep) {
            this.currentGame.saveStepId = step.id;
        }
        this.currentGame.stepId = step.id;
        // show image
        if (!step.img && !step.video) {
            console.error("Unable to find image: " + step.id + " for player " + this.currentGame.player);
            return await this.applyStep('bouzin');
        } else if (step.video && step.img) {
            await this.showImage(step.img);
            await this.playVideo(step);
        } else if (step.video) {
            await this.playVideo(step);
        } else if (step.img) {
            await this.showImage(step.img);
            if (this.readingVideoId) {
                this.stopVideo();
                delete this.readingVideoId;
            }
        }
        // add click zones
        if (step.clickZones) {
            for (const newClickZone of step.clickZones) {
                this.addClickableZone(newClickZone, followingSteps);
            }
        }
        // add input
        if (step.onInput) {
            document.querySelector('.input-group').classList.add('visible');
        }
        // Manage game history
        if (!isBack) {
            const currentStep = {
                path: this.currentGame.path,
                stepId: this.currentGame.stepId
            };
            if (!this.isArrivingToGame) {
                this.currentGame.history.push(currentStep);
            } else {
                this.isArrivingToGame = false;
                if (this.currentGame.history.length == 0) {
                    this.currentGame.history.push(currentStep);
                }
            }
        }
        // Save game in localStorage
        this.saveGameInLS();
        if (this.adminMode && this.currentGame.history.length > 1) {
            this.addClickableZone({
                "toStep": this.currentGame.history[this.currentGame.history.length - 2].stepId,
                "type": 'arrow',
                "path": this.currentGame.history[this.currentGame.history.length - 2].path,
                "isBack": true,
                'pos': {
                    'left': 4,
                    'top': 2,
                    'width': 27,
                    'height': 9,
                    'rotate': 180
                }
            })
        }
        if (Array.isArray(step.gif)) {
            for (const gif of step.gif) {
                this.showImage(gif.src, { class: "gif-" + gif.class });
            }
        }
        if (step.id == 'time-machine-construct') {
            document.querySelector('.chrono-wrapper').classList.add('visible');
            this.startCountDown();
        }
        if (["fabrique-de-catapultes", "fabrique-de-catapultes-2"].includes(step.id)) {
            this.currentGame.catapultes = 0;
        }
        if (step.id == "painters") {
            this.showTextWindow(PEINTRES);
        }
        if (step.id == "TROP-TARD4") {
            delete this.currentGame.remainingTime;
        }
    },
    createZone: function (id, clickZone) {
        if (!id) {
            id = Math.random().toString(36).substring(2, 10);
        }
        const z = document.createElement('a');
        z.id = id + '-zone';
        z.className = 'clickable-zone' + (clickZone.type ? ' clickable-' + clickZone.type : '');
        if (clickZone.pos) {
            z.style.left = clickZone.pos.left + "%";
            z.style.top = clickZone.pos.top + "%";
            z.style.width = clickZone.pos.width + "%";
            if (clickZone.pos.height) {
                z.style.height = clickZone.pos.height + "%";
            }
            if (clickZone.pos['aspect-ratio']) {
                z.style['aspect-ratio'] = clickZone.pos['aspect-ratio'];
            }
            if (clickZone.pos.rotate) {
                z.style.transform = "rotate(" + clickZone.pos.rotate + "deg)"
            }
            if (this.adminMode) {
                if (clickZone.isBack) {
                    z.classList.add('clickable-back');
                } else {
                    z.classList.add('adminMode');
                }
            }
        }
        return z;
    },
    resizeTextLabel: function () {
        const img = this.imageEl;
        if (!img) return;

        const baseHeight = 900;
        const baseFontPx = 22;

        const h = img.clientHeight;
        if (!h) return;

        const scale = h / baseHeight;
        const size = baseFontPx * scale;

        document.querySelectorAll('.text-label').forEach(el => {
            el.style.fontSize = size + 'px';
        });
    },
    removeElementsFromPreviousStep: function () {
        if (this.readingVideoId && this.onEndsVideo[this.readingVideoId]) {
            this.videoEl.removeEventListener('ended', this.onEndsVideo[this.readingVideoId]);
            delete this.onEndsVideo[this.readingVideoId];
        }
        document.querySelectorAll('.clickable-zone').forEach(el => el.remove());
        document.querySelectorAll('.gif-overlay:not(.menu-icon)').forEach(el => el.remove());
        document.querySelector('.chrono-wrapper').classList.remove('visible');
        document.querySelector('.input-group').classList.remove('visible');
        document.getElementById("mdp-input").value = "";
        clearInterval(this.intervalId);
        document.getElementById("loading-text").style.display = 'none';
        this.cataEl.innerHTML = "";
        this.hideTextWindow();
    },
    encodeText(str) {
        const utf8 = new TextEncoder().encode(str);
        let binary = "";
        utf8.forEach(b => binary += String.fromCharCode(b));
        return btoa(binary);
    },
    saveGameInLS: function () {
        if (typeof localStorage !== 'undefined') {
            localStorage.currentGame = JSON.stringify(this.currentGame);
        }
    },
    getGameFromLS: function () {
        this.currentGame = {};
        if (typeof localStorage !== 'undefined' && localStorage.currentGame) {
            this.currentGame = JSON.parse(localStorage.currentGame);
        }
        if (!this.currentGame.discovery) {
            this.currentGame.discovery = [];
        }
        if (!this.currentGame.deads) {
            this.currentGame.deads = 0;
        }
    },
    startCountDown: async function () {
        let remainingTime_s;
        if (this.currentGame.endTime) {
            const now = Date.now();
            remainingTime_s = Math.floor((this.currentGame.endTime - now) / 1000); // en secondes
        } else {
            remainingTime_s = this.adminMode ? this.CONSTRUCT_DELAYS['adminMode'] : this.CONSTRUCT_DELAYS['players'];
            if (this.currentGame.remainingTime) {
                remainingTime_s += this.currentGame.remainingTime;
            }
            this.currentGame.endTime = Date.now() + remainingTime_s * 1000;
            this.saveGameInLS();
        }
        if (remainingTime_s <= 0) {
            this.currentGame.endTime = null;
            return await this.applyStep('TROP-TARD5');
        }
        const countdownEl = document.getElementById("countdown");
        const updateCountdown = async () => {
            this.currentGame.remainingTime = remainingTime_s;
            const minutes = Math.floor(remainingTime_s / 60);
            const seconds = remainingTime_s % 60;
            const minStr = String(minutes).padStart(2, "0");
            const secStr = String(seconds).padStart(2, "0");
            countdownEl.textContent = `${minStr}:${secStr}`;
            if (remainingTime_s <= 0) {
                delete this.currentGame.remainingTime;
                clearInterval(this.intervalId);
                delete this.currentGame.endTime;
                await this.applyStep('TROP-TARD5');
            } else {
                remainingTime_s--;
            }
        }
        updateCountdown();
        this.intervalId = setInterval(updateCountdown, 1000);
    },
    playVideo: async function (step) {
        this.onEndsVideo[step.id] = async () => {
            await this.onVideoEnd(step);
        };
        this.videoEl.addEventListener('ended', this.onEndsVideo[step.id]);
        if (this.isArrivingToGame && step.video) {
            return await this.onVideoEnd(step);
        }
        this.videoEl.src = "media/" + step.video;
        this.videoEl.style.display = "block";
        this.videoEl.classList.add("video-" + step.id);
        this.videoEl.autoplay = true;
        this.videoEl.volume = 0.5;
        this.videoEl.playbackRate = step.playbackRate ? step.playbackRate : 1;
        this.readingVideoId = step.id;
        this.videoEl.play().catch(() => {
            // si besoin, gérer l’erreur (rare si muted)
        });
        if (step.id == 'game-over') {
            document.getElementById("loading-text").style.display = 'block';
            document.getElementById("loading-text").textContent = this.LOADING_TEXTS[0];
            let text_i = 1;
            const displayLoadingText = async () => {
                document.getElementById("loading-text").textContent = "";
                await this.sleep_ms(500);
                if (text_i > 2) {
                    clearInterval(this.intervalId);
                } else {
                    document.getElementById("loading-text").textContent = this.LOADING_TEXTS[text_i];
                    text_i += 1;
                }
            }
            this.intervalId = setInterval(displayLoadingText, 9000);
        }
    },
    stopVideo() {
        this.videoEl.pause();
        this.videoEl.currentTime = 0;
        this.videoEl.removeAttribute('src');
        this.videoEl.load();
        this.videoEl.style.display = 'none';
        this.videoEl.classList.remove(this.videoEl.classList[1]);
    },
    onVideoEnd: async function (step) {
        if (step) {
            this.videoEl.style.display = 'none';
            this.videoEl.removeEventListener('ended', this.onEndsVideo[step.id]);
            delete this.onEndsVideo[step.id];
            this.imageEl.src = "";
            if (step.atEndPath) {
                this.currentGame.path = step.atEndPath;
            }
            await this.applyStep(step.atEndStep);
        }
    },
    managingCatapultes: function (incrementor) {
        const n = document.querySelectorAll('.catapulte').length;
        this.currentGame.catapultes = Math.max(0, Math.min(this.MAX_CATA, incrementor(this.currentGame.catapultes)));
        const diff = this.currentGame.catapultes - (isNaN(n) ? 0 : n);
        if (diff > 0) {
            this.showCatapulte();
        } else if (diff < 0) {
            const index = n;
            const el = document.querySelector('.catapulte.cata-' + index);
            if (el) el.remove();
        }
    },
    showCatapulte: function () {
        return new Promise((resolve) => {
            const img = new Image();
            const onLoad = () => {
                img.removeEventListener('load', onLoad);
                resolve(img);
            };
            img.addEventListener('load', onLoad);
            img.src = 'media/catapulte.png';
            img.classList.add("catapulte");
            img.classList.add("cata-" + this.currentGame.catapultes);
            const col = (this.currentGame.catapultes - 1) % 8;              // 0 → 8
            const row = Math.floor((this.currentGame.catapultes - 1) / 8);  // 0 → 7
            img.style.left = (col * 12.5) + "%";
            img.style.top = (row * 12) + "%";
            this.cataEl.appendChild(img);
        });
    },
    showTextWindow: function (text) {
        const content = document.getElementById('painter-credits-content');
        content.textContent = text;
        this.creditsWindowEl.style.display = 'block';
        this.creditsWindowEl.scrollTop = this.creditsWindowEl.scrollHeight;
    },
    hideTextWindow: function () {
        const content = document.getElementById('painter-credits-content');
        content.textContent = '';
        this.creditsWindowEl.style.display = 'none';
    },
    GamePaths: {
        bouzin: {
            id: "bouzin",
            img: "bouzin.png",
            clickZones: []
        },
        starter: [
            {
                id: "start-1",
                img: "1.png",
                clickZones: [{
                    'toStep': "start-2",
                    'music': true,
                    'type': 'arrow',
                    'pos': {
                        'left': 67,
                        'top': 86.5,
                        'width': 29,
                        'height': 11
                    }
                }]
            }, {
                id: "start-2",
                img: "2.png",
                clickZones: [{
                    'toStep': "start-3",
                    'type': 'arrow',
                    'pos': {
                        'left': 67,
                        'top': 86.5,
                        'width': 29,
                        'height': 11
                    }
                }]
            }, {
                id: "start-3",
                img: "3.png",
                clickZones: [{
                    'toStep': "start-4",
                    'type': 'arrow',
                    'pos': {
                        'left': 67,
                        'top': 86.5,
                        'width': 29,
                        'height': 11
                    }
                }]
            }, {
                id: "start-4",
                img: "4.png",
                clickZones: [{
                    'toStep': "start-5",
                    'type': 'arrow',
                    'pos': {
                        'left': 64.5,
                        'top': 26.5,
                        'width': 32,
                        'height': 11
                    }
                }]
            }, {
                id: "start-5",
                img: "5.png",
                clickZones: [{
                    'toStep': "start-6",
                    'type': 'arrow',
                    'pos': {
                        'left': 67,
                        'top': 86.5,
                        'width': 29,
                        'height': 11
                    }
                }]
            }, {
                id: "start-6",
                img: "6.png",
                clickZones: [{
                    'toStep': "go-partir",
                    'path': 'game-over',
                    'type': 'oval',
                    'pos': {
                        'left': 32.5,
                        'top': 17,
                        'width': 32,
                        'aspect-ratio': 1.35 / 1
                    }
                }, {
                    'toStep': "player-select",
                    'type': 'oval',
                    'pos': {
                        'left': 27.5,
                        'top': 58.5,
                        'width': 45,
                        'aspect-ratio': 1.6 / 1
                    }
                }]
            }, {
                id: "player-select",
                img: "7.png",
                clickZones: [{
                    'path': 'marlene',
                    'toStep': "m-9",
                    'type': 'oval',
                    'pos': {
                        'left': 47,
                        'top': 87.5,
                        'width': 36,
                        'aspect-ratio': 2 / 1

                    }
                }, {
                    'path': 'brandon',
                    'toStep': "b-8",
                    'type': 'oval',
                    'pos': {
                        'left': 13,
                        'top': 52,
                        'width': 35,
                        'aspect-ratio': 2 / 1
                    }
                }]
            }
        ],
        SLPPE: [
            {
                id: "SLPPE",
                img: "SLPPE.png",
                clickZones: [{
                    'toStep': "SLPPE2",
                    'type': 'arrow',
                    'pos': {
                        left: 74,
                        top: 90,
                        width: 23.5,
                        height: 9,
                    }
                }, {
                    'toStep': "painters",
                    'type': 'arrow',
                    'pos': {
                        left: 10,
                        top: 90,
                        width: 23.5,
                        height: 9,
                    }
                }]
            }, {
                id: "SLPPE2",
                img: "SLPPE2.png",
                clickZones: [{
                    'toStep': "game-over",
                    'type': 'arrow',
                    'pos': {
                        left: 74,
                        top: 90,
                        width: 23.5,
                        height: 8,
                    }
                }]
            }, {
                id: "SLPPE3",
                img: "SLPPE3.png",
                clickZones: [{
                    'toStep': "oubliettes",
                    'path': 'game-over',
                    'type': 'oval',
                    'pos': {
                        'left': 4.5,
                        'top': 76,
                        'width': 40,
                        'aspect-ratio': 1.5 / 1
                    }
                }, {
                    'toStep': "TROP-TARD4",
                    'path': 'troptard',
                    'type': 'oval',
                    'pos': {
                        'left': 62.5,
                        'top': 76,
                        'width': 29,
                        'aspect-ratio': 1.3 / 1
                    }
                }]
            }, {
                id: "painters",
                img: "126.png",
                clickZones: []
            }
        ],
        troptard: [{
            id: "TROP-TARD",
            img: "Trop tard.png",
            clickZones: [{
                'toStep': "TROP-TARD2",
                'type': 'arrow',
                'pos': {
                    'left': 66,
                    'top': 87,
                    'width': 30,
                    'height': 10
                }
            }]
        }, {
            id: "TROP-TARD2",
            img: "Trop tard2.png",
            clickZones: [{
                'toStep': "TROP-TARD3",
                'type': 'arrow',
                'pos': {
                    'left': 66,
                    'top': 87,
                    'width': 30,
                    'height': 10
                }
            }]
        }, {
            id: "TROP-TARD3",
            img: "Trop tard3.png",
            clickZones: [{
                'toStep': "SLPPE3",
                'path': 'SLPPE',
                'type': 'oval',
                'pos': {
                    'left': 32.5,
                    'top': 63.5,
                    'width': 39,
                    'aspect-ratio': 1.5 / 1
                }
            }, {
                'toStep': "TROP-TARD4",
                'type': 'oval',
                'pos': {
                    'left': 32.5,
                    'top': 11,
                    'width': 38,
                    'aspect-ratio': 1.35 / 1
                }
            }]
        }, {
            id: "TROP-TARD4",
            img: "Trop tard4.png",
            clickZones: [{
                'toStep': "time-machine-construct",
                'type': 'arrow',
                'pos': {
                    'left': 73,
                    'top': 88.5,
                    'width': 24.5,
                    'height': 8
                }
            }]
        }, {
            id: "time-machine-construct",
            gif: [{
                src: "under-construction-animated-gif-8.gif",
                class: "time-machine-construct"
            }],
            img: "machine.png",
            clickZones: [{
                'toStep': "demolir-machine",
                'type': 'oval',
                'pos': {
                    'left': 58.5,
                    'top': 77.5,
                    'width': 34,
                    'aspect-ratio': 1.4 / 1
                }
            }]
        }, {
            id: "TROP-TARD5",
            img: "Trop tard5.png",
            clickZones: [{
                'toStep': "TROP-TARD6",
                'type': 'oval',
                'pos': {
                    'left': 60,
                    'top': 73.5,
                    'width': 34,
                    'aspect-ratio': 1.3 / 1
                }
            }, {
                'toStep': "SLPPE",
                'path': 'SLPPE',
                'type': 'oval',
                'pos': {
                    'left': 9,
                    'top': 76.5,
                    'width': 33,
                    'aspect-ratio': 1.5 / 1
                }
            }]
        }, {
            id: "TROP-TARD6",
            img: "Trop tard6.png",
            clickZones: [{
                'toStep': null,
                'toSavedStep': true,
                'type': 'arrow',
                'pos': {
                    'left': 73,
                    'top': 89,
                    'width': 24,
                    'height': 10
                }
            }]
        }, {
            id: "demolir-machine",
            img: "bouzin-machine.png",
            clickZones: [{
                'toStep': "partir-bouzin",
                'type': 'oval',
                'pos': {
                    'left': 9.5,
                    'top': 76.5,
                    'width': 35,
                    'aspect-ratio': 1.5 / 1
                }
            }, {
                'toStep': "time-machine-construct",
                'type': 'oval',
                'addTime': true,
                'pos': {
                    'left': 59,
                    'top': 76,
                    'width': 34,
                    'aspect-ratio': 1.3 / 1
                }
            }]
        }, {
            id: "partir-bouzin",
            img: "bouzin2.png",
            clickZones: [{
                'toStep': "bouzin-3",
                'type': 'arrow',
                'pos': {
                    'left': 73.5,
                    'top': 89,
                    'width': 23,
                    'height': 8
                }
            }]
        }, {
            id: "bouzin-3",
            img: "bouzin3.png",
            clickZones: [{
                'toStep': "game-over",
                'path': 'game-over',
                'type': 'arrow',
                'pos': {
                    'left': 7,
                    'top': 87,
                    'width': 23.5,
                    'height': 9
                }
            }]
        }],
        'game-over': [
            {
                id: "game-over",
                img: "Game over.png",
                video: "chargement.webm",
                playbackRate: 0.1,
                atEndStep: "start-1",
                atEndPath: "starter",
                clickZones: []
            }, {
                id: "oubliettes",
                img: "Oubliettes.png",
                clickZones: [{
                    'toStep': "game-over",
                    'type': 'arrow',
                    'pos': {
                        'left': 74,
                        'top': 89,
                        'width': 23,
                        'height': 9
                    }
                }]
            }, {
                id: "go-partir",
                img: "29.png",
                clickZones: [{
                    'toStep': "go-30",
                    'type': 'arrow',
                    'pos': {
                        'left': 72,
                        'top': 88.5,
                        'width': 23,
                        'height': 8
                    }
                }]
            }, {
                id: "go-30",
                img: "30.png",
                clickZones: [{
                    'toStep': "game-over",
                    'type': 'arrow',
                    'pos': {
                        'left': 73,
                        'top': 89,
                        'width': 23,
                        'height': 8
                    }
                }]
            }
        ],
        Zblugzor: [
            {
                id: "zz-199",
                img: "199.png",
                clickZones: [{
                    'toStep': "zz-200",
                    'type': 'arrow',
                    'pos': {
                        'left': 73,
                        'top': 89,
                        'width': 24,
                        'height': 8
                    }
                }]
            }, {
                id: "zz-200",
                img: "200.png",
                clickZones: [{
                    'toStep': "zz-fusionner",
                    'type': 'oval',
                    'pos': {
                        'left': 8.5,
                        'top': 73,
                        'width': 39,
                        'height': 14
                    }
                }, {
                    'toStep': "SLPPE",
                    'path': 'SLPPE',
                    'type': 'oval',
                    'pos': {
                        'left': 61,
                        'top': 71.5,
                        'width': 34.5,
                        'height': 15
                    }
                }]
            }, {
                id: "zz-fusionner",
                img: "201.png",
                clickZones: [{
                    'toStep': "zz-202",
                    'type': 'arrow',
                    'pos': {
                        'left': 71,
                        'top': 89.5,
                        'width': 23.5,
                        'height': 8
                    }
                }]
            }, {
                id: "zz-202",
                img: "202.png",
                clickZones: [{
                    'toStep': "zz-203",
                    'type': 'oval',
                    'pos': {
                        'left': 34,
                        'top': 79,
                        'width': 26,
                        'height': 12.5
                    }
                }]
            }, {
                id: "zz-203",
                img: "203.png",
                clickZones: [{
                    'toStep': "brandir-frichtefracht",
                    'type': 'oval',
                    'pos': {
                        'left': 6,
                        'top': 74,
                        'width': 24,
                        'height': 8.5
                    }
                }, {
                    'toStep': "masque-halloween",
                    'type': 'oval',
                    'pos': {
                        'left': 49,
                        'top': 79,
                        'width': 29,
                        'height': 12.5
                    }
                }]
            }, {
                id: "masque-halloween",
                img: "204.png",
                clickZones: [{
                    'toStep': "game-over",
                    'path': 'game-over',
                    'type': 'arrow',
                    'pos': {
                        'left': 72,
                        'top': 88,
                        'width': 23.5,
                        'height': 8
                    }
                }]
            }, {
                id: "brandir-frichtefracht",
                img: "205.png",
                clickZones: [{
                    'toStep': "zz-206",
                    'type': 'arrow',
                    'pos': {
                        'left': 68,
                        'top': 88,
                        'width': 23.5,
                        'height': 8
                    }
                }]
            }, {
                id: "zz-206",
                img: "206.png",
                clickZones: [{
                    'toStep': "zz-207",
                    'type': 'arrow',
                    'pos': {
                        'left': 72.5,
                        'top': 90,
                        'width': 23.5,
                        'height': 8
                    }
                }]
            }, {
                id: "zz-207",
                img: "207.png",
                clickZones: [{
                    'toStep': "zz-208",
                    'type': 'arrow',
                    'pos': {
                        'left': 71,
                        'top': 89,
                        'width': 23.5,
                        'height': 8
                    }
                }]
            }, {
                id: "zz-208",
                img: "208.png",
                clickZones: [{
                    'toStep': "zz-209",
                    'type': 'arrow',
                    'pos': {
                        'left': 72.5,
                        'top': 88,
                        'width': 23,
                        'height': 8
                    }
                }]
            }, {
                id: "zz-209",
                img: "209.png",
                clickZones: [{
                    'toStep': "zz-72",
                    'type': 'arrow',
                    'pos': {
                        'left': 71.5,
                        'top': 88.5,
                        'width': 23.5,
                        'height': 8
                    }
                }]
            }, {
                id: "zz-72",
                img: "72.png",
                clickZones: [{
                    'toStep': "zz-210",
                    'type': 'arrow',
                    'pos': {
                        'left': 73,
                        'top': 89,
                        'width': 23.5,
                        'height': 8.5
                    }
                }]
            }, {
                id: "zz-210",
                img: "210.png",
                clickZones: [{
                    'toStep': "SLPPE",
                    'path': 'SLPPE',
                    'type': 'oval',
                    'pos': {
                        'left': 31,
                        'top': 73.5,
                        'width': 33.5,
                        'height': 15.5
                    }
                }]
            }
        ],
        brandon: BRANDON_STEPS,
        marlene: MARLENE_STEPS,
    },
}

MarlenBrando.init();

window.addEventListener('resize', () => {
    if (MarlenBrando && typeof MarlenBrando.resizeTextLabel === 'function') {
        MarlenBrando.resizeTextLabel();
    }
});

const PEINTRES = `Léonard de Vinci
Michel-Ange
Raphaël
Sandro Botticelli
Le Caravage
Rembrandt
Johannes Vermeer
Diego Velázquez
Francisco de Goya
William Turner
Eugène Delacroix
Jean-Auguste-Dominique Ingres
Gustave Courbet
Édouard Manet
Claude Monet
Edgar Degas
Pierre-Auguste Renoir
Paul Cézanne
Vincent van Gogh
Paul Gauguin
Georges Seurat
Henri de Toulouse-Lautrec
Henri Matisse
Pablo Picasso
Wassily Kandinsky
Piet Mondrian
Salvador Dalí
René Magritte
Edward Hopper
Jackson Pollock`;
