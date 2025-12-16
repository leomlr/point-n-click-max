const MARLENE_STEPS = [
        {
        id: "re-marlene",
        img: "Re Marlène.png",
        clickZones: [{
            'toStep': null,
            'music': true,
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
        isThrowStep: true,
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
        id: "page-suspens-bis",
        isThrowStep: true,
        img: "11bis.png",
        clickZones: [{
            'toStep': null,
            'type': 'square',
            'pos': {
                'left': 65.5,
                'top': 82.5,
                'width': 18.5,
                'height': 10.5,
                'rotate': 45
            }
        }, {
            'toStep': "game-over",
            'path': 'game-over',
            'type': 'oval',
            'pos': {
                'left': 12.5,
                'top': 77,
                'width': 33,
                'height': 14.5
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
        ambiance: "Bougie.mp3",
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
        ambiance: "Bougie.mp3",
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
        ambiance: "Bougie.mp3",
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
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-102",
            'type': 'arrow',
            'pos': {
                'left': 57,
                'top': 86,
                'width': 33,
                'height': 12
            }
        }, {
            'toStep': "m-94",
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
        id: "m-102",
        img: "102.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-93",
            'type': 'arrow',
            'pos': {
                'left': 4.5,
                'top': 85.5,
                'width': 24,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-228",
            'type': 'arrow',
            'pos': {
                'left': 69.5,
                'top': 86.5,
                'width': 27.5,
                'height': 8.5,
                'rotate': -90
            }
        }]
    }, {
        id: "m-103",
        img: "103.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-103",
            'throwSteps': ["m-104"],
            'type': 'oval',
            'pos': {
                'left': 8.5,
                'top': 68,
                'width': 22,
                'height': 9
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
        }, {
            'toStep': "m-237",
            'type': 'arrow',
            'pos': {
                'left': 4.5,
                'top': 86.5,
                'width': 24,
                'height': 8.5,
                'rotate': 90
            }
        }]
    }, {
        id: "m-104",
        img: "104.png",
        ambiance: "Bougie.mp3",
        isThrowStep: true,
        clickZones: [{
            'toStep': null,
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
        ambiance: "Bougie.mp3",
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
        ambiance: "Bougie.mp3",
        isSaveStep: true,
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
        ambiance: "Bougie.mp3",
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
        ambiance: "Bougie.mp3",
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
        ambiance: "Bougie.mp3",
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
        ambiance: "Bougie.mp3",
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
        ambiance: "Bougie.mp3",
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
        ambiance: "Bougie.mp3",
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
        ambiance: "Bougie.mp3",
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
        ambiance: "Baston.mp3",
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
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "affront-QQR",
            'type': 'oval',
            'pos': {
                'left': 11,
                'top': 3,
                'width': 58,
                'aspect-ratio': 1.6 / 1
            }
        }, {
            'toStep': "affront-QQR",
            'type': 'oval',
            'pos': {
                'left': 55,
                'top': 34,
                'width': 42,
                'aspect-ratio': 1.2 / 1
            }
        }, {
            'toStep': "affront-QQR",
            'type': 'oval',
            'pos': {
                'left': 11,
                'top': 38,
                'width': 29.5,
                'aspect-ratio': 1.5 / 1
            }
        }, {
            'toStep': "affront-QQR",
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
            'toStep': "affront-QQR",
            'type': 'arrow',
            'pos': {
                'left': 72,
                'top': 89,
                'width': 23,
                'height': 8
            }
        }]
    }, {
        id: "affront-QQR",
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
        ambiance: "Bougie.mp3",
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
        video: "QQR course poursuite.mp4",
        playbackRate: 4,
        atEndStep: 'm-121'
    }, {
        id: "m-121",
        img: "121.png",
        ambiance: "Bougie.mp3",
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
        ambiance: "Bougie.mp3",
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
        ambiance: "Bougie.mp3",
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
    }, {
        id: "m-94",
        img: "94.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-93",
            'type': 'arrow',
            'pos': {
                'left': 5.5,
                'top': 84,
                'width': 24,
                'height': 10,
                'rotate': 90
            }
        }, {
            'toStep': "m-95",
            'type': 'arrow',
            'pos': {
                'left': 61.5,
                'top': 83,
                'width': 28,
                'height': 11,
                'rotate': -90
            }
        }]
    }, {
        id: "m-95",
        img: "95.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-94",
            'type': 'arrow',
            'pos': {
                'left': 2.5,
                'top': 85,
                'width': 24,
                'height': 9.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-96",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 54.5,
                'width': 30,
                'height': 11,
                'rotate': -90
            }
        }]
    }, {
        id: "m-96",
        img: "96.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-95",
            'type': 'arrow',
            'pos': {
                'left': 2,
                'top': 86,
                'width': 23.5,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-97",
            'type': 'arrow',
            'pos': {
                'left': 74.5,
                'top': 53.5,
                'width': 28,
                'height': 12.5,
                'rotate': -90
            }
        }]
    }, {
        id: "m-97",
        img: "97.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-96",
            'type': 'arrow',
            'pos': {
                'left': 3,
                'top': 86,
                'width': 23.5,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-98",
            'type': 'arrow',
            'pos': {
                'left': 74.5,
                'top': 85,
                'width': 29,
                'height': 12.5,
                'rotate': -90
            }
        }]
    }, {
        id: "m-98",
        img: "98.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-99",
            'type': 'arrow',
            'pos': {
                'left': 10,
                'top': 82,
                'width': 28,
                'height': 10,
                'rotate': 180
            }
        }, {
            'toStep': "m-97",
            'type': 'arrow',
            'pos': {
                'left': 42,
                'top': 84.5,
                'width': 26,
                'height': 9.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-101",
            'type': 'arrow',
            'pos': {
                'left': 66.5,
                'top': 81.5,
                'width': 30,
                'height': 11,
                'rotate': -90
            }
        }]
    }, {
        id: "m-99",
        img: "99.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-98",
            'type': 'arrow',
            'pos': {
                'left': -1,
                'top': 86.5,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-100",
            'type': 'arrow',
            'pos': {
                'left': 74.5,
                'top': 53.5,
                'width': 28,
                'height': 12.5,
                'rotate': -90
            }
        }]
    }, {
        id: "m-100",
        img: "100.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-99",
            'type': 'arrow',
            'pos': {
                'left': -1,
                'top': 87,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }]
    }, {
        id: "m-101",
        img: "101.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-98",
            'type': 'arrow',
            'pos': {
                'left': 0.5,
                'top': 86,
                'width': 24,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-124",
            'type': 'arrow',
            'pos': {
                'left': 63,
                'top': 83.5,
                'width': 29.5,
                'height': 11,
                'rotate': -90
            }
        }]
    }, {
        id: "m-124",
        img: "124.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-125",
            'type': 'arrow',
            'pos': {
                'left': 5,
                'top': 85.5,
                'width': 31.5,
                'height': 11,
                'rotate': 180
            }
        }, {
            'toStep': "m-101",
            'type': 'arrow',
            'pos': {
                'left': 36,
                'top': 86,
                'width': 26,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-238",
            'type': 'square',
            'pos': {
                'left': 65,
                'top': 83,
                'width': 32,
                'height': 7
            }
        }]
    }, {
        id: "m-125",
        img: "125.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-126",
            'type': 'arrow',
            'pos': {
                'left': 0.5,
                'top': 84,
                'width': 33.5,
                'height': 12
            }
        }, {
            'toStep': "m-124",
            'type': 'arrow',
            'pos': {
                'left': 36.5,
                'top': 86.5,
                'width': 23.5,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-240",
            'type': 'arrow',
            'pos': {
                'left': 60.5,
                'top': 83,
                'width': 40,
                'height': 15,
                'rotate': 180
            }
        }]
    }, {
        id: "m-126",
        img: "126.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-125",
            'type': 'arrow',
            'pos': {
                'left': 1.5,
                'top': 86.5,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-127",
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 88,
                'width': 24,
                'height': 9
            }
        }]
    }, {
        id: "m-127",
        img: "127.png",
        ambiance: "dnb_club_marlene2.mp3",
        clickZones: [{
            'toStep': "m-126",
            'type': 'arrow',
            'pos': {
                'left': 0,
                'top': 86,
                'width': 26,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-128",
            'type': 'oval',
            'pos': {
                'left': 34.5,
                'top': 84.5,
                'width': 26,
                'height': 11
            }
        }]
    }, {
        id: "m-128",
        img: "128.png",
        ambiance: "dnb_club_marlene2.mp3",
        clickZones: [{
            'toStep': "m-129",
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 86,
                'width': 29,
                'height': 10.5,
                'rotate': -90
            }
        }]
    }, {
        id: "m-129",
        img: "129.png",
        ambiance: "dnb_club_marlene2.mp3",
        clickZones: [{
            'toStep': "m-130",
            'throwSteps': ["page-suspens", "page-suspens-bis"],
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 86,
                'width': 29,
                'height': 10.5,
                'rotate': -90
            }
        }]
    }, {
        id: "m-130",
        img: "130.png",
        ambiance: "dnb_club_marlene2.mp3",
        clickZones: [{
            'toStep': "aller-lidl",
            'type': 'oval',
            'pos': {
                'left': 7.5,
                'top': 82,
                'width': 28,
                'height': 11
            }
        }, {
            'toStep': "m-134",
            'type': 'oval',
            'pos': {
                'left': 63,
                'top': 76,
                'width': 32,
                'height': 14.5
            }
        }]
    }, {
        id: "aller-lidl",
        img: "131.png",
        clickZones: [{
            'toStep': "m-132",
            'type': 'arrow',
            'pos': {
                'left': 65,
                'top': 82,
                'width': 39,
                'height': 15,
                'rotate': -90
            }
        }]
    }, {
        id: "m-132",
        img: "132.png",
        clickZones: [{
            'toStep': "m-132-5",
            'type': 'oval',
            'pos': {
                'left': 9,
                'top': 78.5,
                'width': 35,
                'height': 13
            }
        }, {
            'toStep': "m-132-5",
            'type': 'oval',
            'pos': {
                'left': 54,
                'top': 76,
                'width': 34,
                'height': 14.5
            }
        }]
    }, {
        id: "m-132-5",
        img: "132,5.png",
        clickZones: [{
            'toStep': "m-133",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 88.5,
                'width': 24,
                'height': 9
            }
        }]
    }, {
        id: "m-133",
        img: "133.png",
        ambiance: "dnb_club_marlene2.mp3",
        clickZones: [{
            'toStep': "m-134",
            'type': 'oval',
            'pos': {
                'left': 63.5,
                'top': 76,
                'width': 31,
                'height': 15
            }
        }]
    }, {
        id: "m-134",
        img: "134.png",
        ambiance: "dnb_club_marlene3.mp3",
        clickZones: [{
            'toStep': "aller-bar",
            'type': 'oval',
            'pos': {
                'left': 9,
                'top': 80,
                'width': 34,
                'height': 12
            }
        }, {
            'toStep': "rester-danser",
            'type': 'oval',
            'pos': {
                'left': 70,
                'top': 85,
                'width': 17,
                'height': 7.5
            }
        }]
    }, {
        id: "rester-danser",
        img: "135.png",
        ambiance: "dnb_club_marlene3.mp3",
        clickZones: [{
            'toStep': "marlene-danse",
            'type': 'oval',
            'pos': {
                'left': 32.5,
                'top': 78.5,
                'width': 35,
                'height': 13
            }
        }]
    }, {
        id: "aller-bar",
        img: "138.png",
        ambiance: "ambiance_bar.mp3",
        clickZones: [{
            'toStep': "m-139",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 88.5,
                'width': 23,
                'height': 9
            }
        }]
    }, {
        id: "marlene-danse",
        img: "136.png",
        ambiance: "dnb_club_marlene3.mp3",
        gif: [{
            src: "danse marlène.gif",
            class: "danse-marlene"
        }],
        clickZones: [{
            'toStep': "m-137",
            'type': 'arrow',
            'pos': {
                'left': 70.5,
                'top': 88,
                'width': 25,
                'height': 9
            }
        }]
    }, {
        id: "m-137",
        img: "137.png",
        ambiance: "dnb_club_marlene3.mp3",
        gif: [{
            src: "danse marlène.gif",
            class: "danse-marlene-2"
        }],
        clickZones: [{
            'toStep': "m-211",
            'type': 'oval',
            'pos': {
                'left': 60.5,
                'top': 9.5,
                'width': 26,
                'height': 12
            }
        }]
    }, {
        id: "m-139",
        img: "139.png",
        clickZones: [{
            'toStep': "m-140",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 88.5,
                'width': 24,
                'height': 9
            }
        }]
    }, {
        id: "m-140",
        img: "140.png",
        ambiance: "ambiance_bar.mp3",
        clickZones: [{
            'toStep': "oubliettes",
            'path': 'game-over',
            'type': 'oval',
            'pos': {
                'left': 4,
                'top': 82,
                'width': 32,
                'height': 13
            }
        }, {
            'toStep': "defier-flechettes",
            'type': 'oval',
            'pos': {
                'left': 63,
                'top': 82,
                'width': 29,
                'height': 12.5
            }
        }]
    }, {
        id: "defier-flechettes",
        img: "141.png",
        ambiance: "ambiance_bar.mp3",
        clickZones: [{
            'toStep': "m-142",
            'type': 'arrow',
            'pos': {
                'left': 67,
                'top': 87.5,
                'width': 29.5,
                'height': 11
            }
        }]
    }, {
        id: "m-142",
        img: "142.png",
        ambiance: "ambiance_bar.mp3",
        clickZones: [{
            'toStep': null,
            'randomSteps': ["m-143", "m-144", "m-145"],
            'type': 'oval',
            'pos': {
                'left': 60.5,
                'top': 77,
                'width': 34.5,
                'height': 16
            }
        }]
    }, {
        id: "m-143",
        img: "143.png",
        ambiance: "ambiance_bar.mp3",
        clickZones: [{
            'toStep': "m-148",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 87.5,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "m-148",
        img: "148.png",
        ambiance: "ambiance_bar.mp3",
        clickZones: [{
            'toStep': "m-149",
            'type': 'arrow',
            'pos': {
                'left': 72,
                'top': 88,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "m-149",
        img: "149.png",
        ambiance: "ambiance_bar.mp3",
        clickZones: [{
            'toStep': "m-147",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-144",
        img: "144.png",
        ambiance: "ambiance_bar.mp3",
        clickZones: [{
            'toStep': "m-150",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 87.5,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "m-150",
        img: "150.png",
        ambiance: "ambiance_bar.mp3",
        clickZones: [{
            'toStep': "m-151",
            'type': 'arrow',
            'pos': {
                'left': 72,
                'top': 87.5,
                'width': 23,
                'height': 9.5
            }
        }]
    }, {
        id: "m-151",
        img: "151.png",
        ambiance: "ambiance_bar.mp3",
        clickZones: [{
            'toStep': "m-147",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 24,
                'height': 8.5
            }
        }]
    }, {
        id: "m-145",
        img: "145.png",
        ambiance: "ambiance_bar.mp3",
        clickZones: [{
            'toStep': "m-146",
            'type': 'arrow',
            'pos': {
                'left': 68,
                'top': 86,
                'width': 24,
                'height': 8.5
            }
        }]
    }, {
        id: "m-146",
        img: "146.png",
        ambiance: "ambiance_bar.mp3",
        clickZones: [{
            'toStep': "m-147",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 24,
                'height': 8.5
            }
        }]
    }, {
        id: "m-147",
        img: "147.png",
        ambiance: "ambiance_bar.mp3",
        clickZones: [{
            'toStep': "m-152",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 88.5,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-152",
        img: "152.png",
        ambiance: "dechirax.mp3",
        clickZones: [{
            'toStep': "m-153",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 24,
                'height': 8.5
            }
        }]
    }, {
        id: "m-153",
        img: "153.png",
        ambiance: "dechirax.mp3",
        clickZones: [{
            'toStep': "m-154",
            'type': 'arrow',
            'pos': {
                'left': 75,
                'top': 87,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "m-154",
        img: "154.png",
        ambiance: "dechirax.mp3",
        clickZones: [{
            'toStep': "m-155",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 88,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "m-155",
        img: "155.png",
        ambiance: "dechirax.mp3",
        clickZones: [{
            'toStep': "m-156",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 88,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "m-156",
        img: "156.png",
        ambiance: "dechirax.mp3",
        clickZones: [{
            'toStep': "m-157",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 88,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "m-157",
        img: "157.png",
        clickZones: [{
            'toStep': "m-158",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "m-158",
        img: "158.png",
        clickZones: [{
            'toStep': "terreur-QQR",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "m-159",
        img: "159.png",
        clickZones: [{
            'toStep': "terreur-QQR",
            'type': 'arrow',
            'pos': {
                'left': 34,
                'top': 89.5,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "rentrer-chatiere",
        img: "160.png",
        clickZones: [{
            'toStep': "affront-QQR",
            'type': 'oval',
            'pos': {
                'left': 9,
                'top': 78,
                'width': 28,
                'height': 12.5
            }
        }, {
            'toStep': "sortir-grotte",
            'type': 'oval',
            'pos': {
                'left': 61,
                'top': 82,
                'width': 28.5,
                'height': 9
            }
        }]
    }, {
        id: "sortir-grotte",
        img: "161.png",
        clickZones: [{
            'toStep': "terreur-QQR",
            'throwSteps': ["page-suspens"],
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "terreur-QQR",
        img: "162.png",
        ambiance: "Baston.mp3",
        gif: [{
            src: "QQR_leo.gif",
            class: "QQR-0"
        }],
        clickZones: [{
            'toStep': "m-163",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "m-163",
        img: "163.png",
        clickZones: [{
            'toStep': "m-164",
            'type': 'oval',
            'pos': {
                'left': 76.5,
                'top': 15,
                'width': 15,
                'height': 7
            }
        }]
    }, {
        id: "m-164",
        img: "164.png",
        clickZones: [{
            'toStep': "bombe-atomique",
            'type': 'square',
            'pos': {
                'left': 9,
                'top': 23.5,
                'width': 27,
                'height': 19
            }
        }, {
            'toStep': "construire-catapulte",
            'type': 'square',
            'pos': {
                'left': 63,
                'top': 50.5,
                'width': 27,
                'height': 19
            }
        }, {
            'toStep': "m-164",
            'throwSteps': ["m-104"],
            'type': 'square',
            'pos': {
                'left': 8,
                'top': 75.5,
                'width': 27,
                'height': 19
            }
        }]
    }, {
        id: "construire-catapulte",
        img: "165.png",
        clickZones: [{
            'toStep': "m-171",
            'type': 'arrow',
            'pos': {
                'left': 71.5,
                'top': 88.5,
                'width': 23.5,
                'height': 8
            }
        }]
    }, {
        id: "bombe-atomique",
        img: "166.png",
        clickZones: [{
            'toStep': "m-167",
            'type': 'arrow',
            'pos': {
                'left': 71.5,
                'top': 88.5,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-167",
        img: "167.png",
        clickZones: [{
            'toStep': "m-168",
            'type': 'square',
            'pos': {
                'left': 20.5,
                'top': 59,
                'width': 17,
                'height': 30
            }
        }, {
            'toStep': "construire-catapulte",
            'type': 'square',
            'pos': {
                'left': 44.5,
                'top': 68.5,
                'width': 42,
                'height': 18
            }
        }]
    }, {
        id: "m-168",
        img: "168.png",
        clickZones: [{
            'toStep': "oui-appuyer",
            'throwSteps': ["page-suspens"],
            'type': 'oval',
            'pos': {
                'left': 9,
                'top': 66.5,
                'width': 31,
                'height': 17
            }
        }, {
            'toStep': "construire-catapulte",
            'type': 'oval',
            'pos': {
                'left': 59,
                'top': 67,
                'width': 31,
                'height': 17
            }
        }]
    }, {
        id: "oui-appuyer",
        img: "169.png",
        clickZones: [{
            'toStep': "m-170",
            'type': 'square',
            'pos': {
                'left': 81,
                'top': 89.5,
                'width': 14,
                'height': 8,
                'rotate': -45
            }
        }]
    }, {
        id: "m-170",
        img: "170.png",
        clickZones: [{
            'toStep': "game-over",
            'path': 'game-over',
            'type': 'arrow',
            'pos': {
                'left': 72.5,
                'top': 88,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-171",
        img: "171.png",
        ambiance: "Baston.mp3",
        gif: [{
            src: "QQR_leo.gif",
            class: "QQR-1"
        }],
        clickZones: [{
            'toStep': "tirer-avec-catapulte",
            'throwSteps': ["page-suspens"],
            'type': 'oval',
            'pos': {
                'left': 13,
                'top': 85,
                'width': 24,
                'height': 9
            }
        }, {
            'toStep': "affront-QQR",
            'type': 'oval',
            'pos': {
                'left': 62,
                'top': 81,
                'width': 28,
                'height': 12.5

            }
        }]
    }, {
        id: "tirer-avec-catapulte",
        img: "172.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "faire-rien",
            'type': 'oval',
            'pos': {
                'left': 8.5,
                'top': 25.5,
                'width': 41,
                'height': 22
            }
        }, {
            'toStep': "oubliettes",
            'path': 'game-over',
            'type': 'oval',
            'pos': {
                'left': 50.5,
                'top': 55,
                'width': 39,
                'height': 22
            }
        }]
    }, {
        id: "faire-rien",
        img: "173.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "m-174",
            'type': 'arrow',
            'pos': {
                'left': 72.5,
                'top': 88,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-174",
        img: "174.png",
        ambiance: "Baston.mp3",
        gif: [{
            src: "QQR_leo.gif",
            class: "QQR-2"
        }],
        clickZones: [{
            'toStep': "m-175",
            'type': 'arrow',
            'pos': {
                'left': 72.5,
                'top': 88,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-175",
        img: "175.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "m-176",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 86.5,
                'width': 24,
                'height': 8.5
            }
        }]
    }, {
        id: "m-176",
        img: "176.png",
        ambiance: "emotion.mp3",
        clickZones: [{
            'toStep': "m-177",
            'type': 'arrow',
            'pos': {
                'left': 74.5,
                'top': 90,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "m-177",
        img: "177.png",
        ambiance: "emotion.mp3",
        clickZones: [{
            'toStep': "m-chargement",
            'throwSteps': ["page-suspens", "page-suspens-bis"],
            'type': 'arrow',
            'pos': {
                'left': 74.5,
                'top': 90,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "m-chargement",
        img: "178.png",
        ambiance: "emotion.mp3",
        video: "chargement.webm",
        playbackRate: 0.3,
        atEndStep: "m-179",
        clickZones: []
    }, {
        id: "m-179",
        img: "179.png",
        ambiance: "emotion.mp3",
        clickZones: [{
            'toStep': "m-180",
            'type': 'arrow',
            'pos': {
                'left': 74.5,
                'top': 90,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "m-180",
        img: "180.png",
        ambiance: "emotion.mp3",
        clickZones: [{
            'toStep': "m-181",
            'type': 'oval',
            'pos': {
                'left': 77,
                'top': 86,
                'width': 18,
                'height': 8.5
            }
        }]
    }, {
        id: "m-181",
        img: "181.png",
        ambiance: "emotion.mp3",
        clickZones: [{
            'toStep': "m-182",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 88.5,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-182",
        img: "182.png",
        ambiance: "emotion.mp3",
        clickZones: [{
            'toStep': "m-183",
            'type': 'arrow',
            'pos': {
                'left': 71.5,
                'top': 88.5,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-183",
        img: "183.png",
        clickZones: [{
            'toStep': "m-184",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 88.5,
                'width': 24,
                'height': 8.5
            }
        }]
    }, {
        id: "m-184",
        img: "184.png",
        clickZones: [{
            'toStep': "m-185",
            'type': 'oval',
            'pos': {
                'left': 15,
                'top': 75,
                'width': 69,
                'height': 18
            }
        }]
    }, {
        id: "m-185",
        img: "185.png",
        clickZones: [{
            'toStep': "SLPPE",
            'path': 'SLPPE',
            'type': 'oval',
            'pos': {
                'left': 9.5,
                'top': 74.5,
                'width': 35,
                'height': 15
            }
        }, {
            'toStep': "reflechir",
            'type': 'oval',
            'pos': {
                'left': 58,
                'top': 77.5,
                'width': 35,
                'height': 12.5
            }
        }]
    }, {
        id: "reflechir",
        img: "186.png",
        clickZones: [{
            'toStep': "m-188",
            'throwSteps': ["m-187"],
            'type': 'oval',
            'pos': {
                'left': 6,
                'top': 74,
                'width': 35,
                'height': 15
            }
        }, {
            'toStep': "partir-multi-catapulte",
            'type': 'oval',
            'pos': {
                'left': 54,
                'top': 75.5,
                'width': 35,
                'height': 12.5
            }
        }]
    }, {
        id: "m-187",
        img: "187.png",
        isThrowStep: true,
        clickZones: [{
            'toStep': null,
            'type': 'arrow',
            'pos': {
                'left': 74,
                'top': 89,
                'width': 23,
                'height': 8.5
            }
        }]
    }, {
        id: "m-188",
        img: "188.png",
        clickZones: [{
            'toStep': "game-over",
            'path': 'game-over',
            'type': 'arrow',
            'pos': {
                'left': 74,
                'top': 89.5,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "partir-multi-catapulte",
        img: "189.png",
        clickZones: [{
            'toStep': "fabrique-de-catapultes",
            'type': 'arrow',
            'pos': {
                'left': 68,
                'top': 88.5,
                'width': 28.5,
                'height': 10
            }
        }]
    }, {
        id: "fabrique-de-catapultes",
        img: "190.png",
        ambiance: "Attente.mp3",
        clickZones: [{
            'toStep': null,
            'type': 'oval',
            'toStepCondition': (currentGame) => currentGame.catapultes === 54 ? "m-196" : "m-191",
            'throwSteps': {
                "m-196": ["m-192"],
                "m-191": null
            },
            'pos': {
                'left': 56,
                'top': 73.5,
                'width': 34.5,
                'height': 14
            }
        }, {
            'toStep': null,
            'type': 'oval',
            'manageCatapultes': (i) => i += 1,
            'pos': {
                'left': 10,
                'top': 66,
                'width': 26,
                'height': 8.5
            }
        }, {
            'toStep': null,
            'type': 'oval',
            'manageCatapultes': (i) => i -= 1,
            'pos': {
                'left': 10,
                'top': 83.5,
                'width': 26,
                'height': 8.5
            }
        }]
    }, {
        id: "m-191",
        img: "191.png",
        clickZones: [{
            'toStep': "fabrique-de-catapultes-2",
            'type': 'square',
            'pos': {
                'left': 4,
                'top': 86.5,
                'width': 36.5,
                'height': 9
            }
        }, {
            'toStep': "m-188",
            'throwSteps': ["m-187"],
            'type': 'square',
            'pos': {
                'left': 46,
                'top': 84.5,
                'width': 49.5,
                'height': 12
            }
        }]
    }, {
        id: "fabrique-de-catapultes-2",
        img: "193.png",
        ambiance: "Attente.mp3",
        clickZones: [{
            'toStep': null,
            'type': 'oval',
            'toStepCondition': (currentGame) => currentGame.catapultes === 54 ? "m-196" : "m-194",
            'throwSteps': {
                "m-196": ["m-192"],
                "m-194": ["m-192", "m-187"]
            },
            'pos': {
                'left': 58.5,
                'top': 73,
                'width': 34,
                'height': 15
            }
        }, {
            'toStep': null,
            'type': 'oval',
            'manageCatapultes': (i) => i += 1,
            'pos': {
                'left': 11,
                'top': 65,
                'width': 26,
                'height': 8.5
            }
        }, {
            'toStep': null,
            'type': 'oval',
            'manageCatapultes': (i) => i -= 1,
            'pos': {
                'left': 11,
                'top': 82.5,
                'width': 27,
                'height': 8.5
            }
        }]
    }, {
        id: "m-192",
        img: "192.png",
        isThrowStep: true,
        clickZones: [{
            'toStep': null,
            'type': 'square',
            'pos': {
                'left': 47,
                'top': 84,
                'width': 49,
                'height': 12
            }
        }]
    }, {
        id: "m-194",
        img: "194.png",
        clickZones: [{
            'toStep': "m-188",
            'type': 'arrow',
            'pos': {
                'left': 72,
                'top': 88.5,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-196",
        img: "196.png",
        clickZones: [{
            'toStep': "m-198",
            'type': 'arrow',
            'pos': {
                'left': 72,
                'top': 89,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-198",
        img: "198.png",
        ambiance: "Baston.mp3",
        clickZones: [{
            'toStep': "zz-199",
            'path': 'Zblugzor',
            'type': 'arrow',
            'pos': {
                'left': 73.5,
                'top': 19,
                'width': 24,
                'height': 8.5
            }
        }]
    }, {
        id: "m-211",
        img: "211.png",
        ambiance: "dnb_club_marlene3.mp3",
        clickZones: [{
            'toStep': "m-212",
            'type': 'arrow',
            'pos': {
                'left': 72,
                'top': 22,
                'width': 24.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-212",
        img: "212.png",
        ambiance: "dnb_club_marlene3.mp3",
        gif: [{
            src: "danse marlène.gif",
            class: "danse-marlene-2"
        }],
        clickZones: [{
            'toStep': "m-213",
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 12,
                'width': 24.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-213",
        img: "213.png",
        ambiance: "dnb_club_marlene3.mp3",
        gif: [{
            src: "danse marlène.gif",
            class: "danse-marlene-2"
        }, {
            src: "danse cheval.gif",
            class: "danse-cheval"
        }],
        clickZones: [{
            'toStep': "m-214",
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 2.5,
                'width': 24.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-214",
        img: "214.png",
        ambiance: "dnb_club_marlene3.mp3",
        gif: [{
            src: "danse marlène.gif",
            class: "danse-marlene-2"
        }],
        clickZones: [{
            'toStep': "m-215",
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 2.5,
                'width': 24.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-215",
        img: "215.png",
        ambiance: "dnb_club_marlene3.mp3",
        gif: [{
            src: "danse marlène.gif",
            class: "danse-marlene-2"
        }],
        clickZones: [{
            'toStep': "m-216",
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 2.5,
                'width': 24.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-216",
        img: "216.png",
        ambiance: "dnb_club_marlene3.mp3",
        gif: [{
            src: "danse marlène.gif",
            class: "danse-marlene-2"
        }],
        clickZones: [{
            'toStep': "aller-bar",
            'type': 'oval',
            'pos': {
                'left': 59,
                'top': 19.5,
                'width': 30.5,
                'height': 11.5
            }
        }, {
            'toStep': "m-217",
            'type': 'oval',
            'pos': {
                'left': 11,
                'top': 17.5,
                'width': 29.5,
                'height': 13.5
            }
        }]
    }, {
        id: "m-217",
        img: "217.png",
        ambiance: "dnb_club_marlene3.mp3",
        clickZones: [{
            'toStep': "m-218",
            'type': 'oval',
            'pos': {
                'left': 17.5,
                'top': 14.5,
                'width': 25.5,
                'height': 10.5
            }
        }, {
            'toStep': "m-220",
            'type': 'oval',
            'pos': {
                'left': 60,
                'top': 15.5,
                'width': 25.5,
                'height': 10.5
            }
        }]
    }, {
        id: "m-218",
        img: "218.png",
        ambiance: "dnb_club_marlene3.mp3",
        clickZones: [{
            'toStep': "m-219",
            'type': 'arrow',
            'pos': {
                'left': 71.5,
                'top': 11,
                'width': 24.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-219",
        img: "219.png",
        ambiance: "dnb_club_marlene3.mp3",
        gif: [{
            src: "danse marlène.gif",
            class: "danse-marlene-2"
        }],
        clickZones: [{
            'toStep': "m-220",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 12,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-220",
        img: "220.png",
        ambiance: "dnb_club_marlene3.mp3",
        clickZones: [{
            'toStep': "m-221",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 12,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-221",
        img: "221.png",
        ambiance: "dnb_club_marlene3.mp3",
        clickZones: [{
            'toStep': "m-222",
            'type': 'arrow',
            'pos': {
                'left': 70,
                'top': 7.5,
                'width': 24,
                'height': 8.5
            }
        }]
    }, {
        id: "m-222",
        img: "222.png",
        ambiance: "dnb_club_marlene3.mp3",
        clickZones: [{
            'toStep': "m-223",
            'type': 'arrow',
            'pos': {
                'left': 71,
                'top': 10,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-223",
        img: "223.png",
        ambiance: "dnb_club_marlene3.mp3",
        gif: [{
            src: "danse marlène.gif",
            class: "danse-marlene-2"
        }],
        clickZones: [{
            'toStep': "m-224",
            'type': 'arrow',
            'pos': {
                'left': 72,
                'top': 5.5,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-224",
        img: "224.png",
        ambiance: "dnb_club_marlene3.mp3",
        gif: [{
            src: "danse marlène.gif",
            class: "danse-marlene-2"
        }],
        clickZones: [{
            'toStep': "m-225",
            'type': 'arrow',
            'pos': {
                'left': 67,
                'top': 11.5,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-225",
        img: "225.png",
        clickZones: [{
            'toStep': "m-226",
            'type': 'arrow',
            'pos': {
                'left': 72.5,
                'top': 88,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-226",
        img: "226.png",
        ambiance: "dnb_club_marlene3.mp3",
        clickZones: [{
            'toStep': "m-227",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 21,
                'width': 23.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-227",
        img: "227.png",
        clickZones: [{
            'toStep': "m-159",
            'type': 'oval',
            'pos': {
                'left': 35,
                'top': 84.5,
                'width': 19.5,
                'height': 8.5
            }
        }]
    }, {
        id: "m-228",
        img: "228.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-234",
            'type': 'arrow',
            'pos': {
                'left': 9.5,
                'top': 81,
                'width': 30,
                'height': 11.5,
                'rotate': 180
            }
        }, {
            'toStep': "m-102",
            'type': 'arrow',
            'pos': {
                'left': 42,
                'top': 85.5,
                'width': 26,
                'height': 8,
                'rotate': 90
            }
        }, {
            'toStep': "m-229",
            'type': 'arrow',
            'pos': {
                'left': 66.5,
                'top': 81.5,
                'width': 30,
                'height': 11,
                'rotate': -90
            }
        }]
    }, {
        id: "m-229",
        img: "229.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-230",
            'type': 'arrow',
            'pos': {
                'left': 8.5,
                'top': 84,
                'width': 30,
                'height': 10.5,
                'rotate': 180
            }
        }, {
            'toStep': "m-228",
            'type': 'arrow',
            'pos': {
                'left': 40,
                'top': 85.5,
                'width': 26,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-231",
            'type': 'arrow',
            'pos': {
                'left': 66.5,
                'top': 84,
                'width': 29,
                'height': 11
            }
        }]
    }, {
        id: "m-230",
        img: "230.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-229",
            'type': 'arrow',
            'pos': {
                'left': 0.5,
                'top': 85.5,
                'width': 26,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-232",
            'type': 'arrow',
            'pos': {
                'left': 57.5,
                'top': 83.5,
                'width': 29,
                'height': 11,
                'rotate': -90
            }
        }]
    }, {
        id: "m-232",
        img: "232.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-230",
            'type': 'arrow',
            'pos': {
                'left': 0.5,
                'top': 85.5,
                'width': 26,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-233",
            'type': 'arrow',
            'pos': {
                'left': 68.5,
                'top': 84,
                'width': 29.5,
                'height': 11,
                'rotate': -90
            }
        }]
    }, {
        id: "m-233",
        img: "233.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-232",
            'type': 'arrow',
            'pos': {
                'left': 2,
                'top': 86,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-243",
            'type': 'arrow',
            'pos': {
                'left': 74.5,
                'top': 86,
                'width': 29.5,
                'height': 11,
                'rotate': -90
            }
        }]
    }, {
        id: "m-243",
        img: "243.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-233",
            'type': 'arrow',
            'pos': {
                'left': -1,
                'top': 87,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }]
    }, {
        id: "m-231",
        img: "231.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-229",
            'type': 'arrow',
            'pos': {
                'left': 1.5,
                'top': 85.5,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-242",
            'type': 'arrow',
            'pos': {
                'left': 69.5,
                'top': 84,
                'width': 29.5,
                'height': 11,
                'rotate': -90
            }
        }]
    }, {
        id: "m-242",
        img: "242.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-231",
            'type': 'arrow',
            'pos': {
                'left': -1,
                'top': 87,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }]
    }, {
        id: "m-234",
        img: "234.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-235",
            'type': 'arrow',
            'pos': {
                'left': 5.5,
                'top': 85.5,
                'width': 30,
                'height': 10.5,
                'rotate': 180
            }
        }, {
            'toStep': "m-228",
            'type': 'arrow',
            'pos': {
                'left': 36,
                'top': 86,
                'width': 26,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-236",
            'type': 'arrow',
            'pos': {
                'left': 63.5,
                'top': 85,
                'width': 29,
                'height': 11
            }
        }]
    }, {
        id: "m-235",
        img: "235.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-234",
            'type': 'arrow',
            'pos': {
                'left': 1.5,
                'top': 85.5,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-244",
            'type': 'arrow',
            'pos': {
                'left': 69.5,
                'top': 84,
                'width': 29.5,
                'height': 11,
                'rotate': -90
            }
        }]
    }, {
        id: "m-244",
        img: "244.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-235",
            'type': 'arrow',
            'pos': {
                'left': -1,
                'top': 87,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }]
    }, {
        id: "m-236",
        img: "236.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-234",
            'type': 'arrow',
            'pos': {
                'left': 1.5,
                'top': 85.5,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-237",
            'type': 'arrow',
            'pos': {
                'left': 63,
                'top': 84,
                'width': 30,
                'height': 11,
                'rotate': -90
            }
        }]
    }, {
        id: "m-237",
        img: "237.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-236",
            'type': 'arrow',
            'pos': {
                'left': 1.5,
                'top': 85.5,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-103",
            'type': 'arrow',
            'pos': {
                'left': 63,
                'top': 84,
                'width': 30,
                'height': 11,
                'rotate': -90
            }
        }]
    }, {
        id: "m-238",
        img: "238.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-124",
            'type': 'arrow',
            'pos': {
                'left': 1.5,
                'top': 85.5,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-239",
            'type': 'arrow',
            'pos': {
                'left': 69,
                'top': 84,
                'width': 30,
                'height': 11,
                'rotate': -90
            }
        }]
    }, {
        id: "m-239",
        img: "239.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-238",
            'type': 'arrow',
            'pos': {
                'left': -1,
                'top': 87,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }]
    }, {
        id: "m-240",
        img: "240.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-125",
            'type': 'arrow',
            'pos': {
                'left': 1.5,
                'top': 85.5,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }, {
            'toStep': "m-241",
            'type': 'arrow',
            'pos': {
                'left': 69,
                'top': 85,
                'width': 28,
                'height': 11,
                'rotate': -90
            }
        }]
    }, {
        id: "m-241",
        img: "241.png",
        ambiance: "Bougie.mp3",
        clickZones: [{
            'toStep': "m-240",
            'type': 'arrow',
            'pos': {
                'left': -1,
                'top': 87,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }]
    }
]