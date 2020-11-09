// Your code here
function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`
}

let mondayWork = function(work="go to the office"){
    return `This Monday, I will ${work}.`
}

let wrapAdjective = function(style="*") {
    return function(adjective="just ok") {
      return `You are ${style}${adjective}${style}!`
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