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
            'toStep': "m-103",
            'throwSteps': ["m-104"],
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
        playbackRate: 4,
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
    }, {
        id: "m-94",
        img: "94.png",
        clickZones: [{
            'toStep': "m-93",
            'type': 'arrow',
            'pos': {
                'left': 12,
                'top': 83,
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
        clickZones: [{
            'toStep': "m-94",
            'type': 'arrow',
            'pos': {
                'left': 3,
                'top': 86,
                'width': 23,
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
        clickZones: [{
            'toStep': "m-95",
            'type': 'arrow',
            'pos': {
                'left': 2,
                'top': 86.5,
                'width': 25,
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
        clickZones: [{
            'toStep': "m-96",
            'type': 'arrow',
            'pos': {
                'left': 2,
                'top': 86.5,
                'width': 25,
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
                'left': 40,
                'top': 83.5,
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
        clickZones: [{
            'toStep': "m-98",
            'type': 'arrow',
            'pos': {
                'left': 2,
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
        clickZones: [{
            'toStep': "m-99",
            'type': 'arrow',
            'pos': {
                'left': 2,
                'top': 86.5,
                'width': 25,
                'height': 8.5,
                'rotate': 90
            }
        }]
    }, {
        id: "m-101",
        img: "101.png",
        clickZones: [{
            'toStep': "m-98",
            'type': 'arrow',
            'pos': {
                'left': 2,
                'top': 86.5,
                'width': 25,
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
        clickZones: [{
            'toStep': "m-125",
            'type': 'arrow',
            'pos': {
                'left': 4,
                'top': 85.5,
                'width': 33,
                'height': 11,
                'rotate': 180
            }
        }, {
            'toStep': "bouzin",
            'type': 'square',
            'pos': {
                'left': 54,
                'top': 83,
                'width': 32,
                'height': 7
            }
        }]
    }, {
        id: "m-125",
        img: "125.png",
        clickZones: [{
            'toStep': "m-126",
            'type': 'arrow',
            'pos': {
                'left': 6,
                'top': 84,
                'width': 33.5,
                'height': 12
            }
        }, {
            'toStep': "bouzin",
            'type': 'arrow',
            'pos': {
                'left': 52,
                'top': 81,
                'width': 46,
                'height': 16,
                'rotate': 180
            }
        }]
    }, {
        id: "m-126",
        img: "126.png",
        clickZones: [{
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
        clickZones: [{
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
            'toStep': "m-133",
            'type': 'oval',
            'pos': {
                'left': 9,
                'top': 78.5,
                'width': 35,
                'height': 13
            }
        }, {
            'toStep': "m-133",
            'type': 'oval',
            'pos': {
                'left': 54,
                'top': 76,
                'width': 34,
                'height': 14.5
            }
        }]
    }, {
        id: "m-133",
        img: "133.png",
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
        gif: "danse marlène.gif",
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
        gif: "danse marlène.gif",
        clickZones: [{
            'toStep': "bouzin",
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
                'left': 73,
                'top': 89,
                'width': 23,
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
        gif: "QQR_leo.gif",
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
        gif: "QQR_leo.gif",
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
        gif: "QQR_leo.gif",
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
        clickZones: [{
            'toStep': "m-176",
            'type': 'arrow',
            'pos': {
                'left': 70.5,
                'top': 87,
                'width': 24,
                'height': 8.5
            }
        }]
    }, {
        id: "m-176",
        img: "176.png",
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
        video: "chargement.webm",
        playbackRate: 0.3,
        atEndStep: "m-179",
        clickZones: []
    }, {
        id: "m-179",
        img: "179.png",
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
        clickZones: [{
            'toStep': null,
            'type': 'oval',
            'toStepCondition': (n) => n === 54 ? "m-196" : "m-191",
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
        clickZones: [{
            'toStep': null,
            'type': 'oval',
            'toStepCondition': (n) => n === 54 ? "m-196" : "m-194",
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
    }
]