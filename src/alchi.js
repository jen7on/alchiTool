const wirkungen = require('./constants/effects')
var allEffects = Object.values(wirkungen)

const reags = [
    {
        name: "Alraunenwurzel",
        preis: 5,
        wirkungen: [wirkungen.staerke, wirkungen.intelligenz, wirkungen.giftres, wirkungen.blindheit]
    },{
        name: "Apfel",
        preis: 5,
        wirkungen: [wirkungen.staerke, wirkungen.heilung, wirkungen.last, wirkungen.haarwuchs]
    },{
        name: "Bims",
        preis: 50,
        wirkungen: [wirkungen.feder, wirkungen.nachtsicht, wirkungen.feuerres, wirkungen.energieres]
    },{
        name: "Blut",
        preis: 5,
        wirkungen: [wirkungen.staerke, wirkungen.tollpatsch, wirkungen.intelligenz]
    },{
        name: "Blutmoos",
        preis: 5,
        wirkungen: [wirkungen.geschick, wirkungen.schwachsinn, wirkungen.schminke, wirkungen.krankres]
    },{
        name: "Champignon",
        preis: 5,
        wirkungen: [wirkungen.intelligenz, wirkungen.hunger, wirkungen.saettigung, wirkungen.haarwuchs]
    },{
        name: "Coeliumerz",
        preis: 5,
        wirkungen: [wirkungen.energieres, wirkungen.energieschaden, wirkungen.nachtsicht, wirkungen.enthuellung]
    },{
        name: "Daemonenknochen",
        preis: 5,
        wirkungen: [wirkungen.antimagieres, wirkungen.physres, wirkungen.mana, wirkungen.antiphysres]
    },{
        name: "Drachenblut",
        preis: 5,
        wirkungen: [wirkungen.mana, wirkungen.magieres, wirkungen.schlaf, wirkungen.zauberloesen]
    },{
        name: "Eisen",
        preis: 5,
        wirkungen: [wirkungen.schutz, wirkungen.staerke, wirkungen.schwachsinn, wirkungen.tollpatsch]
    },{
        name: "Efeu",
        preis: 5,
        wirkungen: [wirkungen.giftschaden, wirkungen.schlaf, wirkungen.heilung, wirkungen.unsichtbarkeit]
    },{
        name: "Fingerhut",
        preis: 5,
        wirkungen: [wirkungen.krankleicht, wirkungen.antienergieres, wirkungen.antipara]
    },{
        name: "Fledermausflügel",
        preis: 5,
        wirkungen: [wirkungen.feder, wirkungen.antimana, wirkungen.blindheit, wirkungen.krankres]
    },{
        name: "Fliegenpilz",
        preis: 5,
        wirkungen: [wirkungen.giftschaden, wirkungen.antimana, wirkungen.antilife, wirkungen.mana]
    },{
        name: "Ginseng",
        preis: 5,
        wirkungen: [wirkungen.heilung, wirkungen.erfrischung, wirkungen.antigift, wirkungen.krankleicht]
    },{
        name: "Grabmoos",
        preis: 500,
        wirkungen: [wirkungen.schminke , wirkungen.heilung, wirkungen.schutz, wirkungen.halluzination]
    },{
        name: "Henkerskappe",
        preis: 5,
        wirkungen: [wirkungen.paralyse, wirkungen.mana, wirkungen.zauberloesen, wirkungen.blindheit]
    },{
        name: "Kaktus",
        preis: 5,
        wirkungen: [wirkungen.feder, wirkungen.haarausfall, wirkungen.saettigung, wirkungen.krankres]
    },{
        name: "Knoblauch",
        preis: 5,
        wirkungen: [wirkungen.antigift, wirkungen.krankres, wirkungen.krankschwer, wirkungen.giftres]
    },{
        name: "Knochen",
        preis: 5,
        wirkungen: [wirkungen.schwaeche, wirkungen.magieres, wirkungen.kaltschaden]
    },{
        name: "Kroetenlaich",
        preis: 5,
        wirkungen: [wirkungen.infizieren, wirkungen.antipara, wirkungen.tollpatsch, wirkungen.saeureschaden]
    },{
        name: "Kupfer",
        preis: 5,
        wirkungen: [wirkungen.schutz, wirkungen.geschick, wirkungen.schwachsinn, wirkungen.schwaeche]
    },{
        name: "Lehm",
        preis: 5,
        wirkungen: [wirkungen.saettigung, wirkungen.saeureschaden, wirkungen.physres, wirkungen.blindheit]
    },{
        name: "Limone",
        preis: 5,
        wirkungen: [wirkungen.krankleicht, wirkungen.antigift, wirkungen.antifeuerres, wirkungen.saeureschaden]
    },{
        name: "Molchauge",
        preis: 5,
        wirkungen: [wirkungen.antiphysres, wirkungen.haarausfall, wirkungen.schwaeche, wirkungen.halluzination]
    },{
        name: "Nachtschatten",
        preis: 5,
        wirkungen: [wirkungen.giftschaden, wirkungen.antilife, wirkungen.nachtsicht, wirkungen.krankschwer]
    },{
        name: "Obsidian",
        preis: 5,
        wirkungen: [wirkungen.feuerschaden, wirkungen.giftschaden, wirkungen.unsichtbarkeit, wirkungen.krankleicht]
    },{
        name: "Pfirsich",
        preis: 5,
        wirkungen: [wirkungen.erfrischung, wirkungen.krankleicht, wirkungen.antipara, wirkungen.geschick]
    },{
        name: "Pyrianerz",
        preis: 5,
        wirkungen: [wirkungen.feuerres, wirkungen.feuerschaden, wirkungen.last, wirkungen.enthuellung]
    },{
        name: "Rattenfleisch",
        preis: 5,
        wirkungen: [wirkungen.infizieren, wirkungen.schwachsinn, wirkungen.schlaf, wirkungen.antigiftres]
    },{
        name: "Diamanterz",
        preis: 8000,
        wirkungen: [wirkungen.antilife, wirkungen.unsichtbarkeit, wirkungen.physres, wirkungen.schutz]
    },{
        name: "Roher Vogel",
        preis: 5,
        wirkungen: [wirkungen.saettigung, wirkungen.energieres, wirkungen.infizieren, wirkungen.haarwuchs]
    },{
        name: "Schlangenschuppe",
        preis: 5,
        wirkungen: [wirkungen.infizieren, wirkungen.hunger, wirkungen.nachtsicht, wirkungen.haarausfall]
    },{
        name: "Schwarze Perle",
        preis: 5,
        wirkungen: [wirkungen.erfrischung, wirkungen.staerke, wirkungen.blindheit, wirkungen.zauberloesen]
    },{
        name: "Schwefel",
        preis: 5,
        wirkungen: [wirkungen.schlaf, wirkungen.intelligenz, wirkungen.antimana, wirkungen.antilife]
    },{
        name: "Schwefelasche",
        preis: 5,
        wirkungen: [wirkungen.feuerschaden, wirkungen.antifeuerres, wirkungen.giftschaden, wirkungen.geschick]
    },{
        name: "Seerose",
        preis: 5,
        wirkungen: [wirkungen.schlaf, wirkungen.schwachsinn, wirkungen.krankschwer, wirkungen.haarausfall]
    },{
        name: "Spinnenseide",
        preis: 5,
        wirkungen: [wirkungen.nachtsicht, wirkungen.paralyse, wirkungen.giftres, wirkungen.feder]
    },{
        name: "Torf",
        preis: 5,
        wirkungen: [wirkungen.schwaeche, wirkungen.zauberloesen, wirkungen.antigiftres, wirkungen.last]
    },{
        name: "Totes Holz",
        preis: 5,
        wirkungen: [wirkungen.krankleicht, wirkungen.staerke, wirkungen.halluzination, wirkungen.kaltschaden]
    },{
        name: "Trauben (rot)",
        preis: 5,
        wirkungen: [wirkungen.staerke, wirkungen.heilung, wirkungen.hunger, wirkungen.feder]
    },{
        name: "Trauben (grün)",
        preis: 5,
        wirkungen: [wirkungen.staerke, wirkungen.heilung, wirkungen.paralyse, wirkungen.haarwuchs]
    },{
        name: "Vulkanasche",
        preis: 5,
        wirkungen: [wirkungen.saeureschaden, wirkungen.schwaeche, wirkungen.antimagieres, wirkungen.feuerres]
    },{
        name: "Weicheisen",
        preis: 5,
        wirkungen: [wirkungen.last, wirkungen.saettigung, wirkungen.antienergieres, wirkungen.feuerres]
    },{
        name: "Wyrmherz",
        preis: 5000,
        wirkungen: [wirkungen.unsichtbarkeit, wirkungen.heilung, wirkungen.schutz, wirkungen.magieres]
    },{
        name: "Zitrone",
        preis: 5,
        wirkungen: [wirkungen.krankleicht, wirkungen.antigift, wirkungen.antifeuerres, wirkungen.saeureschaden]
    },{
        name: "Zwiebeln",
        preis: 15,
        wirkungen: [wirkungen.schwaeche, wirkungen.antipara, wirkungen.energieschaden, wirkungen.krankres]
    }
]

