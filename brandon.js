const BRANDON_STEPS = [
    {
        id: "re-brandon",
        img: "Re Brandon.png",
        clickZones: [{
            'toStep': null,
            'isRe': true,
            'type': 'arrow',
            'pos': {
                'left': 65.5,
                'top': 86,
                'width': 29,
                'height': 10
            }
        }]
    },
    {
        id: "b-8",
        img: "8.png",
        ambiance: "Attente.mp3",
        clickZones: [{
            'toStep': "b-10",
            'type': 'arrow',
            'pos': {
                'left': 68,
                'top': 87.5,
                'width': 29,
                'height': 10
            }
        }]
    }, {
        id: "b-10",
        img: "10.png",
        ambiance: "Attente.mp3",
        clickZones: [{
            'toStep': "b-12",
            'throwSteps': ["page-suspens"],
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
        sound: "suspens.mp3",
        isThrowStep: true,
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
        id: "b-12",
        img: "12.png",
        sound: "terreur.mp3",
        clickZones: [{
            'toStep': "b-13",
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 89,
                'width': 24,
                'height': 8.5
            }
        }]
    }, {
        id: "b-13",
        img: "13.png",
        clickZones: [{
            'toStep': null,
            'toStepCondition': (currentGame) => currentGame.playerWin ? "SLPPE-victoire" : "SLPPE",
            'path': 'SLPPE',
            'type': 'oval',
            'pos': {
                'left': 32,
                'top': 8.5,
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
        ambiance: "Montagnes_hallucinees.mp3",
        clickZones: [{
            'toStep': "b-18",
            'type': 'arrow',
            'pos': {
                'left': 73.5,
                'top': 89.5,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "b-18",
        img: "18.png",
        ambiance: "Montagnes_hallucinees.mp3",
        clickZones: [{
            'toStep': "couper-gauche",
            'type': 'arrow',
            'pos': {
                'left': 8,
                'top': 18.5,
                'width': 33.5,
                'height': 11,
                'rotate': 180
            }
        }, {
            'toStep': "b-32",
            'throwSteps': ["continuer-plus-haut"],
            'type': 'arrow',
            'pos': {
                'left': 60.5,
                'top': 19.5,
                'width': 38.5,
                'height': 14,
                'rotate': -90
            }
        }]
    }, {
        id: "couper-gauche",
        img: "19.png",
        ambiance: "Montagnes_hallucinees.mp3",
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
        ambiance: "Montagnes_hallucinees.mp3",
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
        ambiance: "Montagnes_hallucinees.mp3",
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
            'throwSteps': ["continuer-plus-haut"],
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
        ambiance: "Montagnes_hallucinees.mp3",
        isSaveStep: true,
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
        ambiance: "Sous_l'eau.mp3",
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
        ambiance: "Sous_l'eau.mp3",
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
        ambiance: "Sous_l'eau.mp3",
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
        ambiance: "Sous_l'eau.mp3",
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
        ambiance: "Sous_l'eau.mp3",
        clickZones: [{
            'toStep': null,
            'toStepCondition': (currentGame) => currentGame.playerWin ? "SLPPE-victoire" : "SLPPE",
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
        ambiance: "Sous_l'eau.mp3",
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
        ambiance: "Montagnes_hallucinees.mp3",
        isThrowStep: true,
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
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "b-49",
            'throwSteps': ["page-suspens"],
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
        ambiance: "Montagnes_hallucinees.mp3",
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
        ambiance: "Montagnes_hallucinees.mp3",
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
        ambiance: "Montagnes_hallucinees.mp3",
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
        ambiance: "Montagnes_hallucinees.mp3",
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
            'toStep': null,
            'toStepCondition': (currentGame) => currentGame.playerWin ? "SLPPE-victoire" : "SLPPE",
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
        ambiance: "Baston.mp3",
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
        ambiance: "Baston.mp3",
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
            'throwSteps': ["page-suspens"],
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
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': null,
            'toStepCondition': (currentGame) => currentGame.playerWin ? "SLPPE-victoire" : "SLPPE",
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
        ambiance: "Baston.mp3",
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
        ambiance: "Montagnes_hallucinees.mp3",
        clickZones: [{
            'toStep': "b-43",
            'throwSteps': ["continuer-plus-haut"],
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
        ambiance: "Montagnes_hallucinees.mp3",
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
        ambiance: "Montagnes_hallucinees.mp3",
        clickZones: [{
            'toStep': null,
            'toStepCondition': (currentGame) => currentGame.playerWin ? "SLPPE-victoire" : "SLPPE",
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
        sound: "epiphanie.mp3",
        clickZones: [{
            'toStep': "b-46",
            'throwSteps': ["page-suspens"],
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
        sound: "fail.mp3",
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
        sound: "usine_de_recyclage.mp3",
        clickZones: [{
            'toStep': "game-over",
            'path': 'game-over',
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
        ambiance: "Montagnes_hallucinees.mp3",
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
        ambiance: "Hopital.mp3",
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
        ambiance: "Hopital.mp3",
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
        ambiance: "Hopital.mp3",
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
        ambiance: "Hopital.mp3",
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
        sound: "epiphanie.mp3",
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
        ambiance: "Baston.mp3",
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
        ambiance: "Hopital.mp3",
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
        ambiance: "Hopital.mp3",
        onInput: true,
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
            'testPwd': {
                'correct': {
                    'toStep': "b-60"
                },
                'incorrect': {
                    'toStep': "b-57"
                }
            },
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
        ambiance: "Hopital.mp3",
        onInput: true,
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
            'testPwd': {
                'correct': {
                    'toStep': "b-60",
                },
                'incorrect': {
                    'toStep': "b-58"
                }
            },
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
        ambiance: "Hopital.mp3",
        clickZones: [{
            'toStep': "aucune-idee",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 88.5,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "aucune-idee",
        img: "59.png",
        ambiance: "Hopital.mp3",
        clickZones: [{
            'toStep': "b-62",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 88.5,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "b-60",
        img: "60.png",
        ambiance: "Hopital.mp3",
        clickZones: [{
            'toStep': "b-61",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 88.5,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "b-61",
        img: "61.png",
        sound: "epiphanie.mp3",
        clickZones: [{
            'toStep': "b-63",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 88.5,
                'width': 24,
                'height': 8.5
            }
        }]
    }, {
        id: "b-62",
        img: "62.png",
        ambiance: "Hopital.mp3",
        clickZones: [{
            'toStep': "TROP-TARD",
            'path': 'troptard',
            'type': 'arrow',
            'pos': {
                'left': 72.5,
                'top': 88.5,
                'width': 24,
                'height': 8.5
            }
        }]
    }, {
        id: "b-63",
        img: "63.png",
        ambiance: "Hopital.mp3",
        clickZones: [{
            'toStep': null,
            'toStepCondition': (currentGame) => currentGame.playerWin ? "SLPPE-victoire" : "SLPPE",
            'path': 'SLPPE',
            'type': 'oval',
            'pos': {
                'left': 7,
                'top': 72.5,
                'width': 40,
                'height': 17.5
            }
        }, {
            'toStep': "b-64",
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 88,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "b-64",
        img: "64.png",
        sound: "Bravo.mp3",
        clickZones: [{
            'toStep': "b-65",
            'type': 'arrow',
            'pos': {
                'left': 74,
                'top': 89.5,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "b-65",
        img: "65.png",
        clickZones: [{
            'toStep': "donner-enfant-allergique",
            'type': 'oval',
            'pos': {
                'left': 4,
                'top': 76,
                'width': 43,
                'height': 16
            }
        }, {
            'toStep': "miam-gauffre",
            'type': 'oval',
            'pos': {
                'left': 59,
                'top': 76,
                'width': 34,
                'aspect-ratio': 1.3 / 1
            }
        }]
    }, {
        id: "donner-enfant-allergique",
        img: "66.png",
        clickZones: [{
            'toStep': "miam-gauffre",
            'type': 'oval',
            'pos': {
                'left': 33,
                'top': 57,
                'width': 48,
                'height': 22
            }
        }]
    }, {
        id: "miam-gauffre",
        img: "67.png",
        clickZones: [{
            'toStep': "b-68",
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 88,
                'width': 24,
                'height': 8.5
            }
        }]
    }, {
        id: "b-68",
        img: "68.png",
        sound: "terreur.mp3",
        clickZones: [{
            'toStep': "b-69",
            'type': 'arrow',
            'pos': {
                'left': 74,
                'top': 89.5,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "b-69",
        img: "69.png",
        clickZones: [{
            'toStep': "b-70",
            'type': 'arrow',
            'pos': {
                'left': 74,
                'top': 89,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "b-70",
        img: "70.png",
        sound: "Bravo.mp3",
        clickZones: [{
            'toStep': "b-71",
            'type': 'arrow',
            'pos': {
                'left': 74,
                'top': 89,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "b-71",
        img: "71.png",
        ambiance: "emotion.mp3",
        clickZones: [{
            'toStep': "zz-72",
            'path': 'Zblugzor',
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 88.5,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "se-battre",
        img: "73.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "b-74",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 85.5,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "b-74",
        img: "74.png",
        ambiance: "Montagnes_hallucinees.mp3",
        clickZones: [{
            'toStep': null,
            'toStepCondition': (currentGame) => currentGame.playerWin ? "SLPPE-victoire" : "SLPPE",
            'path': 'SLPPE',
            'type': 'oval',
            'pos': {
                'left': 14,
                'top': 87.5,
                'width': 16,
                'height': 8
            }
        }, {
            'toStep': "b-75",
            'type': 'arrow',
            'pos': {
                'left': 58,
                'top': 78,
                'width': 40,
                'height': 13,
                'rotate': -40
            }
        }]
    }, {
        id: "b-75",
        img: "75.png",
        ambiance: "Montagnes_hallucinees.mp3",
        clickZones: [{
            'toStep': "b-76",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 88.5,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "b-76",
        img: "76.png",
        ambiance: "Montagnes_hallucinees.mp3",
        clickZones: [{
            'toStep': "b-77",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 88.5,
                'width': 22.5,
                'height': 8
            }
        }]
    }, {
        id: "b-77",
        img: "77.png",
        ambiance: "Montagnes_hallucinees.mp3",
        clickZones: [{
            'toStep': null,
            'toStepCondition': (currentGame) => currentGame.playerWin ? "SLPPE-victoire" : "SLPPE",
            'path': 'SLPPE',
            'type': 'oval',
            'pos': {
                'left': 37,
                'top': 2,
                'width': 44,
                'aspect-ratio': 1.3 / 1
            }
        }, {
            'toStep': "continuer-grimper",
            'type': 'oval',
            'pos': {
                'left': 12,
                'top': 33,
                'width': 33.5,
                'aspect-ratio': 1.2 / 1
            }
        }, {
            'toStep': "game-over",
            'path': 'game-over',
            'throwSteps': ["page-suspens"],
            'type': 'oval',
            'pos': {
                'left': 24,
                'top': 62,
                'width': 60.5,
                'aspect-ratio': 1.6 / 1
            }
        }]
    }, {
        id: "continuer-grimper",
        img: "78.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "b-79",
            'type': 'arrow',
            'pos': {
                'left': 72.5,
                'top': 87.5,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "b-79",
        img: "79.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "attaquer-monstre",
            'type': 'oval',
            'pos': {
                'left': 8.5,
                'top': 77,
                'width': 34,
                'aspect-ratio': 1.5 / 1
            }
        }, {
            'toStep': "chanter-berceuse",
            'type': 'oval',
            'pos': {
                'left': 57,
                'top': 75.5,
                'width': 34,
                'aspect-ratio': 1.3 / 1
            }
        }, {
            'toStep': "demander-n-catapultes",
            'type': 'oval',
            'pos': {
                'left': 72.5,
                'top': 57,
                'width': 24,
                'aspect-ratio': 1.2 / 1
            }
        }]
    }, {
        id: "attaquer-monstre",
        img: "81.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "b-82",
            'type': 'arrow',
            'pos': {
                'left': 72,
                'top': 88,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "b-82",
        img: "82.png",
        sound: "Bravo.mp3",
        clickZones: [{
            'toStep': "b-83",
            'type': 'arrow',
            'pos': {
                'left': 74,
                'top': 89,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "b-83",
        img: "83.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "b-84",
            'type': 'arrow',
            'pos': {
                'left': 74,
                'top': 72.5,
                'width': 23,
                'height': 8
            }
        }]
    }, {
        id: "b-84",
        img: "84.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "attaquer-boule-neige",
            'type': 'oval',
            'pos': {
                'left': 27,
                'top': 10,
                'width': 58,
                'aspect-ratio': 1.6 / 1
            }
        }, {
            'toStep': "foncer-frichtefracht",
            'type': 'oval',
            'pos': {
                'left': 20,
                'top': 56,
                'width': 60,
                'aspect-ratio': 1.35 / 1
            }
        }]
    }, {
        id: "foncer-frichtefracht",
        img: "87.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "b-88",
            'type': 'arrow',
            'pos': {
                'left': 69,
                'top': 87.5,
                'width': 23,
                'height': 8
            }
        }]
    }, {
        id: "attaquer-boule-neige",
        img: "85.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "b-86",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 85.5,
                'width': 23,
                'height': 8
            }
        }]
    }, {
        id: "b-86",
        img: "86.png",
        sound: "fail.mp3",
        clickZones: [{
            'toStep': "b-49",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 89.5,
                'width': 24,
                'height': 8
            }
        }]
    }, {
        id: "chanter-berceuse",
        img: "80.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "b-49",
            'throwSteps': ["page-suspens"],
            'type': 'arrow',
            'pos': {
                'left': 72,
                'top': 88.5,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "b-88",
        img: "88.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "suivre-zblugzor-tyro",
            'type': 'oval',
            'pos': {
                'left': 27,
                'top': 10,
                'width': 58,
                'aspect-ratio': 1.6 / 1
            }
        }, {
            'toStep': null,
            'toStepCondition': (currentGame) => currentGame.playerWin ? "SLPPE-victoire" : "SLPPE",
            'path': 'SLPPE',
            'type': 'oval',
            'pos': {
                'left': 66,
                'top': 38,
                'width': 29.5,
                'aspect-ratio': 1.2 / 1
            }
        }, {
            'toStep': "sauter-zblugzor-films",
            'type': 'oval',
            'pos': {
                'left': 21,
                'top': 56,
                'width': 57,
                'aspect-ratio': 1.2 / 1
            }
        }]
    }, {
        id: "suivre-zblugzor-tyro",
        img: "197.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "zz-199",
            'path': 'Zblugzor',
            'type': 'arrow',
            'pos': {
                'left': 72.5,
                'top': 89,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "sauter-zblugzor-films",
        img: "89.png",
        sound: "fail.mp3",
        clickZones: [{
            'toStep': "game-over",
            'path': 'game-over',
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 87.5,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "demander-n-catapultes",
        img: "195.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "attaquer-monstre",
            'type': 'oval',
            'pos': {
                'left': 8.5,
                'top': 77,
                'width': 34,
                'height': 12.5
            }
        }, {
            'toStep': "chanter-berceuse",
            'type': 'oval',
            'pos': {
                'left': 57,
                'top': 75.5,
                'width': 34.5,
                'height': 15
            }
        }]
    }
]