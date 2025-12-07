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
        id: "page-suspens-bis",
        img: "11bis.png",
        clickZones: [{
            'toStep': "m-130",
            'type': 'square',
            'pos': {
                'left': 42.5,
                'top': 83.5,
                'width': 18.5,
                'height': 10.5,
                'rotate': 45
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
            'toStep': "m-100",
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
            'toStep': "page-suspens-bis",
            'throwStep': "page-suspens",
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
            'toStep': "ouvrir-porte",
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
            'toStep': "m-146",
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
            'toStep': "m-146",
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
            'toStep': "bouzin",
            'type': 'arrow',
            'pos': {
                'left': 73,
                'top': 89,
                'width': 23,
                'height': 8.5
            }
        }]
    }
]