//Listet die Reagenzien mit einer bestimmten Wirkung auf
function reagentWithEffect(effect) {
    var obj =reags.filter(function (reag) {
        return reag.wirkungen.includes(effect)
    
      }).sort((a, b) => {
          if(a.preis === b.preis) {
              return a
          }
          else  {
              return a.preis - b.preis
          }
      })
      var returnObj = {}
      for(var x=0;x<obj.length;x++) {
        returnObj[x] = {
            name: obj[x].name,
            preis: obj[x].preis,
            wirkungen: obj[x].wirkungen
        };
      }
      return returnObj      
}
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

//returns false if duplicate found
function checkForDuplicates(elements, value) {
    var length = Object.keys(elements).length;
    for(var i=0;i<length;i++) {
        if(elements[i].name === value)  {
            return false;
        }
    }
    return true;
}

//Gibt eine Liste aller Reagenzien aus die mind. 1 der Wirkungen beinhalten
function getReags(effects) {
    var obj = {}
    effects.forEach(function (wirkung) {
        tempObj = reagentWithEffect(wirkung)
        for(var x=0;x<Object.keys(tempObj).length;x++) {
            if(checkForDuplicates(obj, tempObj[x].name)) {
                var key = Object.keys(obj).length
                obj[key] = {
                    name: tempObj[x].name,
                    preis: tempObj[x].preis,
                    wirkungen: tempObj[x].wirkungen
                };
            }
        }
    })
    return combinations(obj) 
}

