const BRANDON_STEPS = [
    {
        id: "b-8",
        img: "8.png",
        clickZones: [{
            'toStep': "b-10",
            'type': 'arrow',
            'pos': BOTTOM_RIGHT_ARROW
        }]
    }, {
        id: "b-10",
        img: "10.png",
        clickZones: [{
            'toStep': "b-12",
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
                'top': 88.5,
                'width': 23,
                'height': 8
            }
        }]
    }, {
        id: "b-12",
        img: "12.png",
        clickZones: [{
            'toStep': "b-13",
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 90,
                'width': 26
            }
        }]
    }, {
        id: "b-13",
        img: "13.png",
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
            'toStep': "montagnes-lugubres",
            'type': 'oval',
            'pos': {
                'left': 21.5,
                'top': 59,
                'width': 60,
                'aspect-ratio': 1.35 / 1
            }
        }]
    }, {
        id: "montagnes-lugubres",
        img: "17.png",
        clickZones: [{
            'toStep': "b-18",
            'type': 'arrow',
            'pos': {
                'left': 72,
                'top': 89.5,
                'width': 26
            }
        }]
    }, {
        id: "b-18",
        img: "18.png",
        clickZones: [{
            'toStep': "couper-gauche",
            'type': 'arrow',
            'pos': {
                'left': 6,
                'top': 19,
                'width': 36,
                'rotate': 180
            }
        }, {
            'toStep': "b-32",
            'throwStep': "continuer-plus-haut",
            'type': 'arrow',
            'pos': {
                'left': 59.5,
                'top': 20.5,
                'width': 40,
                'rotate': -90
            }
        }]
    }, {
        id: "couper-gauche",
        img: "19.png",
        clickZones: [{
            'toStep': "b-20",
            'type': 'arrow',
            'pos': {
                'left': 69,
                'top': 89,
                'width': 26,
                'height': 7
            }
        }]
    }, {
        id: "b-20",
        img: "20.png",
        clickZones: [{
            'toStep': "b-21",
            'type': 'arrow',
            'pos': {
                'left': 79,
                'top': 92.5,
                'width': 18,
                'height': 6
            }
        }]
    }, {
        id: "b-21",
        img: "21.png",
        clickZones: [{
            'toStep': "plonger-lac",
            'type': 'arrow',
            'pos': {
                'left': 38,
                'top': 64,
                'width': 22,
                'height': 17,
                'rotate': -90
            }
        }, {
            'toStep': "b-32",
            'throwStep': "continuer-plus-haut",
            'type': 'arrow',
            'pos': {
                'left': 45,
                'top': 83,
                'width': 51,
                'height': 14
            }
        }]
    }, {
        id: "plonger-lac",
        img: "22.png",
        clickZones: [{
            'toStep': "b-23",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 89.5,
                'width': 26,
                'height': 8
            }
        }]
    }, {
        id: "b-23",
        img: "23.png",
        clickZones: [{
            'toStep': "b-24",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 24,
                'height': 10
            }
        }]
    }, {
        id: "b-24",
        img: "24.png",
        clickZones: [{
            'toStep': "parler-poisson-combattant",
            'type': 'oval',
            'pos': {
                'left': 8.5,
                'top': 77,
                'width': 35,
                'aspect-ratio': 1.35 / 1
            }
        }, {
            'toStep': "partir-37",
            'type': 'oval',
            'pos': {
                'left': 58.5,
                'top': 77,
                'width': 35,
                'aspect-ratio': 1.35 / 1
            }
        }]
    }, {
        id: "parler-poisson-combattant",
        img: "25.png",
        clickZones: [{
            'toStep': "partir-37",
            'type': 'square',
            'pos': {
                'left': 8,
                'top': 77,
                'width': 39,
                'height': 16
            }
        }, {
            'toStep': "ecole-poisson",
            'type': 'square',
            'pos': {
                'left': 55,
                'top': 77.5,
                'width': 39,
                'height': 16
            }
        }]
    }, {
        id: "ecole-poisson",
        img: "26.png",
        clickZones: [{
            'toStep': "b-27",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 24,
                'height': 10
            }
        }]
    }, {
        id: "b-27",
        img: "27.png",
        clickZones: [{
            'toStep': "SLPPE",
            'path': 'SLPPE',
            'type': 'arrow',
            'pos': {
                'left': 4,
                'top': 80,
                'width': 46,
                'height': 17,
                'rotate': 180
            }
        }, {
            'toStep': "parler-poisson-combattant-2",
            'type': 'arrow',
            'pos': {
                'left': 52,
                'top': 81,
                'width': 44,
                'height': 17
            }
        }]
    }, {
        id: "parler-poisson-combattant-2",
        img: "28.png",
        clickZones: [{
            'toStep': "TROP-TARD",
            'path': 'troptard',
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 24,
                'height': 10
            }
        }]
    }, {
        id: "continuer-plus-haut",
        img: "31.png",
        clickZones: [{
            'toStep': null,
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 23,
                'height': 8
            }
        }]
    }, {
        id: "partir-37",
        img: "37.png",
        clickZones: [{
            'toStep': "b-49",
            'throwStep': "page-suspens",
            'type': 'arrow',
            'pos': {
                'left': 69,
                'top': 89,
                'width': 22,
                'height': 9
            }
        }]
    }, {
        id: "b-32",
        img: "32.png",
        clickZones: [{
            'toStep': "b-33",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 88.5,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "b-33",
        img: "33.png",
        clickZones: [{
            'toStep': "b-34",
            'type': 'arrow',
            'pos': {
                'left': 64,
                'top': 18,
                'width': 39,
                'height': 14,
                'rotate': -58
            }
        }]
    }, {
        id: "b-34",
        img: "34.png",
        clickZones: [{
            'toStep': "b-35",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 74,
                'width': 24,
                'height': 8
            }
        }]
    }, {
        id: "b-35",
        img: "35.png",
        clickZones: [{
            'toStep': "lecher-empreinte",
            'type': 'oval',
            'pos': {
                'left': 35.5,
                'top': 2,
                'width': 58,
                'aspect-ratio': 1.5 / 1
            }
        }, {
            'toStep': "SLPPE",
            'path': 'SLPPE',
            'type': 'oval',
            'pos': {
                'left': 20,
                'top': 56,
                'width': 60,
                'aspect-ratio': 1.35 / 1
            }
        }]
    }, {
        id: "lecher-empreinte",
        img: "36.png",
        clickZones: [{
            'toStep': "b-38",
            'type': 'arrow',
            'pos': {
                'left': 72,
                'top': 87.5,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "b-38",
        img: "38.png",
        clickZones: [{
            'toStep': "b-39",
            'type': 'oval',
            'pos': {
                'left': 9.5,
                'top': 75,
                'width': 38,
                'aspect-ratio': 1.5 / 1
            }
        }, {
            'toStep': "b-40",
            'throwStep': "page-suspens",
            'type': 'oval',
            'pos': {
                'left': 61,
                'top': 75.5,
                'width': 34,
                'aspect-ratio': 1.3 / 1
            }
        }]
    }, {
        id: "b-39",
        img: "39.png",
        clickZones: [{
            'toStep': "SLPPE",
            'path': 'SLPPE',
            'type': 'oval',
            'pos': {
                'left': 62,
                'top': 76,
                'width': 34,
                'aspect-ratio': 1.3 / 1
            }
        }, {
            'toStep': "b-42",
            'type': 'oval',
            'pos': {
                'left': 9,
                'top': 75,
                'width': 38,
                'aspect-ratio': 1.3 / 1
            }
        }]
    }, {
        id: "b-40",
        img: "40.png",
        clickZones: [{
            'toStep': "b-41",
            'type': 'oval',
            'pos': {
                'left': 9,
                'top': 75.5,
                'width': 39,
                'aspect-ratio': 1.3 / 1
            }
        }, {
            'toStep': "se-battre",
            'type': 'oval',
            'pos': {
                'left': 62,
                'top': 76,
                'width': 33.5,
                'aspect-ratio': 1.3 / 1
            }
        }]
    }, {
        id: "b-42",
        img: "42.png",
        clickZones: [{
            'toStep': "b-43",
            'throwStep': "continuer-plus-haut",
            'type': 'arrow',
            'pos': {
                'left': 2,
                'top': 4.5,
                'width': 55,
                'height': 17,
                'rotate': 180
            }
        }]
    }, {
        id: "b-43",
        img: "43.png",
        clickZones: [{
            'toStep': "b-44",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 88,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "b-44",
        img: "44.png",
        clickZones: [{
            'toStep': "SLPPE",
            'path': 'SLPPE',
            'type': 'oval',
            'pos': {
                'left': 37,
                'top': 2,
                'width': 44,
                'aspect-ratio': 1.3 / 1
            }
        }, {
            'toStep': "rentrer-grotte",
            'type': 'oval',
            'pos': {
                'left': 10,
                'top': 35,
                'width': 33.5,
                'aspect-ratio': 1.2 / 1
            }
        }, {
            'toStep': "oubliettes",
            'path': 'game-over',
            'type': 'oval',
            'pos': {
                'left': 24,
                'top': 62,
                'width': 60.5,
                'aspect-ratio': 1.6 / 1
            }
        }]
    }, {
        id: "rentrer-grotte",
        img: "45.png",
        clickZones: [{
            'toStep': "b-46",
            'throwStep': "page-suspens",
            'type': 'arrow',
            'pos': {
                'left': 57.5,
                'top': 85,
                'width': 39.5,
                'height': 12
            }
        }]
    }, {
        id: "b-46",
        img: "46.png",
        clickZones: [{
            'toStep': "b-47",
            'type': 'arrow',
            'pos': {
                'left': 69,
                'top': 87.5,
                'width': 23,
                'height': 8
            }
        }]
    }, {
        id: "b-47",
        img: "47.png",
        clickZones: [{
            'toStep': "b-48",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 23,
                'height': 8
            }
        }]
    }, {
        id: "b-48",
        img: "48.png",
        clickZones: [{
            'toStep': "game-over",
            'type': 'arrow',
            'pos': {
                'left': 74,
                'top': 90,
                'width': 24,
                'height': 8
            }
        }]
    }, {
        id: "b-41",
        img: "41.png",
        clickZones: [{
            'toStep': "b-42",
            'type': 'arrow',
            'pos': {
                'left': 73.5,
                'top': 89,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "b-49",
        img: "49.png",
        clickZones: [{
            'toStep': "b-50",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 23,
                'height': 8
            }
        }]
    }, {
        id: "b-50",
        img: "50.png",
        clickZones: [{
            'toStep': "b-51",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 23,
                'height': 8
            }
        }]
    }, {
        id: "b-51",
        img: "51.png",
        clickZones: [{
            'toStep': "cantine",
            'type': 'oval',
            'pos': {
                'left': 10,
                'top': 78.5,
                'width': 34,
                'aspect-ratio': 1.6 / 1
            }
        }, {
            'toStep': "b-48",
            'type': 'oval',
            'pos': {
                'left': 59,
                'top': 74.5,
                'width': 34,
                'aspect-ratio': 1.3 / 1
            }
        }]
    }, {
        id: "cantine",
        img: "52.png",
        clickZones: [{
            'toStep': "frite",
            'type': 'oval',
            'pos': {
                'left': 7.5,
                'top': 83,
                'width': 27,
                'aspect-ratio': 1.5 / 1
            }
        }, {
            'toStep': "gauffre",
            'type': 'oval',
            'pos': {
                'left': 58,
                'top': 77.5,
                'width': 29,
                'aspect-ratio': 1.2 / 1
            }
        }]
    }, {
        id: "frite",
        img: "53.png",
        clickZones: [{
            'toStep': "b-54",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 89,
                'width': 24,
                'height': 8
            }
        }]
    }, {
        id: "b-54",
        img: "54.png",
        clickZones: [{
            'toStep': "oubliettes",
            'path': 'game-over',
            'type': 'arrow',
            'pos': {
                'left': 74,
                'top': 89,
                'width': 22.5,
                'height': 8
            }
        }]
    }, {
        id: "gauffre",
        img: "55.png",
        clickZones: [{
            'toStep': "b-56",
            'type': 'arrow',
            'pos': {
                'left': 71.5,
                'top': 89,
                'width': 22.5,
                'height': 8
            }
        }]
    }, {
        id: "b-56",
        img: "56.png",
        inputs: {
            'correct': {
                'toStep': "b-60"
            },
            'incorrect': {
                'toStep': "b-57"
            }
        },
        clickZones: [{
            'toStep': "aucune-idee",
            'type': 'oval',
            'pos': {
                'left': 59,
                'top': 1,
                'width': 34,
                'aspect-ratio': 1.3 / 1
            }
        }, {
            'testPwd': true,
            'toStep': null,
            'type': 'arrow',
            'pos': {
                'left': 58,
                'top': 85,
                'width': 38.5,
                'height': 12
            }
        }]
    }, {
        id: "b-57",
        img: "57.png",
        inputs: {
            'correct': {
                'toStep': "b-60",
            },
            'incorrect': {
                'toStep': "b-58"
            }
        },
        clickZones: [{
            'toStep': "aucune-idee",
            'type': 'oval',
            'pos': {
                'left': 59,
                'top': 1,
                'width': 34,
                'aspect-ratio': 1.3 / 1
            }
        }, {
            'testPwd': true,
            'toStep': null,
            'type': 'arrow',
            'pos': {
                'left': 58,
                'top': 85,
                'width': 38.5,
                'height': 12
            }
        }]
    }, {
        id: "b-58",
        img: "58.png",
        clickZones: [{
            'toStep': "aucune-idee",
            'type': 'arrow',
            'pos': {
                'left': 74,
                'top': 89,
                'width': 22.5,
                'height': 8
            }
        }]
    }, {
        id: "aucune-idee",
        img: "59.png",
        clickZones: [{
            'toStep': "bouzin",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 88.5,
                'width': 23.5,
                'height': 8
            }
        }]
    }
]