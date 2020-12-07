const inventors = [
    { first: 'Abert', last: 'Einstein' , year: 1879 , passed: 1955},
    { first: 'Isaac', last: 'Newton' , year: 1643 , passed: 1727},
    { first: 'Galileo', last: 'Galilei' , year: 1564 , passed: 1642},
    { first: 'Marie', last: 'Curie' , year: 1867 , passed: 1934},
    { first: 'Johannes', last: 'Kepler' , year: 1571 , passed: 1630},
    { first: 'Nicolaus', last: 'Copernicus' , year: 1473 , passed: 1543},
    { first: 'Max', last: 'Planck' , year: 1858 , passed: 1947},

]


const people = ["James,John","Robert,Michael","William,David","Richard,Joseph","Thomas,Charles","Christopher,Daniel","Matthew,Anthony","Donald,Mark","Paul,Steven","Andrew,Kenneth","Joshua,Kevin","Brian,George","Edward,Ronald","Timothy,Jason","Jeffrey,Ryan","Jacob,Gary","Nicholas,Eric","Jonathan,Stephen","Larry,Justin","Scott,Brandon","Benjamin,Samuel","Frank,Gregory","Raymond,Alexander","Patrick,Jack","Dennis,Jerry","Tyler,Aaron","Jose,Henry","Adam,Douglas","Nathan","Peter,Zachary","Kyle,Walter","Harold,Jeremy","Ethan,Carl","Keith,Roger","Gerald,Christian","Terry,Sean","Arthur,Austin","Noah,Lawrence","Jesse,Joe","Bryan,Billy","Jordan,Albert","Dylan,Bruce","Willie,Gabriel","Alan,Juan","Logan,Wayne","Ralph,Roy",]

// array.filter ()
// 1. Filter the list of inventors for those who were born in the 1500's

const before_1500 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599)

// function filteredYear (inventor){
//     if(inventor.year >= 1500 && inventor.year <= 1599){
//         return true
//     }
// }

console.table(before_1500)



// array.map)()
// 2. Give is an array of the inventor first and last names

const inventorsName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

// function fullName(inventor) {
//     return `${inventor.first} ${inventor.last}`

// }
console.table(inventorsName)


// array.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const birthdate = inventors.sort ((a,b) => a.year - b.year)

console.table(birthdate)



// array.reduce()
// 4. how many years did all the inventors live ?

const sumYears = inventors.reduce ( sumedYears , 0)

function sumedYears(total , inventor) {
   const age = (inventor.passed - inventor.year)
    return total + age

}


console.log(sumYears)


// 5. sort the inventors by years lived

const sortedInventors = inventors.sort ((a,b) => (b.passed -b.year)- (a.passed - a.year))

console.table (sortedInventors)



// 6. Create a list of boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category')
// const links = [...category.querySelectorAll('a')]
// const linkText = links.map (link => link.textContent)
// const filterBouleverds = linkText.filter(text => text.includes('de'))

// 7. sort Exercise
// sort the people alphabetically by last name

const alpha = people.sort (sortAlpha)
function sortAlpha (a, b){ 
    const [aLast , aFirst] = a.split(', ')
    const [bLast , bFirst] = b.split(', ')
    return aLast > bLast ? 1 : -1 
    
}
console.table(alpha)

// 8. reduce exercise
// sum up the instances of each of theses
const data = ['car','car','truck','truck','bike','walk','car','van','bike','walk','car','van','car','truck']


const transport = data.reduce(reduceData , {})

function reduceData (total , item){

    total[item] ? total[item] = total[item] + 1 : total[item] = 1
    return total

}
console.log(transport)