//Gibt ein Array mit allen Kombinationen möglicher Reagenzien aus
function combinations(possibleReagents) {
var returnObj = new Array()
var count =0;
for(var w=0;w<Object.keys(possibleReagents).length;w++)
    for(var x=w;x<Object.keys(possibleReagents).length;x++) {
        for(var y=x;y<Object.keys(possibleReagents).length;y++) {
            for(var z=y;z<Object.keys(possibleReagents).length;z++) {
                var distinctReagents = new Set([w,x,y,z])
                distinctReagents = Array.from(distinctReagents)
                if(distinctReagents.length > 1) {
                    
                    var tempArr=new Array()
                    distinctReagents.map(function (reagent) {
                        tempArr.push(possibleReagents[reagent])
                        })
                    }
                    returnObj[count] = tempArr
                    count++
                }
            }
        }
    var returnObj = returnObj.filter(onlyUnique)
    var newArr = []
    returnObj.forEach(function (obj) {
        if(obj !== undefined) {
            newArr.push(obj)
        }
    })
    return newArr
}

function checkRequirements(requiredEffects, currentEffects, reqEffectsCount) {
    var returnCount = 0
    requiredEffects.forEach(function (effect) {
        if(currentEffects[effect] >= 2) {

            returnCount++
        }
        else {
            returnCount = false
        }
    })
    if(returnCount==reqEffectsCount) {
        return true
    }
    else {
        return false
    }
}
function checkForOtherEffects(requiredEffects, currentEffects, allEffects) {
    var returnVal = "pure"
    var keys = Object.keys(currentEffects)
    keys.forEach(function (key) {
        if(currentEffects[key] >= 2 ) {
            if(!requiredEffects.includes(key))
            {
                returnVal = "other"
                if(checkForBadEffect(allEffects, key)) {
                    returnVal = "bad"
                }
            }
        }
    })
    return returnVal
}

