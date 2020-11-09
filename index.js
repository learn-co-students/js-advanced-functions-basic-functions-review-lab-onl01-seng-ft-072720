// Your code here
function saturdayFun(activity= "roller-skate") {
    return `This Saturday, I want to ${activity}!` 
}

const mondayWork = function(act="go to the office") {
    return `This Monday, I will ${act}.`
}

function wrapAdjective(flair= "*") {
    return function(param= "special") {
        return (`You are ${flair}${param}${flair}!`)
    }
} 

let Calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
}

function actionApplyer(int= 0, array= []) {
    for (let i = 0; i < array.length; i++) {
        int = array[i](int)
    }
   return int
}