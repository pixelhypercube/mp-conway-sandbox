const brushes = {
    "Defaults":[
        {
            name:"Default",
            board:[[1]],
            colorLight:"#ccffcc",
            colorDark:"#013c01",
            borderColorLight:"#00b800",
            borderColorDark:"#95ff95",
        },
        {
            name:"2x2 Block",
            board:[[1,1],[1,1]],
            colorLight:"#ccffcc",
            colorDark:"#013c01",
            borderColorLight:"#00b800",
            borderColorDark:"#95ff95",
        },
        {
            name:"3x3 Block",
            board:[[1,1,1],[1,1,1],[1,1,1]],
            colorLight:"#ccffcc",
            colorDark:"#013c01",
            borderColorLight:"#00b800",
            borderColorDark:"#95ff95",
        },
        {
            name:"Horizontal Line",
            board:[[1,1,1,1,1]],
            colorLight:"#ccffcc",
            colorDark:"#013c01",
            borderColorLight:"#00b800",
            borderColorDark:"#95ff95",
        },
        {
            name:"Vertical Line",
            board:[[1],[1],[1],[1],[1]],
            colorLight:"#ccffcc",
            colorDark:"#013c01",
            borderColorLight:"#00b800",
            borderColorDark:"#95ff95",
        },
        {
            name:"Cross",
            board:[[0,1,0],[1,1,1],[0,1,0]],
            colorLight:"#ccffcc",
            colorDark:"#013c01",
            borderColorLight:"#00b800",
            borderColorDark:"#95ff95",
        }
    ],
    "Still Lifes":[
        {
            name:"2x2 Block",
            board:[
                [1,1],
                [1,1]
            ],
            colorLight:"#ffffcc",
            colorDark:"#333300",
            borderColorLight:"#b8b800",
            borderColorDark:"#ffff47",
        },
        {
            name:"Bee Hive",
            board:[
                [0,1,1,0],
                [1,0,0,1],
                [0,1,1,0]
            ],
            colorLight:"#ffffcc",
            colorDark:"#333300",
            borderColorLight:"#b8b800",
            borderColorDark:"#ffff47",
        },
        {
            name:"Loaf",
            board:[
                [0,1,1,0],
                [1,0,0,1],
                [0,1,0,1],
                [0,0,1,0]
            ],
            colorLight:"#ffffcc",
            colorDark:"#333300",
            borderColorLight:"#b8b800",
            borderColorDark:"#ffff47",
        },
        {
            name:"Boat",
            board:[
                [1,1,0],
                [1,0,1],
                [0,1,0]
            ],
            colorLight:"#ffffcc",
            colorDark:"#333300",
            borderColorLight:"#b8b800",
            borderColorDark:"#ffff47",
        },
        {
            name:"Tub",
            board:[
                [0,1,0],
                [1,0,1],
                [0,1,0]
            ],
            colorLight:"#ffffcc",
            colorDark:"#333300",
            borderColorLight:"#b8b800",
            borderColorDark:"#ffff47",
        },
    ],
    "Oscillators":[
        {
            name:"Blinker",
            board:[
                [0,1,0],
                [0,1,0],
                [0,1,0]
            ],
            colorLight:"#ffdecc",
            colorDark:"#331200",
            borderColorLight:"#b84100",
            borderColorDark:"#ff8847",
        },
        {
            name:"Toad",
            board:[
                [0,0,1,1,1,0],
                [0,1,1,1,0,0]
            ],
            colorLight:"#ffdecc",
            colorDark:"#331200",
            borderColorLight:"#b84100",
            borderColorDark:"#ff8847",
        },
        {
            name:"Beacon",
            board:[
                [1,1,0,0],
                [1,0,0,0],
                [0,0,0,1],
                [0,0,1,1]
            ],
            colorLight:"#ffdecc",
            colorDark:"#331200",
            borderColorLight:"#b84100",
            borderColorDark:"#ff8847",
        },
        {
            name:"Pinwheel",
            board:[
                [0,0,0,0,0,0,1,1,0,0,0,0],
                [0,0,0,0,0,0,1,1,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,1,1,1,0,0,0,0],
                [1,1,0,1,0,0,0,0,1,0,0,0],
                [1,1,0,1,1,0,0,0,1,0,0,0],
                [0,0,0,1,0,0,1,0,1,0,1,1],
                [0,0,0,1,0,1,0,0,1,0,1,1],
                [0,0,0,0,1,1,1,1,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,1,0,0,0,0,0,0],
                [0,0,0,0,1,1,0,0,0,0,0,0]
            ]
            ,
            colorLight:"#ffdecc",
            colorDark:"#331200",
            borderColorLight:"#b84100",
            borderColorDark:"#ff8847",
        },
        {
            name:"Octagon 2",
            board:[
                [0,0,0,1,1,0,0,0],
                [0,0,1,0,0,1,0,0],
                [0,1,0,0,0,0,1,0],
                [1,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,1],
                [0,1,0,0,0,0,1,0],
                [0,0,1,0,0,1,0,0],
                [0,0,0,1,1,0,0,0]
            ]
            ,
            colorLight:"#ffdecc",
            colorDark:"#331200",
            borderColorLight:"#b84100",
            borderColorDark:"#ff8847",
        },
        {
            name:"Dinner Table",
            board:[[0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,1,1,1,0,0,0,0,0,0,0,1,1],
            [0,0,0,0,1,0,0,0,0,0,0,1,0],
            [0,0,0,1,1,0,0,0,0,1,0,1,0],
            [0,0,0,0,0,0,0,0,0,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,0,0,0,0,0],
            [0,0,1,1,0,0,0,0,0,0,0,0,0],
            [0,1,0,1,0,0,0,0,1,1,0,0,0],
            [0,1,0,0,0,0,0,0,1,0,0,0,0],
            [1,1,0,0,0,0,0,0,0,1,1,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0]]
            ,
            colorLight:"#ffdecc",
            colorDark:"#331200",
            borderColorLight:"#b84100",
            borderColorDark:"#ff8847",
        },
        {
            name:"Pulsar",
            board:[
                [0,0,1,1,1,0,0,0,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,0,0,0,0,1,0,1,0,0,0,0,1],
                [1,0,0,0,0,1,0,1,0,0,0,0,1],
                [1,0,0,0,0,1,0,1,0,0,0,0,1],
                [0,0,1,1,1,0,0,0,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,1,1,0,0,0,1,1,1,0,0],
                [1,0,0,0,0,1,0,1,0,0,0,0,1],
                [1,0,0,0,0,1,0,1,0,0,0,0,1],
                [1,0,0,0,0,1,0,1,0,0,0,0,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,1,1,0,0,0,1,1,1,0,0],
            ],
            colorLight:"#ffdecc",
            colorDark:"#331200",
            borderColorLight:"#b84100",
            borderColorDark:"#ff8847",
        },
        {
            name:"Penta Decathlon",
            board:[
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,1,1,1,0,0,0],
                [0,0,1,0,0,0,1,0,0],
                [0,0,1,0,0,0,1,0,0],
                [0,0,0,1,1,1,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,1,1,1,0,0,0],
                [0,0,1,0,0,0,1,0,0],
                [0,0,1,0,0,0,1,0,0],
                [0,0,0,1,1,1,0,0,0],
                [0,0,0,0,0,0,0,0,0],
            ],
            colorLight:"#ffdecc",
            colorDark:"#331200",
            borderColorLight:"#b84100",
            borderColorDark:"#ff8847",
        },
        {
            name:"101",
            board:[
                [0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0],
                [0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
                [1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1],
                [1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1],
                [0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0],
                [0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0],
                [1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1],
                [1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
                [0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0],
                [0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0],
            ],
            colorLight:"#ffdecc",
            colorDark:"#331200",
            borderColorLight:"#b84100",
            borderColorDark:"#ff8847",
        },
    ],
    "Spaceships":[
        {
            name:"Glider",
            board:[
                [0,1,0],
                [0,0,1],
                [1,1,1]
            ],
            colorLight:"#ccdeff",
            colorDark:"#001233",
            borderColorLight:"#0041b8",
            borderColorDark:"#4788ff",
        },
        {
            name:"Light-weight Spaceship (LWSS)",
            board:[
                [0,1,1,1,1],
                [1,0,0,0,1],
                [0,0,0,0,1],
                [1,0,0,1,0]
            ],
            colorLight:"#ccdeff",
            colorDark:"#001233",
            borderColorLight:"#0041b8",
            borderColorDark:"#4788ff",
        },
        {
            name:"Middle-weight Spaceship (MWSS)",
            board:[
                [0,1,1,1,1,1],
                [1,0,0,0,0,1],
                [0,0,0,0,0,1],
                [1,0,0,0,1,0]
            ],
            colorLight:"#ccdeff",
            colorDark:"#001233",
            borderColorLight:"#0041b8",
            borderColorDark:"#4788ff",
        },
        {
            name:"Heavy-weight Spaceship (HWSS)",
            board:[
                [0,1,1,1,1,1,1],
                [1,0,0,0,0,0,1],
                [0,0,0,0,0,0,1],
                [1,0,0,0,0,1,0],
                [0,0,1,1,0,0,0]
            ],
            colorLight:"#ccdeff",
            colorDark:"#001233",
            borderColorLight:"#0041b8",
            borderColorDark:"#4788ff",
        },
    ],
    "Perpetual Patterns":[
        {
            name:"Gosper Glider Gun",
            board:[
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
                [0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            colorLight:"#ddccff",
            colorDark:"#110033",
            borderColorLight:"#3d00b8",
            borderColorDark:"#8547ff",
        },
        {
            name:"Block-Laying Switch Engine",
            board:[
                [0,0,0,0,0,0,1,0],
                [0,0,0,0,1,0,1,1],
                [0,0,0,0,1,0,1,0],
                [0,0,0,0,1,0,0,0],
                [0,0,1,0,0,0,0,0],
                [1,0,1,0,0,0,0,0]
            ],
            colorLight:"#ddccff",
            colorDark:"#110033",
            borderColorLight:"#3d00b8",
            borderColorDark:"#8547ff",
        },
        {
            name:"Simkin Glider Gun",
            board:[
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            colorLight:"#ddccff",
            colorDark:"#110033",
            borderColorLight:"#3d00b8",
            borderColorDark:"#8547ff",
        },
    ],
    "Heptominoes":[
        {
            name: "Pi Heptomino",
            board: [
                [1,1,1],
                [1,0,1],
                [1,0,1],
            ],
            colorLight: "#c0ffee",
            colorDark: "#003344",
            borderColorLight: "#003344",
            borderColorDark: "#c0ffee",
        },
        {
            name: "E Heptomino",
            board: [
                [0,1,1,1],
                [1,1,0,0],
                [0,1,1,0]
            ],
            colorLight: "#c0ffee",
            colorDark: "#003344",
            borderColorLight: "#003344",
            borderColorDark: "#c0ffee",
        },
        {
            name: "B Heptomino",
            board: [
                [1,0,1,1],
                [1,1,1,0],
                [0,1,0,0]
            ],
            colorLight: "#c0ffee",
            colorDark: "#003344",
            borderColorLight: "#003344",
            borderColorDark: "#c0ffee",
        },
        {
            name: "R Heptomino",
            board: [
                [0,1,1],
                [1,1,0],
                [0,1,1]
            ],
            colorLight: "#c0ffee",
            colorDark: "#003344",
            borderColorLight: "#003344",
            borderColorDark: "#c0ffee",
        },
        {
            name: "Bullet Heptomino",
            board: [
                [0,1,0],
                [1,1,1],
                [1,1,1]
            ],
            colorLight: "#c0ffee",
            colorDark: "#003344",
            borderColorLight: "#003344",
            borderColorDark: "#c0ffee",
        },
        {
            name: "C Heptomino",
            board: [
                [0,1,1,1],
                [1,1,1,0],
                [0,1,0,0]
            ],
            colorLight: "#c0ffee",
            colorDark: "#003344",
            borderColorLight: "#003344",
            borderColorDark: "#c0ffee",
        },
        {
            name: "Crinkly Heptomino",
            board: [
                [1,1,1,1,0],
                [1,0,0,1,1]
            ],
            colorLight: "#c0ffee",
            colorDark: "#003344",
            borderColorLight: "#003344",
            borderColorDark: "#c0ffee",
        },
        {
            name: "F Heptomino",
            board: [
                [1,1,0,0],
                [0,1,0,0],
                [0,1,0,0],
                [0,1,1,1]
            ],
            colorLight: "#c0ffee",
            colorDark: "#003344",
            borderColorLight: "#003344",
            borderColorDark: "#c0ffee",
        },
        {
            name: "H Heptomino",
            board: [
                [1,1,0,0],
                [0,1,0,0],
                [0,1,1,1],
                [0,0,1,0]
            ],
            colorLight: "#c0ffee",
            colorDark: "#003344",
            borderColorLight: "#003344",
            borderColorDark: "#c0ffee",
        },
        {
            name: "I Heptomino",
            board: [
                [1,1,0,0],
                [0,1,0,0],
                [0,1,1,0],
                [0,0,1,1]
            ],
            colorLight: "#c0ffee",
            colorDark: "#003344",
            borderColorLight: "#003344",
            borderColorDark: "#c0ffee",
        },
        {
            name: "Herschel",
            board: [
                [1,0,0],
                [1,1,1],
                [1,0,1],
                [0,0,1]
            ],
            colorLight: "#c0ffee",
            colorDark: "#003344",
            borderColorLight: "#003344",
            borderColorDark: "#c0ffee",
        },
    ],
    "Others":[
        {
            name:"Handshake",
            board:[
                [0,0,1,1,0],
                [0,1,0,1,1],
                [1,1,0,1,0],
                [0,1,1,0,0]
            ],
            colorLight:"#feccff",
            colorDark:"#5a005c",
            borderColorLight:"#5a005c",
            borderColorDark:"#feccff",
        },
        {
            name:"295P5H1V1",
            board:[
                [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0]
            ],
            colorLight:"#feccff",
            colorDark:"#5a005c",
            borderColorLight:"#5a005c",
            borderColorDark:"#feccff",
        },
        {
            name:"X Cross (39x39)",
            board:[
                [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
                [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
                [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
                [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            ],
            colorLight:"#feccff",
            colorDark:"#5a005c",
            borderColorLight:"#5a005c",
            borderColorDark:"#feccff",
        },
    ]
};

export default brushes;