const MARLENE_STEPS = [    {
        id: "m-9",
        img: "9.png",
        clickZones: [{
            'toStep': "m-14",
            'type': 'arrow',
            'pos': BOTTOM_RIGHT_ARROW
        }]
    }, {
        id: "m-14",
        img: "14.png",
        clickZones: [{
            'toStep': "m-11",
            'type': 'arrow',
            'pos': {
                'left': 77,
                'top': 89.5,
                'width': 23
            }
        }]
    }, {
        id: "m-11",
        img: "11.png",
        clickZones: [{
            'toStep': "m-15",
            'type': 'arrow',
            'pos': BOTTOM_RIGHT_ARROW
        }]
    }, {
        id: "m-15",
        img: "15.png",
        clickZones: [{
            'toStep': "m-16",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 90,
                'width': 25,
                'height': 8,
            }
        }]
    }, {
        id: "m-16",
        img: "16.png",
        clickZones: [{
            'toStep': "SLPPE",
            'path': "SLPPE",
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
    }
]