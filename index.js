// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity='go to the office') => (`This Monday, I will ${activity}.`)

function wrapAdjective(flair="*") {
    return function(something='special') {
        return `You are ${flair}${something}${flair}!`
    }
}

const Calculator = {
    add: (num1, num2) => (num1+num2),
    subtract: (num1, num2) => (num1-num2),
    multiply: (num1, num2) => (num1*num2),
    divide: (num1, num2) => (num1/num2)
}

function actionApplyer(startInt, arrayOfFunctions) {
    for (let i = 0; i < arrayOfFunctions.length; i++) {
        startInt = arrayOfFunctions[i](startInt)
        debugger
    }
    return startInt;
}