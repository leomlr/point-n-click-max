const MARLENE_STEPS = [
    {
        id: "m-9",
        img: "9.png",
        clickZones: [{
            'toStep': "m-14",
            'type': 'arrow',
            'pos': {
                'left': 68,
                'top': 86.5,
                'width': 29,
                'height': 11
            }
        }]
    }, {
        id: "m-14",
        img: "14.png",
        clickZones: [{
            'toStep': "m-15",
            'throwStep': "page-suspens",
            'type': 'arrow',
            'pos': {
                'left': 77,
                'top': 89.5,
                'width': 23
            }
        }]
    }, {
        id: "page-suspens",
        img: "11.png",
        clickZones: [{
            'toStep': null,
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 88,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-15",
        img: "15.png",
        clickZones: [{
            'toStep': "m-16",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89.5,
                'width': 25,
                'height': 8,
            }
        }]
    }, {
        id: "m-16",
        img: "16.png",
        clickZones: [{
            'toStep': "SLPPE",
            'path': 'SLPPE',
            'type': 'oval',
            'pos': {
                'left': 32.5,
                'top': 9,
                'width': 44,
                'aspect-ratio': 1.35 / 1
            }
        }, {
            'toStep': "souterrains-poisseuses",
            'type': 'oval',
            'pos': {
                'left': 21.5,
                'top': 59,
                'width': 60,
                'aspect-ratio': 1.35 / 1
            }
        }]
    }, {
        id: "souterrains-poisseuses",
        img: "90.png",
        clickZones: [{
            'toStep': "m-91",
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 88.5,
                'width': 23.5,
                'height': 8,
            }
        }]
    }, {
        id: "m-91",
        img: "91.png",
        clickZones: [{
            'toStep': "m-92",
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 88.5,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "m-92",
        img: "92.png",
        clickZones: [{
            'toStep': "m-93",
            'type': 'arrow',
            'pos': {
                'left': 69,
                'top': 86.5,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-93",
        img: "93.png",
        clickZones: [{
            'toStep': "aller-droite",
            'type': 'arrow',
            'pos': {
                'left': 57,
                'top': 86,
                'width': 33,
                'height': 12
            }
        }, {
            'toStep': "aller-tout-droit",
            'type': 'arrow',
            'pos': {
                'left': 5,
                'top': 81,
                'width': 29,
                'height': 12,
                'rotate': -90
            }
        }]
    }, {
        id: "aller-droite",
        img: "102.png",
        clickZones: [{
            'toStep': "m-93",
            'type': 'arrow',
            'pos': {
                'left': 4,
                'top': 87.5,
                'width': 24,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-103",
            'type': 'arrow',
            'pos': {
                'left': 69,
                'top': 86.5,
                'width': 27.5,
                'height': 8.5,
                'rotate': -90
            }
        }]
    }, {
        id: "m-103",
        img: "103.png",
        clickZones: [{
            'toStep': "m-104",
            'type': 'oval',
            'pos': {
                'left': 10,
                'top': 76,
                'width': 28,
                'aspect-ratio': 1.3 / 1
            }
        }, {
            'toStep': "crier-fort",
            'type': 'oval',
            'pos': {
                'left': 53,
                'top': 75.5,
                'width': 34,
                'aspect-ratio': 1.5 / 1
            }
        }]
    }, {
        id: "m-104",
        img: "104.png",
        clickZones: [{
            'toStep': "m-103",
            'type': 'arrow',
            'pos': {
                'left': 11,
                'top': 85.5,
                'width': 31,
                'height': 11.5,
                'rotate': 180
            }
        }]
    }, {
        id: "crier-fort",
        img: "105.png",
        clickZones: [{
            'toStep': "m-106",
            'type': 'arrow',
            'pos': {
                'left': 4,
                'top': 86.5,
                'width': 31,
                'height': 11,
                'rotate': 180
            }
        }]
    }, {
        id: "m-106",
        img: "106.png",
        clickZones: [{
            'toStep': "m-107",
            'type': 'oval',
            'pos': {
                'left': 40,
                'top': 82,
                'width': 21,
                'height': 10
            }
        }]
    }, {
        id: "m-107",
        img: "107.png",
        clickZones: [{
            'toStep': "m-108",
            'type': 'oval',
            'pos': {
                'left': 63,
                'top': 83,
                'width': 23,
                'height': 9
            }
        }]
    }, {
        id: "m-108",
        img: "108.png",
        clickZones: [{
            'toStep': "m-110",
            'type': 'oval',
            'pos': {
                'left': 16.5,
                'top': 84,
                'width': 23.5,
                'height': 8.5
            }
        }, {
            'toStep': "m-109",
            'type': 'oval',
            'pos': {
                'left': 62,
                'top': 83.5,
                'width': 21,
                'height': 9.5
            }
        }]
    }, {
        id: "m-109",
        img: "109.png",
        clickZones: [{
            'toStep': "m-111",
            'type': 'oval',
            'pos': {
                'left': 30,
                'top': 83,
                'width': 24,
                'height': 8.5
            }
        }]
    }, {
        id: "m-110",
        img: "110.png",
        clickZones: [{
            'toStep': "m-111",
            'type': 'oval',
            'pos': {
                'left': 30,
                'top': 83,
                'width': 24,
                'height': 9
            }
        }]
    }, {
        id: "m-111",
        img: "111.png",
        clickZones: [{
            'toStep': "m-112",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 87.5,
                'width': 24,
                'height': 8
            }
        }]
    }, {
        id: "m-112",
        img: "112.png",
        clickZones: [{
            'toStep': "non-je-reste",
            'type': 'oval',
            'pos': {
                'left': 10.5,
                'top': 77.5,
                'width': 33,
                'height': 14.5
            }
        }, {
            'toStep': "daccord-je-suis",
            'type': 'oval',
            'pos': {
                'left': 57.5,
                'top': 81,
                'width': 24,
                'height': 9
            }
        }]
    }, {
        id: "daccord-je-suis",
        img: "117.png",
        clickZones: [{
            'toStep': "suivre-individu",
            'type': 'oval',
            'pos': {
                'left': 11,
                'top': 76.5,
                'width': 32,
                'height': 14.5
            }
        }, {
            'toStep': "direction-bruit",
            'type': 'oval',
            'pos': {
                'left': 57,
                'top': 80,
                'width': 30,
                'height': 10.5
            }
        }]
    }, {
        id: "direction-bruit",
        img: "118.png",
        clickZones: [{
            'toStep': "m-119",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 89.5,
                'width': 23,
                'height': 8
            }
        }]
    }, {
        id: "m-119",
        img: "119.png",
        clickZones: [{
            'toStep': "m-116",
            'type': 'oval',
            'pos': {
                'left': 11,
                'top': 3,
                'width': 58,
                'aspect-ratio': 1.6 / 1
            }
        }, {
            'toStep': "m-116",
            'type': 'oval',
            'pos': {
                'left': 55,
                'top': 34,
                'width': 42,
                'aspect-ratio': 1.2 / 1
            }
        }, {
            'toStep': "m-116",
            'type': 'oval',
            'pos': {
                'left': 11,
                'top': 38,
                'width': 29.5,
                'aspect-ratio': 1.5 / 1
            }
        }, {
            'toStep': "m-116",
            'type': 'oval',
            'pos': {
                'left': 6,
                'top': 60,
                'width': 58,
                'height': 26
            }
        }]
    }, {
        id: "non-je-reste",
        img: "113.png",
        clickZones: [{
            'toStep': "m-114",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 88.5,
                'width': 24.5,
                'height': 8
            }
        }]
    }, {
        id: "m-114",
        img: "114.png",
        clickZones: [{
            'toStep': "m-115",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 89,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "m-115",
        img: "115.png",
        clickZones: [{
            'toStep': "m-116",
            'type': 'arrow',
            'pos': {
                'left': 72,
                'top': 89,
                'width': 23,
                'height': 8
            }
        }]
    }, {
        id: "m-116",
        img: "116.png",
        clickZones: [{
            'toStep': "game-over",
            'path': 'game-over',
            'type': 'arrow',
            'pos': {
                'left': 69.5,
                'top': 88,
                'width': 24,
                'height': 8
            }
        }]
    }, {
        id: "suivre-individu",
        img: "120.png",
        clickZones: [{
            'toStep': "course-poursuite",
            'type': 'oval',
            'pos': {
                'left': 33,
                'top': 83,
                'width': 26,
                'height': 9
            }
        }]
    }, {
        id: "course-poursuite",
        video: "course poursuite QQR 500 entier compressee.mp4",
        atEndStep: 'm-121'
    }, {
        id: "m-121",
        img: "121.png",
        clickZones: [{
            'toStep': "rentrer-chatiere",
            'type': 'arrow',
            'pos': {
                'left': 2,
                'top': 77,
                'width': 40,
                'height': 16,
                'rotate': -90
            }
        }, {
            'toStep': "continuer-fuir",
            'type': 'arrow',
            'pos': {
                'left': 51,
                'top': 82,
                'width': 39,
                'height': 14
            }
        }]
    }, {
        id: "continuer-fuir",
        img: "122.png",
        clickZones: [{
            'toStep': "m-123",
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 88,
                'width': 24,
                'height': 9
            }
        }]
    }, {
        id: "m-123",
        img: "123.png",
        clickZones: [{
            'toStep': "TROP-TARD",
            'path': 'troptard',
            'type': 'square',
            'pos': {
                'left': 48.5,
                'top': 34,
                'width': 11,
                'height': 11.5
            }
        }]
    }
]