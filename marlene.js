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
                'height': 12,
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
    }
]