var allplayers = ["A","B","C","D","E","F","G"];
var doublons = 0;
var numberRoutes = 0;
var players = {
    "A":{
        "name":"soon",
        "scoreTemp": 0,
        "scoreTotal":0,
        "pourcentage": 0,
    },
    "B":{
        "name":"benbest",
        "scoreTemp": 0,
        "scoreTotal":0,
        "pourcentage": 0,

    },
    "C":{
        "name":"nicoh",
        "scoreTemp": 0,
        "scoreTotal":0,
        "pourcentage": 0,

    },
    "D":{
        "name":"unkoe",
        "scoreTemp": 0,
        "scoreTotal":0,
        "pourcentage": 0,

    },    
    "E":{
        "name":"hyp",
        "scoreTemp": 0,
        "scoreTotal":0,
        "pourcentage": 0,

    },
    "F":{
        "name":"Poko",
        "scoreTemp": 0,
        "scoreTotal":0,
        "pourcentage": 0,

    },
    "G":{
        "name":"aKm",
        "scoreTemp": 0,
        "scoreTotal":0,
        "pourcentage": 0,

    }
    };

var responses = [{
    1:["G","B"],
    2:["A","F"],
    3:["C"],
    4:["D","E"]
}, {
    5:["A","C","G"],
    6:["B","F"],
    7:["D","E"]
}, {
    8:["F","A"],
    9:["C","G"],
    10:["B","D","G"]
}, {
    11:["B","E","F"],
    12:["A","D"],
    13:["G","C"]
},
{
    14:["C"],
    15:["F","A"],
    16:["D","G","E"],
    17:["B"]
},
{
    18:["A","C"],
    19:["E","F"],
    20:["G"],
    21:["B","D"]

},
{
    22:["F","C"],
    23:["D","G"],
    24:["A"],
    25:["B","E"]
},{
    26:["A","C"],
    27:["G","D"],
    28: ["B"],
    29:["E","F"]
},
{
    30:["F"],
    31:["A","B","C","E"],
    32:["D","G"]
}

];

var i=0;

for(rone in responses[0]){
    for(rtwo in responses[1]){
        for(rthree in responses[2]){
            for(rfourth in responses[3]){
                for(rfive in responses[4]){
                    for(rsix in responses[5]){
                        for(rseven in responses[6]){
                            for(rheigh in responses[7]){
                                for(rnine in responses[8]){

                                    responses[0][rone].forEach(element => {
                                        players[element].scoreTemp ++;
                                    });
                                    responses[1][rtwo].forEach(element => {
                                        players[element].scoreTemp ++;
                                    });
                                    responses[2][rthree].forEach(element => {
                                        players[element].scoreTemp ++;
                                    });
                                    responses[3][rfourth].forEach(element => {
                                        players[element].scoreTemp ++;
                                    });
                                    responses[4][rfive].forEach(element => {
                                        players[element].scoreTemp ++;
                                    });
                                    responses[5][rsix].forEach(element => {
                                        players[element].scoreTemp ++;
                                    });
                                    responses[6][rseven].forEach(element => {
                                        players[element].scoreTemp ++;
                                        });
                                    responses[7][rheigh].forEach(element => {
                                        players[element].scoreTemp ++;
                                        });
                                    responses[8][rnine].forEach(element => {
                                        players[element].scoreTemp ++;
                                        });                                       
                                    //check doublons
                                    checkDoublons();
                                    addScorePlayers();
                                    resetPlayersTemp();
                                    numberRoutes++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function resetPlayersTemp(){
    allplayers.forEach(element => {
       players[element].scoreTemp = 0;
    });
}

function addScorePlayers(){
    var bestPlayers = {}
    players["A"].letter = "A";
    bestPlayers = players["A"];

    allplayers.forEach(element => {
        if(players[element].scoreTemp>bestPlayers.scoreTemp){
            players[element].letter = element;
            bestPlayers = players[element];
        }
    });
    players[bestPlayers.letter].scoreTotal++;
}

function checkDoublons(){
    let arrayPlayers = [];

    allplayers.forEach(element => {
       arrayPlayers.push(players[element]); 
    });
    arrayPlayers.sort(compareValues('scoreTemp', 'desc'));
    if(arrayPlayers[0].scoreTemp ===arrayPlayers[1].scoreTemp){
        doublons++;
    }
}

function toHundredth(nombre){
    return Math.round(100*nombre)/100;
}

function compareValues(key, order='asc') {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || 
         !b.hasOwnProperty(key)) {
          return 0; 
      }
      
      const varA = (typeof a[key] === 'string') ? 
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? 
        b[key].toUpperCase() : b[key];
        
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? 
        (comparison * -1) : comparison
      );
    };
  }

allplayers.forEach(element => {
    players[element].pourcentage = toHundredth((players[element].scoreTotal/numberRoutes*100))+'%';
});
console.log(doublons);
console.log(numberRoutes);

console.log(players);