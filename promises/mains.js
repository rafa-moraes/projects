function makeAPizza (toppings = []) {

    return new Promise (function (resolve, reject){
        if(toppings.includes('pineapple')){
            reject('Seriously? No way !')
        }
        const timeToBake = 500 + (toppings.length * 200)
        setTimeout(() => {
            resolve(`Here is your pizza of ${toppings.join(' ')}`)
            
        }, timeToBake);
    })

}

const error = function (err) {console.log(err)}

// Example with chain of events and one catch, so if any of them is rejected everything after stops
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
    }).catch(error)


    const pizza1 = makeAPizza(['ham', 'cheese', 'eggs', 'mushroms','chicken','onions'])
    const pizza2 = makeAPizza(['pineapple', 'chicken','onions'])
    const pizza3 = makeAPizza(['ham', 'cheese', 'eggs', 'mushroms','pineapple'])

 // example with all
    const dinner = Promise.all([pizza1, pizza2, pizza3])
    .then(function(complex, simple, normal)
    {
        console.log(complex, simple, normal)
    })
   
     // example with race
    const hungry = Promise.race([pizza1, pizza2, pizza3])
    .then (function (complex){
        console.log('Here is the first one!')
        console.log(complex)
    })

    // example with allSettled
    const dinner2 = Promise.allSettled([pizza1, pizza2, pizza3])
    .then(results => console.log(results))


