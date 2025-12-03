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
            'toStep': "b-11",
            'type': 'arrow',
            'pos': {
                'left': 77,
                'top': 89.5,
                'width': 23
            }
        }]
    }, {
        id: "b-11",
        img: "11.png",
        clickZones: [{
            'toStep': "b-12",
            'type': 'arrow',
            'pos': BOTTOM_RIGHT_ARROW
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
            'toStep': "tout-droit",
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
            'toStep': "droit-plus-haut",
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
            'toStep': "partir-nager-vite",
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
            'toStep': "b-27",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 24,
                'height': 10
            }
        }]
    }
]