function checkForBadEffect(allEffects, current) {
    var returnBool = false
    var keys = Object.keys(allEffects)
    keys.forEach(function (key){
        if(allEffects[key].name == current && allEffects[key].type === 0) {
            returnBool = true
        }
    })
    return returnBool
}

function getCombinationEffects(combination) {
    var returnArr = []
    var arr = Array.from(combination)
    var currentEffectList = {}
    for(var y=0;y<arr.length;y++) {
        for(var z=0;z<arr[y].wirkungen.length;z++) {
            if(currentEffectList[(arr[y].wirkungen[z].name)] === undefined) {
                currentEffectList[(arr[y].wirkungen[z].name)] = 0;  
            }
            currentEffectList[(arr[y].wirkungen[z].name)]++            
        }
    }
    var keys = Object.keys(currentEffectList)
    keys.forEach(function (key) {
        if(currentEffectList[key] >= 2 ) {
            returnArr.push(key)
        }
    })
    return returnArr
}

function Potion(ingredients, effects, type, price) {
    this.ingredients=ingredients
    this.effects=effects
    this.type=type
    this.price=price
}

function removeDuplicates(potions) {
    potions.forEach(function (a, index, arr) {
        potions.forEach(function (b){
            if(a.ingredients === b.ingredients) {
                potions.splice(index, 1)
            }
        })
    })
    return potions
}

function validCombinations(combinations, wantedEffects, allEffects) {
    var requiredEffects = []
    wantedEffects.map(function (effect) {
        requiredEffects.push(effect.name)
    }) 
    var pureCombinations = []
    var otherCombinations = []
    var badCombinations = []
    var allCombinations = []
    combinations.map(function (combination, index) {
        var arr = Array.from(combination)
        var currentEffectList = {}

        for(var y=0;y<arr.length;y++) {
            for(var z=0;z<arr[y].wirkungen.length;z++) {
                if(currentEffectList[(arr[y].wirkungen[z].name)] === undefined) {
                    currentEffectList[(arr[y].wirkungen[z].name)] = 0;  
                }
                currentEffectList[(arr[y].wirkungen[z].name)]++            
            }
        }
        var anotherArr = []
        if(requiredEffects.every(elem => Object.keys(currentEffectList).indexOf(elem) > -1) && checkRequirements(requiredEffects, currentEffectList, requiredEffects.length)) {
        var combinationType = checkForOtherEffects(requiredEffects, currentEffectList, allEffects) 
            //console.log(combinationType)              
            if(combinationType == "bad") {
                badCombinations.push(combination)
            }
            if(combinationType == "other") {
                otherCombinations.push(combination)
            }
            if(combinationType == "pure") {
                pureCombinations.push(combination)
            }
        }
    })

    pureCombinations.map(function (combination, index) {
        var arr = Array.from(combination)
        nameArr = []
        effArr = getCombinationEffects(combination)
        arr.map(function (value) {
            nameArr.push(value.name)
        })
        var tempPotion = new Potion(nameArr.join(', '), effArr.join(', '),"text-success",0)
        allCombinations.push(tempPotion)
    })

    otherCombinations.map(function (combination, index) {
        var arr = Array.from(combination)
        nameArr = []
        effArr = getCombinationEffects(combination)
        arr.map(function (value) {
            nameArr.push(value.name)
        })
        var tempPotion = new Potion(nameArr.join(', '), effArr.join(', '),"text-warning",0)
        allCombinations.push(tempPotion)
    })

    badCombinations.map(function (combination, index) {
        var arr = Array.from(combination)
        nameArr = []
        effArr = getCombinationEffects(combination)
        arr.map(function (value) {
            nameArr.push(value.name)
        })
        var tempPotion = new Potion(nameArr.join(', '), effArr.join(', '),"text-danger",0)
        allCombinations.push(tempPotion)
    })
    allCombinations = removeDuplicates(allCombinations)
    return allCombinations
}

function buildArguments(formData) {
    var returnArr=[]
    formData.forEach(function (val) {
        if(val!="0") {
            returnArr.push(wirkungen[val])
        }
    })
    return returnArr
}

function start (lookForEffects) {
    return validCombinations(getReags(lookForEffects), lookForEffects, allEffects)
}

module.exports = {
    start,
    Potion,
    buildArguments
}