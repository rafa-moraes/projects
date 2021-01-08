const people = [
    { name: 'Wes', year: 1988},
    { name: 'Kait', year: 1986},
    { name: 'Irv', year: 1970},
    { name: 'Lux', year: 2015},
]

const comments = [
    {text: 'Love This!', id: 523423},
    {text: 'Super good!', id: 823423},
    {text: 'You are the best', id: 2039842},
    {text: 'Ramen is my fav food ever', id: 123523},
    {text: 'Nice Nice Nice!', id: 542328},

]

// Some and every checks
// Is at least one person 19 ?
const nineteen = []
const date = new Date()
const currentYear = date.getFullYear()

people.some(data => { 
    if ((currentYear - data.year) >= 19){
    nineteen.push(data.name)
    console.log(nineteen)
}})

// Is everyone 19?
console.log (people.every(data => {
    if ((currentYear - data.year) >= 19){
        return true
    }
}))


// find the comment with the id of 823423
console.log(comments.find(data => data.id === 823423))
  

// Find the comment with this ID
// Delete the comment with the ID of 823423

const index = comments.findIndex(data => data.id === 823423)

const newComments = [...comments.slice(0, index),...comments.slice(index+1)]
console.log(newComments)
// OR
comments.splice(index,1)
console.log(comments)






