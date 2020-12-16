const animals = [
    {name: 'frodo' , species: 'dog' },
    {name: 'mango' , species: 'horse' },
    {name: 'carto' , species: 'cat' },
    {name: 'korra' , species: 'dog' },
    {name: 'avatar' , species: 'fish' },
    {name: 'aang' , species: 'horse' },
    {name: 'sam' , species: 'horse' },
    {name: 'pipi' , species: 'horse' },
    {name: 'lupi' , species: 'cat' },
]

const dogs = animals.reduce(function (total, item){
    // total[item.species] ? item.species + 1 : item.species = 1
    total[item.species] = total[item.species] ? total[item.species] = total[item.species] + 1 : total[item.species] = 1
    console.log(total)
    return total
} ,{})

console.log(dogs)




