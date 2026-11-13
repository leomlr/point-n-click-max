
const MarlenBrando = {
    currentGame: null,
    imageEl: document.getElementById("current-img"),
    gameContainer: document.querySelector(".img-wrapper"),
    videoEl: document.getElementById("video-step"),
    cataEl: document.getElementById("catapultes-container"),
    adminMode: false,
    onEndsVideo: {},
    nextAmbianceEl: 'bg-sound-B',
    nextShortEl: 'short-sound-B',
    CONSTRUCT_DELAYS: {
        'adminMode': 10,
        'players': 52
    },
    LOADING_TEXTS: [
        'Chargement du moteur 3D ...',
        'Vidange du réservoir d\'huile du serveur...',
        'Retour au village de Noël ...'
    ],
    MAX_CATA: 64,
    MDP: 'U0xJUFZPVVBMQUk=',
    _fadeInRaf: {},
    _fadeOutRaf: {},
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
            this.currentGame.discovery = ['start-1'];
            this.currentGame.deads = 0;
            this.currentGame.tickets = 0;
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
                                    throws = zone.throwSteps[zone.toStepCondition(this.currentGame)];
                                }
                                for (var i = throws.indexOf(toStepId) + 1; i < throws.length; i++) {
                                    followingSteps.push(throws[i]);
                                }
                                if (zone.toStepCondition) {
                                    followingSteps.push(zone.toStepCondition(this.currentGame))
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
            img.src = 'image/' + src;
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
            if (clickZone.reset) {
                delete this.currentGame.playerWin;
                delete this.currentGame.remainingTime;
                this.currentGame.catapultes = 0;
                this.currentGame.tickets = 0;
                this.currentGame.discovery = ['start-1'];
                this.currentGame.deads = 0;
            }
            if (clickZone.manageCatapultes && typeof clickZone.manageCatapultes == 'function') {
                return this.managingCatapultes(clickZone.manageCatapultes);
            }
            if (clickZone.isBack) {
                clearInterval(this.intervalId);
                this.currentGame.history.pop();
            }
            if (clickZone.toStepCondition) {
                clickZone.toStep = clickZone.toStepCondition(this.currentGame);
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
        //console.log(id, isBack, followingSteps)
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
            if (this.adminMode) {
                document.getElementById("stepId-text").style.display = 'block';
                document.getElementById("stepId-text").textContent = id + ": " + step.img;
            }
        }
        if (step.ambiance) {
            const src = 'audio/' + step.ambiance;
            const audioEl = this.audioEl(this.nextAmbianceEl);
            if (audioEl && !audioEl.src.endsWith(src)) {
                this.fadeOutAndStop(this.nextAmbianceEl);
                if (this.nextAmbianceEl == "bg-sound-A") {
                    this.nextAmbianceEl = "bg-sound-B";
                } else if (this.nextAmbianceEl == "bg-sound-B") {
                    this.nextAmbianceEl = "bg-sound-A";
                }
                this.audioEl(this.nextAmbianceEl).src = src;
                this.fadeInAndPlay(this.nextAmbianceEl);
            }
        } else {
            this.fadeOutAndStop(this.nextAmbianceEl);
        }
        if (step.sound) {
            const src = 'audio/' + step.sound;
            const audioEl = this.audioEl(this.nextShortEl);
            if (audioEl && !audioEl.src.endsWith(src)) {
                this.fadeOutAndStop(this.nextShortEl);
                if (this.nextShortEl == "short-sound-A") {
                    this.nextShortEl = "short-sound-B";
                } else if (this.nextShortEl == "short-sound-B") {
                    this.nextShortEl = "short-sound-A";
                }
                this.audioEl(this.nextShortEl).src = src;
                this.fadeInAndPlay(this.nextShortEl);
            }
        } else {
            this.fadeOutAndStop(this.nextShortEl);
        }
        if (id == "game-over") {
            if (!this.currentGame.isArrivingToGame) {
                this.currentGame.deads += 1;
            }
        }
        if (step.isSaveStep) {
            this.currentGame.saveStepId = id;
        }
        this.currentGame.stepId = step.id;
        // show image
        if (!step.img && !step.video) {
            console.error("Unable to find image: " + id + " for player " + this.currentGame.player);
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
        if (step.id == "TROP-TARD4") {
            delete this.currentGame.remainingTime;
        }
        if (step.id == "game-win") {
            const stats = "Tu as découvert " + this.discoveryPercent + " % des étapes.</b></br>Tu es mort " + this.currentGame.deads + " fois.";
            document.getElementById("stats-BG").style.display = 'block';
            document.getElementById("stats-BG").innerHTML = stats;
            this.currentGame.playerWin = true;
        }
        if (this.currentGame.path == 'SLPPE') {
            if (step.id == "statistiques") {
                document.getElementById("SLPPE-stats-game-over").style.display = 'block';
                document.getElementById("SLPPE-stats-percent").style.display = 'block';
                document.getElementById("SLPPE-stats-game-over").innerHTML = this.currentGame.deads;
                document.getElementById("SLPPE-stats-percent").innerHTML = this.discoveryPercent + " %";
            }
            if (["non-sincere-2", "SLPPE-premium-ticket"].includes(step.id)) {
                this.currentGame.tickets += 1;
            }
            if (step.id == "piscine-1") {
                this.currentGame.tickets -= 1;
            }
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


        const h = img.clientHeight;
        if (!h) return;

        const scale = h / baseHeight;

        document.querySelectorAll('.text-label:not(.text-number)').forEach(el => {
            const baseFontPx = 22;
            const size = baseFontPx * scale;
            el.style.fontSize = size + 'px';
        });

        document.querySelectorAll('.text-label.text-number').forEach(el => {
            const baseFontPx = 78;
            const size = baseFontPx * scale;
            el.style.fontSize = size + 'px';
        });
    },
    removeElementsFromPreviousStep: function () {
        if (this.readingVideoId && this.onEndsVideo[this.readingVideoId]) {
            this.videoEl.removeEventListener('ended', this.onEndsVideo[this.readingVideoId]);
            delete this.onEndsVideo[this.readingVideoId];
        }
        document.querySelectorAll('.clickable-zone').forEach(el => el.remove());
        document.querySelectorAll('.gif-overlay').forEach(el => el.remove());
        document.querySelector('.chrono-wrapper').classList.remove('visible');
        document.querySelector('.input-group').classList.remove('visible');
        document.getElementById("mdp-input").value = "";
        clearInterval(this.intervalId);
        document.getElementById("loading-text").style.display = 'none';
        this.cataEl.innerHTML = "";
        //this.hideTextWindow();
        document.getElementById("stats-BG").style.display = 'none';
        document.getElementById("SLPPE-stats-game-over").style.display = 'none';
        document.getElementById("SLPPE-stats-percent").style.display = 'none';
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
        if (!this.currentGame.tickets) {
            this.currentGame.tickets = 0;
        }
        if (!this.currentGame.catapultes) {
            this.currentGame.catapultes = 0;
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
        if (!step.loopVideo) {
            this.onEndsVideo[step.id] = async () => {
                await this.onVideoEnd(step);
            };
            this.videoEl.addEventListener('ended', this.onEndsVideo[step.id]);
        }
        if (this.isArrivingToGame && step.video) {
            return await this.onVideoEnd(step);
        }
        this.videoEl.src = "video/" + step.video;
        this.videoEl.style.display = "block";
        this.videoEl.classList.add("video-" + step.id);
        this.videoEl.autoplay = true;
        this.videoEl.volume = 1;
        this.videoEl.loop = step.loopVideo ? true : false;
        this.videoEl.playbackRate = step.playbackRate ? step.playbackRate : 1;
        if (this.adminMode && step.id == "course-poursuite") {
            this.videoEl.playbackRate = 5;
        }
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
            img.src = 'image/catapulte.png';
            img.classList.add("catapulte");
            img.classList.add("cata-" + this.currentGame.catapultes);
            const col = (this.currentGame.catapultes - 1) % 8;              // 0 → 8
            const row = Math.floor((this.currentGame.catapultes - 1) / 8);  // 0 → 7
            img.style.left = (col * 12.5) + "%";
            img.style.top = (row * 12) + "%";
            this.cataEl.appendChild(img);
        });
    },
    fadeOutAndStop: function (id, ms = 1200) {
        if (!this.audioEl(id)) return;
        if (this.audioEl(id).paused) return;
        cancelAnimationFrame(this._fadeOutRaf[id]);
        const startVolume = this.audioEl(id).volume ?? 1;
        const startTime = performance.now();
        const tick = (now) => {
            const t = Math.min(1, (now - startTime) / ms);
            const v = startVolume * (1 - t);
            this.audioEl(id).volume = Math.max(0, Math.min(1, v));
            if (t < 1) {
                this._fadeOutRaf[id] = requestAnimationFrame(tick);
            } else {
                this.audioEl(id).pause();
                this.audioEl(id).currentTime = 0;
                this.audioEl(id).removeAttribute('src');
                this.audioEl(id).load();
                this.audioEl(id).volume = startVolume;
            }
        }
        this._fadeOutRaf[id] = requestAnimationFrame(tick);
    },
    fadeInAndPlay: function (id, ms = 1000, targetVolume = 1) {
        if (!this.audioEl(id)) return;
        cancelAnimationFrame(this._fadeInRaf[id]);
        const endVolume = Math.max(0, Math.min(1, targetVolume));
        const startTime = performance.now();
        this.audioEl(id).volume = 0;
        if (this.audioEl(id).paused) {
            this.audioEl(id).play().catch(() => { });
        }
        const tick = (now) => {
            const t = Math.min(1, (now - startTime) / ms);
            const v = endVolume * t;
            this.audioEl(id).volume = Math.max(0, Math.min(1, v));
            if (t < 1) {
                this._fadeInRaf[id] = requestAnimationFrame(tick);
            }
        }
        this._fadeInRaf[id] = requestAnimationFrame(tick);
    },
    audioEl: function (id) {
        return document.getElementById(id);
    },
    GamePaths: {
        bouzin: {
            id: "bouzin",
            img: "bouzin-error.png",
            clickZones: []
        },
        starter: [
            {
                id: "start-1",
                img: "1.png",
                sound: "village_de_noel.mp3",
                clickZones: [{
                    'toStep': "start-2",
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
                sound: "village_de_noel.mp3",
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
                sound: "hyper_suspens.mp3",
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
                ambiance: "Attente.mp3",
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
                ambiance: "SLPPE.mp3",
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
                    'toStep': "SLPPE-corridor",
                    'type': 'square',
                    'pos': {
                        left: 69,
                        top: 4,
                        width: 14.5,
                        height: 21,
                    }
                }]
            }, {
                id: "SLPPE2",
                img: "SLPPE2.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "game-over",
                    'path': "game-over",
                    'type': 'arrow',
                    'pos': {
                        left: 74,
                        top: 90,
                        width: 23.5,
                        height: 8,
                    }
                }]
            }, {
                id: "SLPPE-corridor",
                img: "SLPPE corridor.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': null,
                    'toStepCondition': (currentGame) => currentGame.playerWin ? "SLPPE-victoire" : "SLPPE",
                    'type': 'arrow',
                    'pos': {
                        'left': 1,
                        'top': 92,
                        'width': 20.5,
                        'height': 7.5,
                        'rotate': 180
                    }
                }, {
                    'toStep': "oeuvres",
                    'type': 'square',
                    'pos': {
                        'left': 27.5,
                        'top': 78.5,
                        'width': 16,
                        'height': 22
                    }
                }, {
                    'toStep': "statistiques",
                    'type': 'square',
                    'pos': {
                        'left': 52.5,
                        'top': 78,
                        'width': 16,
                        'height': 22
                    }
                }, {
                    'toStep': "credits",
                    'type': 'square',
                    'pos': {
                        'left': 25.5,
                        'top': 45.5,
                        'width': 13,
                        'height': 19
                    }
                }, {
                    'toStep': null,
                    'toStepCondition': (currentGame) => currentGame.tickets > 0 ? "porte-piscine-2" : "porte-piscine-1",
                    'type': 'square',
                    'pos': {
                        'left': 43.5,
                        'top': 42,
                        'width': 21,
                        'height': 23
                    }
                }, {
                    'toStep': 'porte-SLPPE-premium',
                    'type': 'square',
                    'pos': {
                        'left': 56.5,
                        'top': 9,
                        'width': 22,
                        'height': 23
                    }
                }]
            }, {
                id: "oeuvres",
                img: "Oeuvres.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "SLPPE-corridor",
                    'type': 'arrow',
                    'pos': {
                        'left': 3.5,
                        'top': 89.5,
                        'width': 25,
                        'height': 8,
                        'rotate': 180
                    }
                }]
            }, {
                id: "statistiques",
                img: "Statistiques.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "SLPPE-corridor",
                    'type': 'arrow',
                    'pos': {
                        'left': 3.5,
                        'top': 89.5,
                        'width': 25,
                        'height': 8,
                        'rotate': 180
                    }
                }]
            }, {
                id: "credits",
                img: "Crédits.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "SLPPE-corridor",
                    'type': 'arrow',
                    'pos': {
                        'left': 4.5,
                        'top': 89,
                        'width': 23.5,
                        'height': 8,
                        'rotate': 180
                    }
                }, {
                    'toStep': "credits-2",
                    'type': 'oval',
                    'pos': {
                        'left': 36.5,
                        'top': 87,
                        'width': 15.5,
                        'height': 7.5
                    }
                }]
            }, {
                id: "credits-2",
                img: "Crédits2.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "credits",
                    'type': 'arrow',
                    'pos': {
                        'left': 4.5,
                        'top': 89,
                        'width': 23.5,
                        'height': 8,
                        'rotate': 180
                    }
                }, {
                    'toStep': "start-1",
                    'path': 'starter',
                    'reset': true,
                    'type': 'oval',
                    'pos': {
                        'left': 36.5,
                        'top': 38,
                        'width': 25.5,
                        'height': 12.5
                    }
                }]
            }, {
                id: "porte-piscine-1",
                img: "Porte piscine1.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "SLPPE-corridor",
                    'type': 'arrow',
                    'pos': {
                        'left': 3.5,
                        'top': 89.5,
                        'width': 22.5,
                        'height': 8,
                        'rotate': 180
                    }
                }]
            }, {
                id: "porte-piscine-2",
                img: "Porte piscine2.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "SLPPE-corridor",
                    'type': 'arrow',
                    'pos': {
                        'left': 3.5,
                        'top': 89.5,
                        'width': 22.5,
                        'height': 8,
                        'rotate': 180
                    }
                }, {
                    'toStep': "piscine-1",
                    'type': 'oval',
                    'pos': {
                        'left': 48.5,
                        'top': 84.5,
                        'width': 24.5,
                        'height': 9.5
                    }
                }]
            }, {
                id: "SLPPE-victoire",
                img: "SLPPE victoire.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "start-1",
                    'path': 'starter',
                    'type': 'oval',
                    'pos': {
                        left: 7,
                        top: 85.5,
                        width: 17.5,
                        height: 9,
                    }
                }, {
                    'toStep': "SLPPE-corridor",
                    'type': 'square',
                    'pos': {
                        left: 69,
                        top: 4,
                        width: 14.5,
                        height: 21,
                    }
                }]
            }, {
                id: "porte-SLPPE-premium",
                img: "Porte SLPPE premium.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "SLPPE-corridor",
                    'type': 'arrow',
                    'pos': {
                        'left': 2.5,
                        'top': 90,
                        'width': 18.5,
                        'height': 7.5,
                        'rotate': 180
                    }
                }, {
                    'toStep': null,
                    'toStepCondition': (currentGame) => currentGame.playerWin ? "oui-sincere" : "oui-menteur",
                    'type': 'oval',
                    'pos': {
                        'left': 36.5,
                        'top': 81.5,
                        'width': 20.5,
                        'height': 9.5,
                        'rotate': 180
                    }
                }, {
                    'toStep': null,
                    'toStepCondition': (currentGame) => currentGame.playerWin ? "non-menteur" : "non-sincere",
                    'type': 'oval',
                    'pos': {
                        'left': 72.5,
                        'top': 81.5,
                        'width': 20.5,
                        'height': 9.5,
                        'rotate': 180
                    }
                }]
            }, {
                id: "oui-sincere",
                img: "Oui sincère.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "SLPPE-premium-corridor",
                    'type': 'oval',
                    'pos': {
                        'left': 57.5,
                        'top': 83.5,
                        'width': 21,
                        'height': 9.5
                    }
                }]
            }, {
                id: "oui-menteur",
                img: "Oui menteur.png",
                ambiance: "Baston.mp3",
                clickZones: [{
                    'toStep': "game-over",
                    'path': 'game-over',
                    'type': 'oval',
                    'pos': {
                        'left': 11.5,
                        'top': 82.5,
                        'width': 24.5,
                        'height': 10
                    }
                }]
            }, {
                id: "non-sincere",
                img: "Non sincère1.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "non-sincere-2",
                    'type': 'oval',
                    'pos': {
                        'left': 40.5,
                        'top': 79.5,
                        'width': 23.5,
                        'height': 11
                    }
                }]
            }, {
                id: "non-sincere-2",
                img: "Non sincère2.png",
                sound: "epiphanie.mp3",
                clickZones: [{
                    'toStep': "SLPPE-corridor",
                    'type': 'arrow',
                    'pos': {
                        'left': 8,
                        'top': 86,
                        'width': 28.5,
                        'height': 11.5,
                        'rotate': 180
                    }
                }]
            }, {
                id: "non-menteur",
                img: "Non menteur.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "game-over",
                    'path': 'game-over',
                    'type': 'oval',
                    'pos': {
                        'left': 36.5,
                        'top': 82.5,
                        'width': 23.5,
                        'height': 11
                    }
                }]
            }, {
                id: "piscine-1",
                img: "Piscine1.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "SLPPE-corridor",
                    'type': 'arrow',
                    'pos': {
                        'left': 2,
                        'top': 90,
                        'width': 21.5,
                        'height': 8.5,
                        'rotate': 180
                    }
                }, {
                    'toStep': "oubliettes",
                    'path': 'game-over',
                    'type': 'oval',
                    'pos': {
                        'left': 5.5,
                        'top': 21.5,
                        'width': 46.5,
                        'height': 11
                    }
                }, {
                    'toStep': "piscine-2",
                    'type': 'oval',
                    'pos': {
                        'left': 63.5,
                        'top': 22,
                        'width': 34,
                        'height': 10
                    }
                }]
            }, {
                id: "piscine-2",
                img: "Piscine2.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "piscine-1",
                    'type': 'arrow',
                    'pos': {
                        'left': 2,
                        'top': 90,
                        'width': 21.5,
                        'height': 8.5,
                        'rotate': 180
                    }
                }]
            }, {
                id: "SLPPE-premium-corridor",
                img: "SLPPE premium corridor.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "SLPPE-corridor",
                    'type': 'arrow',
                    'pos': {
                        'left': -2,
                        'top': 88,
                        'width': 23.5,
                        'height': 8.5,
                        'rotate': 90
                    }
                }, {
                    'toStep': "SLPPE-premium-bibliotheque",
                    'type': 'door',
                    'pos': {
                        'left': 7,
                        'top': 40,
                        'width': 22,
                        'height': 43
                    }
                }, {
                    'toStep': "SLPPE-premium-cine",
                    'type': 'door',
                    'pos': {
                        'left': 48,
                        'top': 47.5,
                        'width': 16,
                        'height': 27
                    }
                }, {
                    'toStep': "SLPPE-premium-distributeur",
                    'type': 'square',
                    'pos': {
                        'left': 75.5,
                        'top': 49,
                        'width': 8,
                        'height': 7.5
                    }
                }]
            }, {
                id: "SLPPE-premium-bibliotheque",
                img: "SLPPE premium bibliothèque.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "SLPPE-premium-corridor",
                    'type': 'arrow',
                    'pos': {
                        'left': -2,
                        'top': 88,
                        'width': 23.5,
                        'height': 8.5,
                        'rotate': 90
                    }
                }, {
                    'toStep': "mag-1",
                    'type': 'oval',
                    'pos': {
                        'left': 38,
                        'top': 81,
                        'width': 25.5,
                        'height': 12
                    }
                }]
            }, {
                id: "mag-1",
                img: "mag1.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "mag-2",
                    'type': 'arrow',
                    'pos': {
                        'left': 62,
                        'top': 87.5,
                        'width': 30,
                        'height': 10.5
                    }
                }]
            }, {
                id: "mag-2",
                img: "mag2.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "SLPPE-premium-bibliotheque",
                    'type': 'arrow',
                    'pos': {
                        'left': 62,
                        'top': 87.5,
                        'width': 30,
                        'height': 10.5
                    }
                }]
            }, {
                id: "SLPPE-premium-cine",
                img: "SLPPE premium ciné.png",
                video: "Rencontre Brandon_Marlene.mp4",
                playbackRate: 1,
                loopVideo: true,
                atEndStep: "SLPPE-premium-corridor",
                clickZones: [{
                    'toStep': "SLPPE-premium-corridor",
                    'type': 'arrow',
                    'pos': {
                        'left': 82,
                        'top': 90,
                        'width': 17.5,
                        'height': 7,
                        'rotate': 90
                    }
                }]
            }, {
                id: "SLPPE-premium-distributeur",
                img: "SLPPE premium distributeur.png",
                ambiance: "SLPPE.mp3",
                clickZones: [{
                    'toStep': "SLPPE-premium-corridor",
                    'type': 'arrow',
                    'pos': {
                        'left': 2.5,
                        'top': 90,
                        'width': 16.5,
                        'height': 7,
                        'rotate': 90
                    }
                }, {
                    'toStep': "SLPPE-premium-ticket",
                    'type': 'oval',
                    'pos': {
                        'left': 32,
                        'top': 73.5,
                        'width': 34.5,
                        'height': 15
                    }
                }]
            }, {
                id: "SLPPE-premium-ticket",
                img: "SLPPE premium ticket.png",
                sound: "epiphanie.mp3",
                clickZones: [{
                    'toStep': "SLPPE-premium-corridor",
                    'type': 'arrow',
                    'pos': {
                        'left': 7.5,
                        'top': 86,
                        'width': 29.5,
                        'height': 11,
                        'rotate': 180
                    }
                }]
            }
        ],
        troptard: [{
            id: "TROP-TARD",
            img: "Trop tard.png",
            sound: "Trop_tard.mp3",
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
                'toStep': "TROP-TARD7",
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
            id: "TROP-TARD7",
            img: "Trop tard7.png",
            sound: "fail.mp3",
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
                'type': 'oval',
                'pos': {
                    'left': 62.5,
                    'top': 76,
                    'width': 29,
                    'aspect-ratio': 1.3 / 1
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
            ambiance: "Attente.mp3",
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
            sound: "Bravo.mp3",
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
                'toStep': null,
                'toStepCondition': (currentGame) => currentGame.playerWin ? "SLPPE-victoire" : "SLPPE",
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
            sound: "suspens.mp3",
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
            img: "bouzin.png",
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
            sound: "epiphanie.mp3",
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
            sound: "fail.mp3",
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
                sound: "Game_over.mp3",
                video: "chargement.mp4",
                playbackRate: 0.1,
                atEndStep: "start-1",
                atEndPath: "starter",
                clickZones: []
            }, {
                id: "oubliettes",
                img: "Oubliettes.png",
                sound: "Oubliettes.mp3",
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
                ambiance: "Baston.mp3",
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
                ambiance: "Mozart.mp3",
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
                ambiance: "Baston.mp3",
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
                    'toStep': null,
                    'toStepCondition': (currentGame) => currentGame.playerWin ? "SLPPE-victoire" : "SLPPE",
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
                ambiance: "Baston.mp3",
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
                ambiance: "Baston.mp3",
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
                ambiance: "Baston.mp3",
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
                sound: "fail.mp3",
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
                sound: "epiphanie.mp3",
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
                ambiance: "Baston.mp3",
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
                ambiance: "Baston.mp3",
                clickZones: [{
                    'toStep': "zz-245",
                    'type': 'arrow',
                    'pos': {
                        'left': 71,
                        'top': 89,
                        'width': 23.5,
                        'height': 8
                    }
                }]
            }, {
                id: "zz-245",
                img: "245.png",
                sound: "epiphanie.mp3",
                isWin: true,
                clickZones: [{
                    'toStep': "zz-208",
                    'type': 'arrow',
                    'pos': {
                        'left': 71.5,
                        'top': 87.5,
                        'width': 23,
                        'height': 8.5
                    }
                }]
            }, {
                id: "zz-208",
                img: "208.png",
                ambiance: "emotion.mp3",
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
                ambiance: "emotion.mp3",
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
                ambiance: "emotion.mp3",
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
                    'toStep': "game-win",
                    'type': 'oval',
                    'pos': {
                        'left': 31,
                        'top': 73.5,
                        'width': 33.5,
                        'height': 15.5
                    }
                }]
            }, {
                id: "game-win",
                img: "246.png",
                sound: "Bravo.mp3",
                clickZones: [{
                    'toStep': "SLPPE-victoire",
                    'path': 'SLPPE',
                    'type': 'arrow',
                    'pos': {
                        'left': 73,
                        'top': 89,
                        'width': 23.5,
                        'height': 8.5
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

window.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'visible') {
        MarlenBrando.fadeInAndPlay(MarlenBrando.nextAmbianceEl);
    } else {
        for (const fade in MarlenBrando._fadeInRaf) {
            cancelAnimationFrame(MarlenBrando._fadeInRaf[fade]);
        }
        for (const fade in MarlenBrando._fadeOutRaf) {
            cancelAnimationFrame(MarlenBrando._fadeOutRaf[fade]);
        }
        if (MarlenBrando.audioEl(MarlenBrando.nextAmbianceEl)) {
            MarlenBrando.audioEl(MarlenBrando.nextAmbianceEl).pause();
        }
        if (MarlenBrando.audioEl(MarlenBrando.nextShortEl)) {
            MarlenBrando.audioEl(MarlenBrando.nextShortEl).pause();
        }
    }
});
