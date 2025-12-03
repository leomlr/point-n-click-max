
const MarlenBrando = {
    currentStepId: null,
    currentZones: null,
    currentGamePath: null,
    imageEl: document.getElementById("current-img"),
    gameContainer: document.querySelector(".img-wrapper"),
    paths: {
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
                    'toStep': "partir",
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
                    'player': "marlene",
                    'toStep': "m-9",
                    'type': 'oval',
                    'pos': {
                        'left': 47,
                        'top': 87.5,
                        'width': 36,
                        'aspect-ratio': 2 / 1

                    }
                }, {
                    'player': "brandon",
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
                    'toStep': "SLPPE3",
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
                    'toStep': "casser-porte",
                    'type': 'oval',
                    'pos': {
                        'left': 4.5,
                        'top': 76,
                        'width': 40,
                        'aspect-ratio': 1.35 / 1
                    }
                }, {
                    'toStep': "inventer-machine",
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
        brandon: BRANDON_STEPS,
        marlene: MARLENE_STEPS,
    },
    init: function () {
        this.currentGamePath = 'starter';
        this.currentStepId = 'start-1';
        this.currentZones = [];
        this.applyStep(this.paths[this.currentGamePath].find(step => step.id === this.currentStepId));
        console.log(this)
    },
    showImage: function (src) {
        this.imageEl.src = 'media/' + src;
        this.imageEl.classList.add("contain-full");
    },
    addClickableZone: function (clickZone) {
        const zone = document.createElement('a');
        console.log(clickZone)
        if (clickZone.toStep) {
            zone.id = clickZone.toStep + '-zone';
        } else if (clickZone.type == 'every') {
            zone.id = clickZone.type + '-zone';
        }
        this.currentZones.push(zone.id);

        zone.className = 'clickable-zone' + (clickZone.type ? ' clickable-' + clickZone.type : '');
        if (clickZone.pos) {
            zone.style.left = clickZone.pos.left + "%";
            zone.style.top = clickZone.pos.top + "%";
            zone.style.width = clickZone.pos.width + "%";
            if (clickZone.pos.height) {
                zone.style.height = clickZone.pos.height + "%";
            }
            if (clickZone.pos['aspect-ratio']) {
                zone.style['aspect-ratio'] = clickZone.pos['aspect-ratio'];
            }
            if (clickZone.pos.rotate) {
                zone.style.transform = "rotate(" + clickZone.pos.rotate + "deg)"
            }
        }
        zone.style.display = "block";
        this.gameContainer.appendChild(zone);

        zone.onclick = () => {
            if (clickZone.player) {
                this.currentGamePath = clickZone.player;
            } else if (['SLPPE', 'game-over'].includes(clickZone.toStep)) {
                this.currentGamePath = clickZone.toStep;
            }
            const step = this.paths[this.currentGamePath].find(obj => (obj.id === clickZone.toStep));
            this.applyStep(step);
        };
    },
    removeClickableZones: function () {
        for (const id of this.currentZones) {
            document.getElementById(id).remove();
        }
        this.currentZones = [];
    },
    applyStep: function (step) {
        this.currentStepId = step.id;
        this.removeClickableZones();
        this.showImage(step.img);
        for (const newClickZone of step.clickZones) {
            this.addClickableZone(newClickZone);
        }
    }
}

MarlenBrando.init();
