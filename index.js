// Your code here
function saturdayFun(text="roller-skate") {
    return  `This Saturday, I want to ${text}!`
}

function mondayWork(text="go to the office") {
    return `This Monday, I will ${text}.`
}

function wrapAdjective(flare="*") {
    return function(text="special") {
        
        return `You are ${flare}${text}${flare}!`
    }
}

let Calculator = {add:
                function(n, nn){
                    return n + nn 
                },
                subtract:
                function(n, nn) {
                    return n - nn
                },
                multiply:
                function(n, nn) {
                    return n * nn
                },
                divide:
                function(n, nn) {
                    return n / nn
                }
            }

function actionApplyer(n, arr) {
    
    let result = n
    for (let ar of arr) {
        result = ar(result)
    } 

    return result

}