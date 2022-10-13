let resultList=[]

const rollObj={
    'd2':[0,2],
    'd3':[3,3],
    'd4':[0,4],
    'd6':[0,6],
    'd10':[0,10],
    'd12':[0,12],
    'd20':[3,20], //times rolled, die rolled
    'd100':[0,100]
}

const rollDie = (die)=>{
    // console.log("rolling d"+die )
    return Math.floor(Math.random() * die+1)
}

const rollFormula=['d20','d10','d4','d20']

// const

// let test = parseInt(rollFormula[0].slice(1,rollFormula[0].length))

const dieParse=(rollForm)=>{
    let getDie= parseInt(rollForm.slice(1,rollForm.length))
    return rollDie(getDie)
}

for(let i=0;i<rollFormula.length;i++){
   resultList.push(dieParse(rollFormula[i]))
}

let finList=[]
// console.log(resultList)
for(let i in rollObj){
    // console.log(rollObj[i])
    let thisDie = rollObj[i][0]
    // console.log(thisDie)
    if(thisDie > 0){
        console.log(rollObj[i][1])
        for (let j = 0; j<rollObj['d20'][0];j++){
            finList.push(rollDie(rollObj['d20'][1]))
        }
    }
}


let rollSum = finList.reduce((partialSum, a) => partialSum + a, 0)

console.log(finList)
console.log(`final sum = ${rollSum}`)
