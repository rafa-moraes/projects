

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

const foodArray = food.split(', ')
console.log(foodArray)

const lastItem = foodArray.pop()
console.log(foodArray)
console.log(lastItem)

foodArray.push(lastItem)
console.log(foodArray)

const firstItem = foodArray.shift()
console.log(foodArray)
console.log(firstItem)

foodArray.unshift(firstItem)
console.log(foodArray)

// Slice you select the index start and index end(which is end-1) and this doesn't change the original array, just make a copy and create a new array
console.log(foodArray.slice(2,4))
console.log(foodArray)

// Splice you select the index start and how many indexes you want to move. It changes the original removind the values and change the length of the index
console.log(foodArray.splice(2,2))
console.log(foodArray)


const newFood = ['Bread','sausage','burrito',...foodArray,'corn','sausage',]
console.log(newFood)

const indexOfArray = newFood.indexOf('sausage')
console.log(indexOfArray)

const lastIndexOfArray = newFood.lastIndexOf('sausage')
console.log(lastIndexOfArray)

// Includes
const forbidenFood = ['corn','rice', 'beans','sausage']
const newArray = []

newFood.forEach(item => {
    const isForbiden = forbidenFood.includes(item)
    if(!isForbiden){
        newArray.push(item)

    }
})

console.log(newArray)



