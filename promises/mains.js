
function makeAPizza (toppings = []) {

    return new Promise (function (resolve, reject){
        const timeToBake = 500 + (toppings.length * 200)
        setTimeout(() => {
            resolve(`Here is your pizza of ${toppings.join(' ')}`)
            
        }, timeToBake);
    })

}


makeAPizza(['pepperoni'])
    .then(function(pizza){
        console.log(pizza)
        return makeAPizza(['ham', 'cheese', 'eggs'])
    })
    .then(function(pizza){
        console.log(pizza)
        return makeAPizza(['ham', 'eggs'])
    })
    .then(function(pizza){
        console.log(pizza)
        return makeAPizza(['ham', 'eggs'])
    })
    .then(function(pizza){
        console.log(pizza)
        return makeAPizza(['ham', 'cheese', 'eggs', 'pepperoni'])
    })
    .then(function(pizza){
        console.log(pizza)
        return makeAPizza(['ham', 'cheese', 'eggs', 'mushroms','pineapple', 'chicken','onions'])
    })
    .then(function(pizza){
        console.log(pizza)
        return makeAPizza(['cheese'])
    })
    .then(function(pizza){
        console.log(pizza)
    })















