
const MarlenBrando = {
    currentStepId: null,
    currentZones: null,
    currentGame: null,
    imageEl: document.getElementById("current-img"),
    gameContainer: document.querySelector(".img-wrapper"),
    history: null,
    adminMode: true,
    MDP: 'U0xJUFZPVVBMQUk=',
    init: function () {
        this.isArrivingToGame = true;
        this.currentZones = [];
        this.getGameFromLS();
        if (!this.currentGame.stepId) {
            this.currentGame.history = [];
            this.currentGame.stepId = 'start-1';
            this.currentGame.path = 'starter';
        } else {
            if (this.currentGame.player) {
                // Set image for returning by player 
            }
            if (!this.currentGame.history) {
                this.currentGame.history = [];
            }
        }
        this.applyStep(this.currentGame.stepId);
    },
    showImage: function (src) {
        return new Promise((resolve) => {
            const onLoad = () => {
                this.imageEl.removeEventListener('load', onLoad);
                resolve();
            };
            this.imageEl.addEventListener('load', onLoad);
            this.imageEl.src = 'media/' + src;
            this.imageEl.classList.add("contain-full");
        });
    },
    addClickableZone: function (clickZone, stepIdAfterThrower = null) {
        let stepId = clickZone.toStep;
        if (stepIdAfterThrower) {
            stepId = stepIdAfterThrower;
        }

        const zone = this.createZone(stepId, clickZone);
        this.gameContainer.appendChild(zone);

        zone.onclick = async () => {
            if (clickZone.isBack) {
                clearInterval(this.intervalId);
                document.querySelector('.chrono-wrapper').classList.remove('visible');
                this.currentGame.history.pop();
            }
            if (clickZone.throwStep) {
                return await this.applyStep(clickZone.throwStep, clickZone.isBack, stepId);
            }
            if (clickZone.path) {
                this.currentGame.path = clickZone.path;
                if (['brandon', 'marlene'].includes(clickZone.path)) {
                    this.currentGame.player = clickZone.path;
                }
            } else if (['game-over'].includes(stepId)) {
                this.currentGame.path = stepId;
            }
            await this.applyStep(stepId, clickZone.isBack);
        };
    },
    createZone: function (id, clickZone) {
        const z = document.createElement('a');
        if (clickZone.throwStep) {
            z.id = clickZone.throwStep + '-zone';
        } else if (id) {
            z.id = id + '-zone';
        }
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
    removeClickableZones: function () {
        document.querySelectorAll('.clickable-zone').forEach(el => el.remove());
    },
    encodeText(str) {
        const utf8 = new TextEncoder().encode(str);
        let binary = "";
        utf8.forEach(b => binary += String.fromCharCode(b));
        return btoa(binary);
    },
    applyStep: async function (id, isBack = false, stepIdAfterThrower = null) {
        this.removeClickableZones();
        let step;
        if (id == 'bouzin') {
            step = this.GamePaths.bouzin;
        } else {
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
        }
        this.currentGame.stepId = step.id;
        if (!step.img) {
            console.error("Unable to find image: " + step.id + " for player " + this.currentGame.player);
            return await this.applyStep('bouzin');
        } else {
            await this.showImage(step.img);
        }

        if (step.clickZones) {
            for (const newClickZone of step.clickZones) {
                this.addClickableZone(newClickZone, stepIdAfterThrower);
            }
        }
        const currentGame = {
            path: this.currentGame.path,
            stepId: this.currentGame.stepId
        };
        this.saveGameInLS();
        if (!isBack) {
            if (!this.isArrivingToGame) {
                this.currentGame.history.push(currentGame);
            } else {
                this.isArrivingToGame = false;
                if (this.currentGame.history.length == 0) {
                    this.currentGame.history.push(currentGame);
                }
            }
        }
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
        if (this.currentGame.stepId == 'time-machine-construct') {
            document.querySelector('.chrono-wrapper').classList.add('visible');
            this.startCountDown();
        }

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
    },
    startCountDown: async function () {
        let remainingTime = 15 * 60; // 15 minutes
        if (this.adminMode) {
            remainingTime = 15;
        }
        if (this.currentGame.endTime) {
            const now = Date.now();
            remainingTime = Math.floor((this.currentGame.endTime - now) / 1000); // en secondes
        } else {
            this.currentGame.endTime = Date.now() + remainingTime * 1000;
            this.saveGameInLS();
        }
        if (remainingTime <= 0) {
            this.currentGame.endTime = null;
            return await this.applyStep('TROP-TARD5');
        }
        const countdownEl = document.getElementById("countdown");
        const updateCountdown = async () => {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            const minStr = String(minutes).padStart(2, "0");
            const secStr = String(seconds).padStart(2, "0");
            countdownEl.textContent = `${minStr}:${secStr}`;
            if (remainingTime <= 0) {
                clearInterval(this.intervalId);
                document.querySelector('.chrono-wrapper').classList.remove('visible');
                this.currentGame.endTime = null;
                await this.applyStep('TROP-TARD5');
            } else {
                remainingTime--;
            }
        }
        updateCountdown();
        this.intervalId = setInterval(updateCountdown, 1000);
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
                    'type': 'arrow',
                    'pos': BOTTOM_RIGHT_ARROW
                }]
            }, {
                id: "start-2",
                img: "2.png",
                clickZones: [{
                    'toStep': "start-3",
                    'type': 'arrow',
                    'pos': BOTTOM_RIGHT_ARROW
                }]
            }, {
                id: "start-3",
                img: "3.png",
                clickZones: [{
                    'toStep': "start-4",
                    'type': 'arrow',
                    'pos': BOTTOM_RIGHT_ARROW
                }]
            }, {
                id: "start-4",
                img: "4.png",
                clickZones: [{
                    'toStep': "start-5",
                    'type': 'arrow',
                    'pos': {
                        'left': 64,
                        'top': 27.5,
                        'width': 32
                    }
                }]
            }, {
                id: "start-5",
                img: "5.png",
                clickZones: [{
                    'toStep': "start-6",
                    'type': 'arrow',
                    'pos': BOTTOM_RIGHT_ARROW
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
                        width: 24,
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
                        width: 24,
                        height: 9,
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
            img: "under-construction-animated-gif-8.gif"
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
                    'left': 9.5,
                    'top': 76.5,
                    'width': 33,
                    'aspect-ratio': 1.5 / 1
                }
            }]
        }, {
            id: "TROP-TARD6",
            img: "Trop tard6.png",
            clickZones: [{
                'toStep': "start-1",
                'path': 'starter',
                'type': 'arrow',
                'pos': {
                    'left': 73,
                    'top': 89,
                    'width': 24,
                    'height': 10
                }
            }]
        }],
        'game-over': [
            {
                id: "game-over",
                img: "Game over.png",
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
        brandon: BRANDON_STEPS,
        marlene: MARLENE_STEPS,
    },
}

MarlenBrando.init();
