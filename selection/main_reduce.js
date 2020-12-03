
const numbers = [5,5,5,10,20]

numbers.reduce((a,b) => a+b)

console.log(numbers.reduce((a,b) => a+b , 0))


const people = [
    {names: 'Rafa', age: 50 , heigth: 175,},
    {names: 'Rod', age: 25, heigth: 176,},
    {names: 'Pro', age: 20, heigth: 175,},
    {names: 'Rafa', age: 30, heigth: 176,},
    {names: 'Rod', age: 40, heigth: 174,}
]



let i = 0 


console.log(people.reduce(countNames, {}))

function countNames (acc , item) {
    console.log(`Looping ${item.names}`)
    acc[item.names] = acc[item.names] + 1 || 1 
    return acc

   
}

const ageSum = people.reduce((acc, item) => acc + item.age,0)

console.log(ageSum)



