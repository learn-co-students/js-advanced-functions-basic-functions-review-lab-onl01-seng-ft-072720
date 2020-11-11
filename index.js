function saturdayFun(activity= "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity= "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair= "*") {
    return function(param= "special") {
        return `You are ${flair}${param}${flair}!`
    }
}

const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
  }
  
  let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }

// const calculator = {
//     function add(a, b) {
//         return a + b;
//     },
//     function subtract(a, b) {
//         return a - b;
//     },
//     function multiply(a, b) {
//         return a * b;
//     },
//     function divide(a, b) {
//         return a / b;
//     }
// }

//     function actionApplyer(start, arr) {
//         let a = start

//         for (let i = 0; i < arr.length; i++){
//             a = arr[i](a)
//         }

//         return a
//     }
