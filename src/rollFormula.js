let resultList=[]

const rollDie = (die)=>{
    console.log("rolling d"+die )
    return Math.floor(Math.random() * die+1)
}

const rollFormula=['d20','d10','d4','d20']

// let test = parseInt(rollFormula[0].slice(1,rollFormula[0].length))

const dieParse=(rollForm)=>{
    let getDie= parseInt(rollForm.slice(1,rollForm.length))
    return rollDie(getDie)
}

for(let i=0;i<rollFormula.length;i++){
   resultList.push(dieParse(rollFormula[i]))
}

console.log(resultList)
