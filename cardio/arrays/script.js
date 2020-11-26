

const numbers = Array.from({length:10} , function () {return 'Rafa'})

const numeros = [...'Rafa']
const num = Array.from ('Rafa')

const names = Array.from({length:10}, function (one, two) {return two})

const meats = {
    pork: 10 , 
    beef: 5 ,
    chicken: 20 ,
}

const entry = Object.entries (meats)
const key = Object.keys(meats)
const value = Object.values(meats)

console.log(entry)
console.log(key)
console.log(value)

key.forEach((meat) => {
    return console.log(meat)
});

console.log(key.join(' or '))
console.log(value.join())

const food = 'Hot dogs, hamburgers, corn, sausages'

console.log(food.split(','))


























