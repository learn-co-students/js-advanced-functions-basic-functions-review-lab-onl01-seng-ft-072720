// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
    return function(adj="special"){
        return `You are ${flair}${adj}${flair}!`;
    }
}

let Calculator = {};

Calculator.add = function(x=1,y=3){return x+y}
Calculator.subtract = function(x=1,y=3){return x-y}
Calculator.multiply = function(x=1,y=3){return x*y}
Calculator.divide = function(x=10,y=5){return x/y}

function actionApplyer(start, funcArr){
    let a = start
    for (let i=0; i<funcArr.length; i++){
        a = funcArr[i](a)
    }
    return a
}