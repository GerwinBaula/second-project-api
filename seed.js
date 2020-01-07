const { Address } = require('./models/address');
const mongoose = require('mongoose');

const data = [
    {
        "postcode": 6728,
        "place_name": "King Leopold Ranges",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -17.1099,
        "longitude": 125.4806,
        "accuracy": 4
      },
      {
        "postcode": 6728,
        "place_name": "Geegully Creek",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -20.4159,
        "longitude": 118.7072,
        "accuracy": 3
      },
      {
        "postcode": 6728,
        "place_name": "Derby",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -17.3029,
        "longitude": 123.6286,
        "accuracy": 4
      },
      {
        "postcode": 6728,
        "place_name": "Willare",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -20.4159,
        "longitude": 118.7072,
        "accuracy": 3
      },
      {
        "postcode": 6728,
        "place_name": "Meda",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -20.4159,
        "longitude": 118.7072,
        "accuracy": 3
      },
      {
        "postcode": 6728,
        "place_name": "St George Ranges",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -18.982,
        "longitude": 125.0087,
        "accuracy": 4
      },
      {
        "postcode": 6731,
        "place_name": "Cockatoo Island",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -20.5828,
        "longitude": 119.1891,
        "accuracy": 1
      },
      {
        "postcode": 6733,
        "place_name": "Koolan Island",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -21.0454,
        "longitude": 118.4324,
        "accuracy": 1
      },
      {
        "postcode": 6740,
        "place_name": "Prince Regent River",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -15.9162,
        "longitude": 126.8148,
        "accuracy": 1
      },
      {
        "postcode": 6740,
        "place_name": "Kalumburu",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -14.2872,
        "longitude": 126.6345,
        "accuracy": 1
      },
      {
        "postcode": 6740,
        "place_name": "Mitchell Plateau",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -15.9162,
        "longitude": 126.8148,
        "accuracy": 1
      },
      {
        "postcode": 6740,
        "place_name": "Oombulgurri",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -15.9162,
        "longitude": 126.8148,
        "accuracy": 1
      },
      {
        "postcode": 6740,
        "place_name": "Wyndham",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -15.4869,
        "longitude": 128.1243,
        "accuracy": 4
      },
      {
        "postcode": 6740,
        "place_name": "Drysdale River",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -15.9162,
        "longitude": 126.8148,
        "accuracy": 1
      },
      {
        "postcode": 6743,
        "place_name": "Lake Argyle",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -16.1088,
        "longitude": 128.7443,
        "accuracy": 1
      },
      {
        "postcode": 6743,
        "place_name": "Kununurra",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -15.7739,
        "longitude": 128.739,
        "accuracy": 1
      },
      {
        "postcode": 6743,
        "place_name": "Gibb",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.0844,
        "longitude": 119.0982,
        "accuracy": 1
      },
      {
        "postcode": 6743,
        "place_name": "Warmun",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -17.0338,
        "longitude": 128.2236,
        "accuracy": 1
      },
      {
        "postcode": 6743,
        "place_name": "Cambridge Gulf",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -17.4122,
        "longitude": 129.6861,
        "accuracy": 1
      },
      {
        "postcode": 6743,
        "place_name": "Durack",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -17.4122,
        "longitude": 129.6861,
        "accuracy": 1
      },
      {
        "postcode": 6751,
        "place_name": "Rocklea",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.8696,
        "longitude": 118.4233,
        "accuracy": 3
      },
      {
        "postcode": 6751,
        "place_name": "Tom Price",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -22.6939,
        "longitude": 117.7931,
        "accuracy": 4
      },
      {
        "postcode": 6751,
        "place_name": "Chichester",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -22.6856,
        "longitude": 117.7906,
        "accuracy": 3
      },
      {
        "postcode": 6751,
        "place_name": "Wittenoom",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -22.2404,
        "longitude": 118.3355,
        "accuracy": 4
      },
      {
        "postcode": 6751,
        "place_name": "Mulga Downs",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -22.6856,
        "longitude": 117.7906,
        "accuracy": 3
      },
      {
        "postcode": 6751,
        "place_name": "Nanutarra",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -22.6856,
        "longitude": 117.7906,
        "accuracy": 3
      },
      {
        "postcode": 6751,
        "place_name": "Innawanga",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -22.6856,
        "longitude": 117.7906,
        "accuracy": 3
      },
      {
        "postcode": 6751,
        "place_name": "Mount Sheila",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -22.6856,
        "longitude": 117.7906,
        "accuracy": 3
      },
      {
        "postcode": 6751,
        "place_name": "Karijini",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -22.6856,
        "longitude": 117.7906,
        "accuracy": 3
      },
      {
        "postcode": 6751,
        "place_name": "Juna Downs",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -22.6856,
        "longitude": 117.7906,
        "accuracy": 3
      },
      {
        "postcode": 6753,
        "place_name": "Newman",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -23.3564,
        "longitude": 119.7355,
        "accuracy": 4
      },
      {
        "postcode": 6754,
        "place_name": "Paraburdoo",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -23.2042,
        "longitude": 117.6697,
        "accuracy": 4
      },
      {
        "postcode": 6758,
        "place_name": "Nullagine",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -21.8897,
        "longitude": 120.1114,
        "accuracy": 4
      },
      {
        "postcode": 6760,
        "place_name": "Marble Bar",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -21.1707,
        "longitude": 119.7444,
        "accuracy": 4
      },
      {
        "postcode": 6761,
        "place_name": "Shay Gap",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -21.1707,
        "longitude": 119.7444,
        "accuracy": 1
      },
      {
        "postcode": 6762,
        "place_name": "Telfer",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -21.2117,
        "longitude": 123.2617,
        "accuracy": 4
      },
      {
        "postcode": 6765,
        "place_name": "Mount Hardman",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -21.1707,
        "longitude": 119.7444,
        "accuracy": 3
      },
      {
        "postcode": 6765,
        "place_name": "Fitzroy Crossing",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -18.1971,
        "longitude": 125.5666,
        "accuracy": 4
      },
      {
        "postcode": 6770,
        "place_name": "Sturt Creek",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -18.8386,
        "longitude": 128.1783,
        "accuracy": 3
      },
      {
        "postcode": 6770,
        "place_name": "Mueller Ranges",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -18.3983,
        "longitude": 126.8562,
        "accuracy": 4
      },
      {
        "postcode": 6770,
        "place_name": "Mcbeath",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -19.3668,
        "longitude": 127.5678,
        "accuracy": 3
      },
      {
        "postcode": 6770,
        "place_name": "Purnululu",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -19.3668,
        "longitude": 127.5678,
        "accuracy": 3
      },
      {
        "postcode": 6770,
        "place_name": "Tanami",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -19.3668,
        "longitude": 127.5678,
        "accuracy": 3
      },
      {
        "postcode": 6770,
        "place_name": "Halls Creek",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -19.3668,
        "longitude": 127.5678,
        "accuracy": 3
      },
      {
        "postcode": 6770,
        "place_name": "Ord River",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -17.3857,
        "longitude": 128.9207,
        "accuracy": 3
      },
      {
        "postcode": 6798,
        "place_name": "Christmas Island",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -10.4854,
        "longitude": 105.6365,
        "accuracy": 1
      },
      {
        "postcode": 6799,
        "place_name": "Home Island Cocos (Keeling) Islands",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -12.1352,
        "longitude": 96.8628,
        "accuracy": 1
      },
      {
        "postcode": 6799,
        "place_name": "West Island Cocos (Keeling) Islands",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -12.1352,
        "longitude": 96.8628,
        "accuracy": 1
      },
      {
        "postcode": 6800,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6803,
        "place_name": "Northbridge",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9478,
        "longitude": 115.8588,
        "accuracy": 4
      },
      {
        "postcode": 6809,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6817,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6820,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6827,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6830,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6831,
        "place_name": "Perth St Georges Tce",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9333,
        "longitude": 115.8333,
        "accuracy": 1
      },
      {
        "postcode": 6832,
        "place_name": "Perth Adelaide Tce",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 1
      },
      {
        "postcode": 6832,
        "place_name": "Perth East St Georges Tce",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9333,
        "longitude": 115.8333,
        "accuracy": 1
      },
      {
        "postcode": 6837,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6838,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6839,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6840,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6841,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6842,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6843,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6844,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6845,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6846,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6847,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6848,
        "place_name": "Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9522,
        "longitude": 115.8614,
        "accuracy": 4
      },
      {
        "postcode": 6849,
        "place_name": "Perth Bc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9333,
        "longitude": 115.8333,
        "accuracy": 1
      },
      {
        "postcode": 6850,
        "place_name": "Cloisters Square Po",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.952,
        "longitude": 115.8607,
        "accuracy": 1
      },
      {
        "postcode": 6850,
        "place_name": "Cloisters Square",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9333,
        "longitude": 115.8333,
        "accuracy": 1
      },
      {
        "postcode": 6865,
        "place_name": "Northbridge",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9478,
        "longitude": 115.8588,
        "accuracy": 4
      },
      {
        "postcode": 6872,
        "place_name": "West Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.949,
        "longitude": 115.842,
        "accuracy": 4
      },
      {
        "postcode": 6892,
        "place_name": "East Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9587,
        "longitude": 115.8711,
        "accuracy": 4
      },
      {
        "postcode": 6900,
        "place_name": "Leederville",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9363,
        "longitude": 115.8419,
        "accuracy": 4
      },
      {
        "postcode": 6901,
        "place_name": "West Leederville",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9414,
        "longitude": 115.8312,
        "accuracy": 4
      },
      {
        "postcode": 6902,
        "place_name": "Leederville",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9363,
        "longitude": 115.8419,
        "accuracy": 4
      },
      {
        "postcode": 6903,
        "place_name": "Leederville",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9363,
        "longitude": 115.8419,
        "accuracy": 4
      },
      {
        "postcode": 6904,
        "place_name": "Subiaco",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9485,
        "longitude": 115.8268,
        "accuracy": 4
      },
      {
        "postcode": 6904,
        "place_name": "Subiaco Po",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.95,
        "longitude": 115.8,
        "accuracy": 3
      },
      {
        "postcode": 6905,
        "place_name": "Northlands",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9722,
        "longitude": 115.8,
        "accuracy": 1
      },
      {
        "postcode": 6905,
        "place_name": "Northlands Po",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9486,
        "longitude": 115.8275,
        "accuracy": 1
      },
      {
        "postcode": 6906,
        "place_name": "North Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9272,
        "longitude": 115.8528,
        "accuracy": 4
      },
      {
        "postcode": 6907,
        "place_name": "Nedlands",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9818,
        "longitude": 115.8073,
        "accuracy": 4
      },
      {
        "postcode": 6909,
        "place_name": "Nedlands",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9818,
        "longitude": 115.8073,
        "accuracy": 4
      },
      {
        "postcode": 6910,
        "place_name": "Claremont",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9796,
        "longitude": 115.7823,
        "accuracy": 4
      },
      {
        "postcode": 6911,
        "place_name": "Cottesloe",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32,
        "longitude": 115.7667,
        "accuracy": 4
      },
      {
        "postcode": 6912,
        "place_name": "Mosman Park",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.0054,
        "longitude": 115.7638,
        "accuracy": 4
      },
      {
        "postcode": 6913,
        "place_name": "Wembley",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9333,
        "longitude": 115.8,
        "accuracy": 4
      },
      {
        "postcode": 6914,
        "place_name": "Balcatta",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.875,
        "longitude": 115.8284,
        "accuracy": 4
      },
      {
        "postcode": 6915,
        "place_name": "Mount Hawthorn",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.92,
        "longitude": 115.8351,
        "accuracy": 4
      },
      {
        "postcode": 6916,
        "place_name": "Osborne Park Dc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9802,
        "longitude": 115.7757,
        "accuracy": 3
      },
      {
        "postcode": 6916,
        "place_name": "Osborne Park",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9007,
        "longitude": 115.8108,
        "accuracy": 4
      },
      {
        "postcode": 6917,
        "place_name": "Osborne Park",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9007,
        "longitude": 115.8108,
        "accuracy": 4
      },
      {
        "postcode": 6918,
        "place_name": "Innaloo",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.8927,
        "longitude": 115.7951,
        "accuracy": 4
      },
      {
        "postcode": 6919,
        "place_name": "Joondalup Dc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9802,
        "longitude": 115.7757,
        "accuracy": 1
      },
      {
        "postcode": 6920,
        "place_name": "North Beach",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.863,
        "longitude": 115.7562,
        "accuracy": 4
      },
      {
        "postcode": 6921,
        "place_name": "Karrinyup",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.8723,
        "longitude": 115.7768,
        "accuracy": 4
      },
      {
        "postcode": 6922,
        "place_name": "Scarborough",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.8958,
        "longitude": 115.7643,
        "accuracy": 4
      },
      {
        "postcode": 6923,
        "place_name": "Hillarys",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.807,
        "longitude": 115.7405,
        "accuracy": 4
      },
      {
        "postcode": 6924,
        "place_name": "Greenwood",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.8272,
        "longitude": 115.8025,
        "accuracy": 4
      },
      {
        "postcode": 6925,
        "place_name": "Walliston Dc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9167,
        "longitude": 115.8556,
        "accuracy": 1
      },
      {
        "postcode": 6926,
        "place_name": "Kalamunda",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9868,
        "longitude": 116.0704,
        "accuracy": 1
      },
      {
        "postcode": 6929,
        "place_name": "Mount Lawley",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9344,
        "longitude": 115.8716,
        "accuracy": 4
      },
      {
        "postcode": 6931,
        "place_name": "Maylands",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.931,
        "longitude": 115.8949,
        "accuracy": 4
      },
      {
        "postcode": 6932,
        "place_name": "Inglewood",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9166,
        "longitude": 115.8798,
        "accuracy": 4
      },
      {
        "postcode": 6933,
        "place_name": "Bayswater",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9169,
        "longitude": 115.9178,
        "accuracy": 4
      },
      {
        "postcode": 6934,
        "place_name": "Bassendean",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9091,
        "longitude": 115.9437,
        "accuracy": 4
      },
      {
        "postcode": 6935,
        "place_name": "Guildford",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9,
        "longitude": 115.9667,
        "accuracy": 4
      },
      {
        "postcode": 6936,
        "place_name": "Midland Dc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9111,
        "longitude": 115.9333,
        "accuracy": 1
      },
      {
        "postcode": 6937,
        "place_name": "Tuart Hill",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.8981,
        "longitude": 115.8349,
        "accuracy": 4
      },
      {
        "postcode": 6938,
        "place_name": "Tuart Hill",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.8981,
        "longitude": 115.8349,
        "accuracy": 4
      },
      {
        "postcode": 6939,
        "place_name": "Tuart Hill",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.8981,
        "longitude": 115.8349,
        "accuracy": 4
      },
      {
        "postcode": 6940,
        "place_name": "Tuart Hill",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.8981,
        "longitude": 115.8349,
        "accuracy": 4
      },
      {
        "postcode": 6941,
        "place_name": "Mirrabooka",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.8596,
        "longitude": 115.8659,
        "accuracy": 4
      },
      {
        "postcode": 6942,
        "place_name": "Bassendean Dc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.75,
        "longitude": 115.8,
        "accuracy": 1
      },
      {
        "postcode": 6943,
        "place_name": "Morley",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.8877,
        "longitude": 115.9099,
        "accuracy": 4
      },
      {
        "postcode": 6944,
        "place_name": "Malaga",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.8526,
        "longitude": 115.881,
        "accuracy": 4
      },
      {
        "postcode": 6945,
        "place_name": "Malaga Dc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.75,
        "longitude": 115.8,
        "accuracy": 1
      },
      {
        "postcode": 6946,
        "place_name": "Wanneroo",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.75,
        "longitude": 115.8,
        "accuracy": 4
      },
      {
        "postcode": 6947,
        "place_name": "Wangara Dc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.75,
        "longitude": 115.8,
        "accuracy": 1
      },
      {
        "postcode": 6951,
        "place_name": "South Perth",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9833,
        "longitude": 115.8667,
        "accuracy": 4
      },
      {
        "postcode": 6952,
        "place_name": "Como",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9912,
        "longitude": 115.8634,
        "accuracy": 4
      },
      {
        "postcode": 6953,
        "place_name": "Applecross",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.0167,
        "longitude": 115.8333,
        "accuracy": 4
      },
      {
        "postcode": 6954,
        "place_name": "Booragoon",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.0395,
        "longitude": 115.8337,
        "accuracy": 4
      },
      {
        "postcode": 6955,
        "place_name": "Willetton",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.0525,
        "longitude": 115.8878,
        "accuracy": 4
      },
      {
        "postcode": 6956,
        "place_name": "Melville",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.0404,
        "longitude": 115.8012,
        "accuracy": 4
      },
      {
        "postcode": 6957,
        "place_name": "Palmyra",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.045,
        "longitude": 115.7859,
        "accuracy": 4
      },
      {
        "postcode": 6958,
        "place_name": "Royal Australian Navy Warships",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.05,
        "longitude": 115.7667,
        "accuracy": 1
      },
      {
        "postcode": 6959,
        "place_name": "Fremantle",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.05,
        "longitude": 115.7667,
        "accuracy": 4
      },
      {
        "postcode": 6960,
        "place_name": "Myaree Bc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.2833,
        "longitude": 115.7167,
        "accuracy": 1
      },
      {
        "postcode": 6961,
        "place_name": "Palmyra Dc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.2833,
        "longitude": 115.7167,
        "accuracy": 1
      },
      {
        "postcode": 6963,
        "place_name": "Hamilton Hill",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.0845,
        "longitude": 115.7795,
        "accuracy": 4
      },
      {
        "postcode": 6964,
        "place_name": "Success",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.1428,
        "longitude": 115.85,
        "accuracy": 4
      },
      {
        "postcode": 6965,
        "place_name": "Bibra Lake Dc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.2833,
        "longitude": 115.7167,
        "accuracy": 1
      },
      {
        "postcode": 6966,
        "place_name": "Kwinana",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.2301,
        "longitude": 115.7813,
        "accuracy": 4
      },
      {
        "postcode": 6967,
        "place_name": "Rockingham Dc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.2833,
        "longitude": 115.7167,
        "accuracy": 1
      },
      {
        "postcode": 6968,
        "place_name": "Rockingham",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.2768,
        "longitude": 115.7298,
        "accuracy": 4
      },
      {
        "postcode": 6969,
        "place_name": "Rockingham Beach",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.2833,
        "longitude": 115.7167,
        "accuracy": 1
      },
      {
        "postcode": 6970,
        "place_name": "Canning Vale Dc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9919,
        "longitude": 115.8645,
        "accuracy": 1
      },
      {
        "postcode": 6979,
        "place_name": "Victoria Park",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9762,
        "longitude": 115.9052,
        "accuracy": 4
      },
      {
        "postcode": 6980,
        "place_name": "Cannington",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.0167,
        "longitude": 115.95,
        "accuracy": 4
      },
      {
        "postcode": 6981,
        "place_name": "East Victoria Park",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9889,
        "longitude": 115.9039,
        "accuracy": 4
      },
      {
        "postcode": 6982,
        "place_name": "Bentley",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32,
        "longitude": 115.9167,
        "accuracy": 4
      },
      {
        "postcode": 6983,
        "place_name": "Bentley Dc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.0048,
        "longitude": 115.9411,
        "accuracy": 1
      },
      {
        "postcode": 6984,
        "place_name": "Belmont",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9435,
        "longitude": 115.9255,
        "accuracy": 4
      },
      {
        "postcode": 6985,
        "place_name": "Cloverdale",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -31.9628,
        "longitude": 115.9443,
        "accuracy": 4
      },
      {
        "postcode": 6986,
        "place_name": "Welshpool Dc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.0048,
        "longitude": 115.9411,
        "accuracy": 1
      },
      {
        "postcode": 6987,
        "place_name": "Cannington",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.0167,
        "longitude": 115.95,
        "accuracy": 4
      },
      {
        "postcode": 6988,
        "place_name": "Thornlie",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.06,
        "longitude": 115.955,
        "accuracy": 4
      },
      {
        "postcode": 6989,
        "place_name": "Maddington",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.05,
        "longitude": 115.9833,
        "accuracy": 4
      },
      {
        "postcode": 6990,
        "place_name": "Gosnells",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.081,
        "longitude": 116.0054,
        "accuracy": 4
      },
      {
        "postcode": 6991,
        "place_name": "Kelmscott",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.1243,
        "longitude": 116.0259,
        "accuracy": 4
      },
      {
        "postcode": 6992,
        "place_name": "Armadale",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.1461,
        "longitude": 116.0093,
        "accuracy": 4
      },
      {
        "postcode": 6997,
        "place_name": "Kelmscott Dc",
        "state_name": "Western Australia",
        "state_code": "WA",
        "latitude": -32.1167,
        "longitude": 116.0056,
        "accuracy": 1
      },
      {
        "postcode": 200,
        "place_name": "Australian National University",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2777,
        "longitude": 149.1189,
        "accuracy": 1
      },
      {
        "postcode": 221,
        "place_name": "Barton",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3049,
        "longitude": 149.1412,
        "accuracy": 4
      },
      {
        "postcode": 2540,
        "place_name": "Wreck Bay",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1627,
        "longitude": 150.6907,
        "accuracy": 4
      },
      {
        "postcode": 2540,
        "place_name": "Hmas Creswell",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.028,
        "longitude": 150.5501,
        "accuracy": 3
      },
      {
        "postcode": 2540,
        "place_name": "Jervis Bay",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1333,
        "longitude": 150.7,
        "accuracy": 4
      },
      {
        "postcode": 2600,
        "place_name": "Deakin West",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3126,
        "longitude": 149.1278,
        "accuracy": 3
      },
      {
        "postcode": 2600,
        "place_name": "Duntroon",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3,
        "longitude": 149.1667,
        "accuracy": 4
      },
      {
        "postcode": 2600,
        "place_name": "Parliament House",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3126,
        "longitude": 149.1278,
        "accuracy": 3
      },
      {
        "postcode": 2600,
        "place_name": "Yarralumla",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2998,
        "longitude": 149.1058,
        "accuracy": 4
      },
      {
        "postcode": 2600,
        "place_name": "Russell",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2977,
        "longitude": 149.151,
        "accuracy": 4
      },
      {
        "postcode": 2600,
        "place_name": "Barton",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3049,
        "longitude": 149.1412,
        "accuracy": 4
      },
      {
        "postcode": 2600,
        "place_name": "Deakin",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3193,
        "longitude": 149.1031,
        "accuracy": 4
      },
      {
        "postcode": 2600,
        "place_name": "Capital Hill",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3066,
        "longitude": 149.1246,
        "accuracy": 4
      },
      {
        "postcode": 2600,
        "place_name": "Parkes",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3018,
        "longitude": 149.1304,
        "accuracy": 4
      },
      {
        "postcode": 2600,
        "place_name": "Harman",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.35,
        "longitude": 149.2,
        "accuracy": 4
      },
      {
        "postcode": 2600,
        "place_name": "Hmas Harman",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.31,
        "longitude": 149.1385,
        "accuracy": 3
      },
      {
        "postcode": 2600,
        "place_name": "Canberra",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2835,
        "longitude": 149.1281,
        "accuracy": 4
      },
      {
        "postcode": 2601,
        "place_name": "City",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2813,
        "longitude": 149.1293,
        "accuracy": 4
      },
      {
        "postcode": 2601,
        "place_name": "Canberra",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2835,
        "longitude": 149.1281,
        "accuracy": 4
      },
      {
        "postcode": 2601,
        "place_name": "Acton",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2777,
        "longitude": 149.1183,
        "accuracy": 4
      },
      {
        "postcode": 2601,
        "place_name": "Black Mountain",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2772,
        "longitude": 149.1054,
        "accuracy": 3
      },
      {
        "postcode": 2602,
        "place_name": "Downer",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2446,
        "longitude": 149.1447,
        "accuracy": 4
      },
      {
        "postcode": 2602,
        "place_name": "Hackett",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2495,
        "longitude": 149.1635,
        "accuracy": 4
      },
      {
        "postcode": 2602,
        "place_name": "Watson",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2381,
        "longitude": 149.1527,
        "accuracy": 4
      },
      {
        "postcode": 2602,
        "place_name": "Lyneham",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2398,
        "longitude": 149.1307,
        "accuracy": 4
      },
      {
        "postcode": 2602,
        "place_name": "O'Connor",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2564,
        "longitude": 149.1125,
        "accuracy": 4
      },
      {
        "postcode": 2602,
        "place_name": "Ainslie",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2625,
        "longitude": 149.1437,
        "accuracy": 4
      },
      {
        "postcode": 2602,
        "place_name": "Dickson",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2508,
        "longitude": 149.1393,
        "accuracy": 4
      },
      {
        "postcode": 2603,
        "place_name": "Red Hill",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3262,
        "longitude": 149.1191,
        "accuracy": 4
      },
      {
        "postcode": 2603,
        "place_name": "Manuka",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3126,
        "longitude": 149.1278,
        "accuracy": 3
      },
      {
        "postcode": 2603,
        "place_name": "Griffith",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3253,
        "longitude": 149.1371,
        "accuracy": 4
      },
      {
        "postcode": 2603,
        "place_name": "Forrest",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.315,
        "longitude": 149.1286,
        "accuracy": 4
      },
      {
        "postcode": 2604,
        "place_name": "Narrabundah",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3357,
        "longitude": 149.1492,
        "accuracy": 4
      },
      {
        "postcode": 2604,
        "place_name": "Causeway",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3151,
        "longitude": 149.1512,
        "accuracy": 4
      },
      {
        "postcode": 2604,
        "place_name": "Kingston",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3152,
        "longitude": 149.1466,
        "accuracy": 4
      },
      {
        "postcode": 2605,
        "place_name": "Hughes",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3327,
        "longitude": 149.0949,
        "accuracy": 4
      },
      {
        "postcode": 2605,
        "place_name": "Garran",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3421,
        "longitude": 149.1085,
        "accuracy": 4
      },
      {
        "postcode": 2605,
        "place_name": "Curtin",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3246,
        "longitude": 149.0776,
        "accuracy": 4
      },
      {
        "postcode": 2606,
        "place_name": "O'Malley",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3525,
        "longitude": 149.1128,
        "accuracy": 4
      },
      {
        "postcode": 2606,
        "place_name": "Lyons",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3406,
        "longitude": 149.074,
        "accuracy": 4
      },
      {
        "postcode": 2606,
        "place_name": "Chifley",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3534,
        "longitude": 149.0768,
        "accuracy": 4
      },
      {
        "postcode": 2606,
        "place_name": "Woden",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3481,
        "longitude": 149.0905,
        "accuracy": 3
      },
      {
        "postcode": 2606,
        "place_name": "Phillip",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3503,
        "longitude": 149.0915,
        "accuracy": 4
      },
      {
        "postcode": 2606,
        "place_name": "Swinger Hill",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3481,
        "longitude": 149.0905,
        "accuracy": 3
      },
      {
        "postcode": 2607,
        "place_name": "Isaacs",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3686,
        "longitude": 149.1156,
        "accuracy": 4
      },
      {
        "postcode": 2607,
        "place_name": "Torrens",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.372,
        "longitude": 149.0877,
        "accuracy": 4
      },
      {
        "postcode": 2607,
        "place_name": "Mawson",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3634,
        "longitude": 149.0986,
        "accuracy": 4
      },
      {
        "postcode": 2607,
        "place_name": "Farrer",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3767,
        "longitude": 149.105,
        "accuracy": 4
      },
      {
        "postcode": 2607,
        "place_name": "Pearce",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3622,
        "longitude": 149.0834,
        "accuracy": 4
      },
      {
        "postcode": 2608,
        "place_name": "Civic Square",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.31,
        "longitude": 149.1933,
        "accuracy": 1
      },
      {
        "postcode": 2609,
        "place_name": "Pialligo",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3201,
        "longitude": 149.207,
        "accuracy": 4
      },
      {
        "postcode": 2609,
        "place_name": "Canberra Airport",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3172,
        "longitude": 149.1753,
        "accuracy": 3
      },
      {
        "postcode": 2609,
        "place_name": "Fyshwick",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3333,
        "longitude": 149.1667,
        "accuracy": 4
      },
      {
        "postcode": 2609,
        "place_name": "Symonston",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3516,
        "longitude": 149.1592,
        "accuracy": 4
      },
      {
        "postcode": 2609,
        "place_name": "Majura",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2667,
        "longitude": 149.2,
        "accuracy": 4
      },
      {
        "postcode": 2610,
        "place_name": "Canberra Bc",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2778,
        "longitude": 149.0111,
        "accuracy": 1
      },
      {
        "postcode": 2610,
        "place_name": "Canberra Mc",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2498,
        "longitude": 149.0591,
        "accuracy": 1
      },
      {
        "postcode": 2611,
        "place_name": "Stirling",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3497,
        "longitude": 149.0493,
        "accuracy": 4
      },
      {
        "postcode": 2611,
        "place_name": "Wright",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3224,
        "longitude": 149.0346,
        "accuracy": 4
      },
      {
        "postcode": 2611,
        "place_name": "Coree",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2794,
        "longitude": 148.9194,
        "accuracy": 4
      },
      {
        "postcode": 2611,
        "place_name": "Uriarra Village",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3503,
        "longitude": 149.0155,
        "accuracy": 3
      },
      {
        "postcode": 2611,
        "place_name": "Holder",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3344,
        "longitude": 149.0461,
        "accuracy": 4
      },
      {
        "postcode": 2611,
        "place_name": "Stromlo",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3255,
        "longitude": 148.9993,
        "accuracy": 4
      },
      {
        "postcode": 2611,
        "place_name": "Waramanga",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.353,
        "longitude": 149.0621,
        "accuracy": 4
      },
      {
        "postcode": 2611,
        "place_name": "Chapman",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3562,
        "longitude": 149.0374,
        "accuracy": 4
      },
      {
        "postcode": 2611,
        "place_name": "Weston Creek",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3333,
        "longitude": 149.05,
        "accuracy": 4
      },
      {
        "postcode": 2611,
        "place_name": "Mount Stromlo",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4171,
        "longitude": 148.7769,
        "accuracy": 3
      },
      {
        "postcode": 2611,
        "place_name": "Weston",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3358,
        "longitude": 149.0593,
        "accuracy": 4
      },
      {
        "postcode": 2611,
        "place_name": "Coombs",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3163,
        "longitude": 149.0394,
        "accuracy": 4
      },
      {
        "postcode": 2611,
        "place_name": "Uriarra",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4171,
        "longitude": 148.7769,
        "accuracy": 3
      },
      {
        "postcode": 2611,
        "place_name": "Duffy",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3346,
        "longitude": 149.0319,
        "accuracy": 4
      },
      {
        "postcode": 2611,
        "place_name": "Fisher",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3613,
        "longitude": 149.057,
        "accuracy": 4
      },
      {
        "postcode": 2611,
        "place_name": "Rivett",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3471,
        "longitude": 149.0379,
        "accuracy": 4
      },
      {
        "postcode": 2612,
        "place_name": "Campbell",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2891,
        "longitude": 149.1538,
        "accuracy": 4
      },
      {
        "postcode": 2612,
        "place_name": "Turner",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2688,
        "longitude": 149.1247,
        "accuracy": 4
      },
      {
        "postcode": 2612,
        "place_name": "Reid",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2858,
        "longitude": 149.1391,
        "accuracy": 4
      },
      {
        "postcode": 2612,
        "place_name": "Braddon",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2708,
        "longitude": 149.1357,
        "accuracy": 4
      },
      {
        "postcode": 2614,
        "place_name": "Cook",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2601,
        "longitude": 149.0657,
        "accuracy": 4
      },
      {
        "postcode": 2614,
        "place_name": "Aranda",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2582,
        "longitude": 149.0804,
        "accuracy": 4
      },
      {
        "postcode": 2614,
        "place_name": "Page",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2386,
        "longitude": 149.0499,
        "accuracy": 4
      },
      {
        "postcode": 2614,
        "place_name": "Hawker",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2471,
        "longitude": 149.0367,
        "accuracy": 4
      },
      {
        "postcode": 2614,
        "place_name": "Scullin",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2346,
        "longitude": 149.039,
        "accuracy": 4
      },
      {
        "postcode": 2614,
        "place_name": "Jamison Centre",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2498,
        "longitude": 149.0591,
        "accuracy": 3
      },
      {
        "postcode": 2614,
        "place_name": "Weetangera",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2498,
        "longitude": 149.0591,
        "accuracy": 3
      },
      {
        "postcode": 2614,
        "place_name": "Macquarie",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2513,
        "longitude": 149.0636,
        "accuracy": 4
      },
      {
        "postcode": 2615,
        "place_name": "Fraser",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1917,
        "longitude": 149.0453,
        "accuracy": 4
      },
      {
        "postcode": 2615,
        "place_name": "Spence",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1987,
        "longitude": 149.0644,
        "accuracy": 4
      },
      {
        "postcode": 2615,
        "place_name": "Florey",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2259,
        "longitude": 149.05,
        "accuracy": 4
      },
      {
        "postcode": 2615,
        "place_name": "Holt",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2244,
        "longitude": 149.0119,
        "accuracy": 4
      },
      {
        "postcode": 2615,
        "place_name": "Charnwood",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2002,
        "longitude": 149.0341,
        "accuracy": 4
      },
      {
        "postcode": 2615,
        "place_name": "Higgins",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2324,
        "longitude": 149.0272,
        "accuracy": 4
      },
      {
        "postcode": 2615,
        "place_name": "Dunlop",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.194,
        "longitude": 149.0198,
        "accuracy": 4
      },
      {
        "postcode": 2615,
        "place_name": "Kippax",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2101,
        "longitude": 149.034,
        "accuracy": 3
      },
      {
        "postcode": 2615,
        "place_name": "Melba",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2102,
        "longitude": 149.0541,
        "accuracy": 4
      },
      {
        "postcode": 2615,
        "place_name": "Flynn",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2059,
        "longitude": 149.0439,
        "accuracy": 4
      },
      {
        "postcode": 2615,
        "place_name": "Latham",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2165,
        "longitude": 149.0314,
        "accuracy": 4
      },
      {
        "postcode": 2615,
        "place_name": "Macgregor",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2098,
        "longitude": 149.011,
        "accuracy": 4
      },
      {
        "postcode": 2615,
        "place_name": "Kippax Centre",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2101,
        "longitude": 149.034,
        "accuracy": 3
      },
      {
        "postcode": 2616,
        "place_name": "Belconnen",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2167,
        "longitude": 149.0833,
        "accuracy": 4
      },
      {
        "postcode": 2617,
        "place_name": "Mckellar",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2175,
        "longitude": 149.077,
        "accuracy": 4
      },
      {
        "postcode": 2617,
        "place_name": "Belconnen",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2167,
        "longitude": 149.0833,
        "accuracy": 4
      },
      {
        "postcode": 2617,
        "place_name": "Evatt",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2119,
        "longitude": 149.0689,
        "accuracy": 4
      },
      {
        "postcode": 2617,
        "place_name": "Lawson",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2241,
        "longitude": 149.0998,
        "accuracy": 4
      },
      {
        "postcode": 2617,
        "place_name": "Giralang",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2109,
        "longitude": 149.096,
        "accuracy": 4
      },
      {
        "postcode": 2617,
        "place_name": "University Of Canberra",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2498,
        "longitude": 149.0591,
        "accuracy": 3
      },
      {
        "postcode": 2617,
        "place_name": "Belconnen DC",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2199,
        "longitude": 149.0869,
        "accuracy": 3
      },
      {
        "postcode": 2617,
        "place_name": "Kaleen",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2181,
        "longitude": 149.1052,
        "accuracy": 4
      },
      {
        "postcode": 2617,
        "place_name": "Bruce",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2441,
        "longitude": 149.0908,
        "accuracy": 4
      },
      {
        "postcode": 2618,
        "place_name": "Hall",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1685,
        "longitude": 149.0683,
        "accuracy": 4
      },
      {
        "postcode": 2620,
        "place_name": "Hume",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3855,
        "longitude": 149.1658,
        "accuracy": 4
      },
      {
        "postcode": 2620,
        "place_name": "Paddys River",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3914,
        "longitude": 149.2166,
        "accuracy": 3
      },
      {
        "postcode": 2620,
        "place_name": "Beard",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3422,
        "longitude": 149.2101,
        "accuracy": 4
      },
      {
        "postcode": 2620,
        "place_name": "Oaks Estate",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3397,
        "longitude": 149.2121,
        "accuracy": 4
      },
      {
        "postcode": 2620,
        "place_name": "Tharwa",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.5167,
        "longitude": 149.0667,
        "accuracy": 4
      },
      {
        "postcode": 2620,
        "place_name": "Kowen",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3914,
        "longitude": 149.2166,
        "accuracy": 3
      },
      {
        "postcode": 2900,
        "place_name": "Greenway",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4183,
        "longitude": 149.0666,
        "accuracy": 4
      },
      {
        "postcode": 2900,
        "place_name": "Tuggeranong",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4158,
        "longitude": 149.0649,
        "accuracy": 3
      },
      {
        "postcode": 2901,
        "place_name": "Tuggeranong Dc",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4333,
        "longitude": 149.15,
        "accuracy": 1
      },
      {
        "postcode": 2902,
        "place_name": "Kambah",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3862,
        "longitude": 149.058,
        "accuracy": 4
      },
      {
        "postcode": 2902,
        "place_name": "Kambah Village",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3862,
        "longitude": 149.058,
        "accuracy": 3
      },
      {
        "postcode": 2903,
        "place_name": "Erindale Centre",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3998,
        "longitude": 149.0888,
        "accuracy": 3
      },
      {
        "postcode": 2903,
        "place_name": "Oxley",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4095,
        "longitude": 149.0786,
        "accuracy": 4
      },
      {
        "postcode": 2903,
        "place_name": "Wanniassa",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.3978,
        "longitude": 149.0909,
        "accuracy": 4
      },
      {
        "postcode": 2904,
        "place_name": "Fadden",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.405,
        "longitude": 149.1166,
        "accuracy": 4
      },
      {
        "postcode": 2904,
        "place_name": "Monash",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4158,
        "longitude": 149.0906,
        "accuracy": 4
      },
      {
        "postcode": 2904,
        "place_name": "Gowrie",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4119,
        "longitude": 149.109,
        "accuracy": 4
      },
      {
        "postcode": 2904,
        "place_name": "Macarthur",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4089,
        "longitude": 149.127,
        "accuracy": 4
      },
      {
        "postcode": 2905,
        "place_name": "Isabella Plains",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4283,
        "longitude": 149.088,
        "accuracy": 4
      },
      {
        "postcode": 2905,
        "place_name": "Theodore",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4496,
        "longitude": 149.1197,
        "accuracy": 4
      },
      {
        "postcode": 2905,
        "place_name": "Gilmore",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4199,
        "longitude": 149.1348,
        "accuracy": 4
      },
      {
        "postcode": 2905,
        "place_name": "Richardson",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4279,
        "longitude": 149.1138,
        "accuracy": 4
      },
      {
        "postcode": 2905,
        "place_name": "Calwell",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4404,
        "longitude": 149.1071,
        "accuracy": 4
      },
      {
        "postcode": 2905,
        "place_name": "Chisholm",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4125,
        "longitude": 149.1283,
        "accuracy": 4
      },
      {
        "postcode": 2905,
        "place_name": "Bonython",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4333,
        "longitude": 149.0782,
        "accuracy": 4
      },
      {
        "postcode": 2906,
        "place_name": "Conder",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4593,
        "longitude": 149.1042,
        "accuracy": 4
      },
      {
        "postcode": 2906,
        "place_name": "Gordon",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4568,
        "longitude": 149.085,
        "accuracy": 4
      },
      {
        "postcode": 2906,
        "place_name": "Banks",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.4719,
        "longitude": 149.0997,
        "accuracy": 4
      },
      {
        "postcode": 2911,
        "place_name": "Mitchell",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2145,
        "longitude": 149.1293,
        "accuracy": 4
      },
      {
        "postcode": 2911,
        "place_name": "Crace",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.2028,
        "longitude": 149.1074,
        "accuracy": 4
      },
      {
        "postcode": 2912,
        "place_name": "Gungahlin",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1867,
        "longitude": 149.1362,
        "accuracy": 4
      },
      {
        "postcode": 2913,
        "place_name": "Casey",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.167,
        "longitude": 149.0947,
        "accuracy": 4
      },
      {
        "postcode": 2913,
        "place_name": "Franklin",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1995,
        "longitude": 149.1433,
        "accuracy": 4
      },
      {
        "postcode": 2913,
        "place_name": "Taylor",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1489,
        "longitude": 149.1092,
        "accuracy": 4
      },
      {
        "postcode": 2913,
        "place_name": "Palmerston",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1945,
        "longitude": 149.1194,
        "accuracy": 4
      },
      {
        "postcode": 2913,
        "place_name": "Kinlyside",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1754,
        "longitude": 149.0798,
        "accuracy": 4
      },
      {
        "postcode": 2913,
        "place_name": "Nicholls",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1873,
        "longitude": 149.0965,
        "accuracy": 4
      },
      {
        "postcode": 2913,
        "place_name": "Ginninderra Village",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1875,
        "longitude": 149.1244,
        "accuracy": 3
      },
      {
        "postcode": 2913,
        "place_name": "Ngunnawal",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1728,
        "longitude": 149.1115,
        "accuracy": 4
      },
      {
        "postcode": 2914,
        "place_name": "Bonner",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1623,
        "longitude": 149.1386,
        "accuracy": 4
      },
      {
        "postcode": 2914,
        "place_name": "Forde",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1682,
        "longitude": 149.1461,
        "accuracy": 4
      },
      {
        "postcode": 2914,
        "place_name": "Harrison",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1991,
        "longitude": 149.1563,
        "accuracy": 4
      },
      {
        "postcode": 2914,
        "place_name": "Amaroo",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1696,
        "longitude": 149.128,
        "accuracy": 4
      },
      {
        "postcode": 2914,
        "place_name": "Moncrieff",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1651,
        "longitude": 149.1179,
        "accuracy": 4
      },
      {
        "postcode": 2914,
        "place_name": "Jacka",
        "state_name": "Australian Capital Territory",
        "state_code": "ACT",
        "latitude": -35.1568,
        "longitude": 149.1288,
        "accuracy": 4
      },
      {
        "postcode": 1001,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1002,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1003,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1004,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1005,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1006,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1007,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1008,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1009,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1010,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1011,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1020,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1021,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1022,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1023,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1025,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1026,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1027,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1028,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1029,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1030,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1031,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1032,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1033,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1034,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1035,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1036,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1037,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1038,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1039,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1040,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1041,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1042,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1043,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1044,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1045,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1046,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1100,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1101,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1105,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1106,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1107,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1108,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1109,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1110,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1112,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1113,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1114,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1115,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1116,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1117,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1118,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1119,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1120,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1121,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1122,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1123,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1124,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1125,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1126,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1127,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1128,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1129,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1130,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1131,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1132,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1133,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1134,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1135,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1136,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1137,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1138,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1139,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1140,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1141,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1142,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1143,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1144,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1145,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1146,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1147,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1148,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1149,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1150,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1151,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1152,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1153,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1154,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1155,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1156,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1157,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1158,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1159,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1160,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1161,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1162,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1163,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1164,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1165,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1166,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1167,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1168,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1169,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1170,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1171,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1172,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1173,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1174,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1175,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1176,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1177,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1178,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1179,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1180,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1181,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1182,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1183,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1184,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1185,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1186,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1187,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1188,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1189,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1190,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1191,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1192,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1193,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1194,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1195,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1196,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1197,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1198,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1199,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1200,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1201,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1202,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1203,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1204,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1205,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1206,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1207,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1208,
        "place_name": "Haymarket",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8787,
        "longitude": 151.2053,
        "accuracy": 4
      },
      {
        "postcode": 1209,
        "place_name": "Australia Square",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8691,
        "longitude": 151.2071,
        "accuracy": 1
      },
      {
        "postcode": 1210,
        "place_name": "Australia Square",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1211,
        "place_name": "Australia Square",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1212,
        "place_name": "Australia Square",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1213,
        "place_name": "Australia Square",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1214,
        "place_name": "Australia Square",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1215,
        "place_name": "Australia Square",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1216,
        "place_name": "Grosvenor Place",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1217,
        "place_name": "Grosvenor Place",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1218,
        "place_name": "Grosvenor Place",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1219,
        "place_name": "Grosvenor Place",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1220,
        "place_name": "Grosvenor Place",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1221,
        "place_name": "Royal Exchange",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1222,
        "place_name": "Royal Exchange",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1223,
        "place_name": "Royal Exchange",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1224,
        "place_name": "Royal Exchange",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1225,
        "place_name": "Royal Exchange",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1226,
        "place_name": "Queen Victoria Building",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1227,
        "place_name": "Queen Victoria Building",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1228,
        "place_name": "Queen Victoria Building",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1229,
        "place_name": "Queen Victoria Building",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8707,
        "longitude": 151.2068,
        "accuracy": 1
      },
      {
        "postcode": 1230,
        "place_name": "Queen Victoria Building",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8787,
        "longitude": 151.2053,
        "accuracy": 1
      },
      {
        "postcode": 1231,
        "place_name": "Sydney South",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8787,
        "longitude": 151.2053,
        "accuracy": 1
      },
      {
        "postcode": 1232,
        "place_name": "Sydney South",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8787,
        "longitude": 151.2053,
        "accuracy": 1
      },
      {
        "postcode": 1233,
        "place_name": "Sydney South",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8787,
        "longitude": 151.2053,
        "accuracy": 1
      },
      {
        "postcode": 1234,
        "place_name": "Sydney South",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8787,
        "longitude": 151.2053,
        "accuracy": 1
      },
      {
        "postcode": 1235,
        "place_name": "Sydney South",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8787,
        "longitude": 151.2053,
        "accuracy": 1
      },
      {
        "postcode": 1236,
        "place_name": "Haymarket",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8787,
        "longitude": 151.2053,
        "accuracy": 4
      },
      {
        "postcode": 1237,
        "place_name": "Haymarket",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8787,
        "longitude": 151.2053,
        "accuracy": 4
      },
      {
        "postcode": 1238,
        "place_name": "Haymarket",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8787,
        "longitude": 151.2053,
        "accuracy": 4
      },
      {
        "postcode": 1239,
        "place_name": "Haymarket",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8787,
        "longitude": 151.2053,
        "accuracy": 4
      },
      {
        "postcode": 1240,
        "place_name": "Haymarket",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8787,
        "longitude": 151.2053,
        "accuracy": 4
      },
      {
        "postcode": 1291,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1292,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1293,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1294,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1295,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1296,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1297,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1298,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1299,
        "place_name": "Sydney",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8678,
        "longitude": 151.2073,
        "accuracy": 4
      },
      {
        "postcode": 1300,
        "place_name": "Darlinghurst",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8794,
        "longitude": 151.2193,
        "accuracy": 4
      },
      {
        "postcode": 1311,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1312,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1313,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1314,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1315,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1316,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1317,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1318,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1319,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1320,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1321,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1322,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1323,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1324,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1325,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1326,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1327,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1328,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1329,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1330,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8693,
        "longitude": 151.2248,
        "accuracy": 1
      },
      {
        "postcode": 1331,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8693,
        "longitude": 151.2248,
        "accuracy": 1
      },
      {
        "postcode": 1332,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8693,
        "longitude": 151.2248,
        "accuracy": 1
      },
      {
        "postcode": 1333,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8693,
        "longitude": 151.2248,
        "accuracy": 1
      },
      {
        "postcode": 1334,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8693,
        "longitude": 151.2248,
        "accuracy": 1
      },
      {
        "postcode": 1335,
        "place_name": "Potts Point",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8713,
        "longitude": 151.222,
        "accuracy": 4
      },
      {
        "postcode": 1340,
        "place_name": "Kings Cross",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.875,
        "longitude": 151.2223,
        "accuracy": 4
      },
      {
        "postcode": 1350,
        "place_name": "Woollahra",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8878,
        "longitude": 151.2368,
        "accuracy": 4
      },
      {
        "postcode": 1355,
        "place_name": "Bondi Junction",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8928,
        "longitude": 151.2472,
        "accuracy": 4
      },
      {
        "postcode": 1360,
        "place_name": "Double Bay",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8778,
        "longitude": 151.2435,
        "accuracy": 4
      },
      {
        "postcode": 1363,
        "place_name": "Moore Park",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.9014,
        "longitude": 151.2138,
        "accuracy": 4
      },
      {
        "postcode": 1391,
        "place_name": "Eastern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.8784,
        "longitude": 151.2313,
        "accuracy": 1
      },
      {
        "postcode": 1401,
        "place_name": "Broadway",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.9475,
        "longitude": 151.1522,
        "accuracy": 1
      },
      {
        "postcode": 1416,
        "place_name": "Southern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.9475,
        "longitude": 151.1522,
        "accuracy": 1
      },
      {
        "postcode": 1419,
        "place_name": "Southern Suburbs Mc",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.9475,
        "longitude": 151.1522,
        "accuracy": 1
      },
      {
        "postcode": 1420,
        "place_name": "Strawberry Hills",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.9475,
        "longitude": 151.1522,
        "accuracy": 1
      },
      {
        "postcode": 1421,
        "place_name": "Strawberry Hills",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.9475,
        "longitude": 151.1522,
        "accuracy": 1
      },
      {
        "postcode": 1422,
        "place_name": "Strawberry Hills",
        "state_name": "New South Wales",
        "state_code": "NSW",
        "latitude": -33.9475,
        "longitude": 151.1522,
        "accuracy": 1
      },{
    "postcode": 1423,
    "place_name": "Strawberry Hills",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.9475,
    "longitude": 151.1522,
    "accuracy": 1
  },
  {
    "postcode": 1424,
    "place_name": "Strawberry Hills",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.9475,
    "longitude": 151.1522,
    "accuracy": 1
  },
  {
    "postcode": 1425,
    "place_name": "Strawberry Hills",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.9475,
    "longitude": 151.1522,
    "accuracy": 1
  },
  {
    "postcode": 1426,
    "place_name": "Strawberry Hills",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.9475,
    "longitude": 151.1522,
    "accuracy": 1
  },
  {
    "postcode": 1427,
    "place_name": "Strawberry Hills",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.9475,
    "longitude": 151.1522,
    "accuracy": 1
  },
  {
    "postcode": 1428,
    "place_name": "Strawberry Hills",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.9475,
    "longitude": 151.1522,
    "accuracy": 1
  },
  {
    "postcode": 1429,
    "place_name": "Strawberry Hills",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.9475,
    "longitude": 151.1522,
    "accuracy": 1
  },
  {
    "postcode": 1430,
    "place_name": "Eveleigh",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.8956,
    "longitude": 151.1924,
    "accuracy": 4
  },
  {
    "postcode": 1435,
    "place_name": "Alexandria",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.9022,
    "longitude": 151.2004,
    "accuracy": 4
  },
  {
    "postcode": 1440,
    "place_name": "Waterloo",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.9167,
    "longitude": 151.2,
    "accuracy": 4
  },
  {
    "postcode": 1445,
    "place_name": "Rosebery",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.9167,
    "longitude": 151.2,
    "accuracy": 4
  },
  {
    "postcode": 1450,
    "place_name": "Camperdown",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.8897,
    "longitude": 151.1764,
    "accuracy": 4
  },
  {
    "postcode": 1455,
    "place_name": "Botany",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.946,
    "longitude": 151.1959,
    "accuracy": 4
  },
  {
    "postcode": 1460,
    "place_name": "Mascot",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.926,
    "longitude": 151.1935,
    "accuracy": 4
  },
  {
    "postcode": 1465,
    "place_name": "Kensington",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.9202,
    "longitude": 151.2224,
    "accuracy": 4
  },
  {
    "postcode": 1466,
    "place_name": "Unsw Sydney",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.925,
    "longitude": 151.2083,
    "accuracy": 1
  },
  {
    "postcode": 1470,
    "place_name": "Drummoyne",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.8524,
    "longitude": 151.1549,
    "accuracy": 4
  },
  {
    "postcode": 1475,
    "place_name": "Marrickville",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.9032,
    "longitude": 151.1518,
    "accuracy": 4
  },
  {
    "postcode": 1480,
    "place_name": "Kingsgrove",
    "state_name": "New South Wales",
    "state_code": "NSW",
    "latitude": -33.9393,
    "longitude": 151.0993,
    "accuracy": 4
  }
];

async function seed() {
    await mongoose.connect("mongodb://localhost/second-project", {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    await Address.deleteMany({});

    await Address.insertMany(data);

    mongoose.disconnect();

    console.info("Populated!");
}

seed();