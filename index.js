// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
};

let wrapAdjective= function(stuff="*") {
    return function(param="special") {
        return `You are ${stuff}${param}${stuff}!`
    }
}

const Calculator = {
    add: function(x, y) {
        return x + y
    },

    subtract: function(x, y) {
        return x - y
    },
    
    multiply: function(x, y) {
        return x * y
    },

    divide: function(x, y) {
        return x / y;
    }
}

function actionApplyer(int, array) {
    let thing = int

    for (let i = 0; i < array.length; i++ ){
        thing = array[i](thing)
    }
    
    return thing
}
