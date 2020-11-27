

const numbers = Array.from({length:10} , function () {return 'Rafa'})

const numeros = [...'Rafa']
const num = Array.from ('Rafa')

const names = Array.from({length:10}, function (one, two) {return two})

const meats = {
    pork: 10 , 
    beef: 5 ,
    chicken: 20 ,
}
// Transform object into arrays
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
//  find
const feedback = [
    {comment: 'love the burgs', rating: 4},
    {comment: 'Horrible service', rating: 2},
    {comment: 'Smoothies are great, liked the burger too', rating: 5},
    {comment: 'Ambiance need work', rating: 3},
    {comment: 'I DONT LIKE BURGERS', rating: 1}
]

const burgs = feedback.find(rating => rating.comment.includes('burgs'))
console.log(burgs)

// filter

function filterByMinRating(rate){
    return function(number) {
        return number.rating > rate
    }
}

const goodRatings = feedback.filter(filterByMinRating(1))

console.table(goodRatings)

function filterByWord(word){
    return function(words) {
        return words.comment.includes(word)
        }
}

const goodComment = feedback.filter(filterByWord('burger'))

console.table(goodComment)

// Check if there is at least 5 of one type of meat with some()

const meatsArraySome = Object.values(meats).some(qty => qty >=5)
console.log(meatsArraySome)

// make sure we have at least 3 of every meat with every()

const meatsArrayEvery = Object.values(meats).every(qty => qty >3)
console.log(meatsArrayEvery)


// sort number with sort ()
const nums = [1, 3, 2332, 235, 261, 11, 26, 866, 1022]

function sortItens(a,b){
    return a-b
}
nums.sort(sortItens)
console.log (nums)
// sort with text
console.log(forbidenFood.sort())

// sort with object

const prices = {
    hotDog: 453,
    burger: 765,
    sausage: 634,
    corn: 234,
}

const priceArray = Object.entries(prices).sort(function (a,b) {
const aPrice = a[1]
const bPrice = b[1]
return aPrice - bPrice
})
console.table(priceArray)

















