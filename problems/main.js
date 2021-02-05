const data = [
    'jiwfkujhamlolnu',
    'cntvjtrds',
    'wbrollzh',
    'hmqxcadevjhpues',
    'xqmftexmsjxkpuf',
    'tiuytobfzeqmpklcveskfp',
    'ucprclkblltbef',
    'abcdefghijklmnopqrstuvwxyz',
    'vflgzbwkteocpbk',
    'gqwhjqdkltzvazjl',
    'trowrcxgpflntzrfrqtqmk',
    'zyxwvutsrqponmlkjihgfedcba',
    'jlyrwzks',
    'zivgcsimwpxbb',
    'lmxgbvbqoxmxorssajlutzh',
    'uvnnwshrb',
    'inwbarmkixryfoysqimjt',
    'kjnfwpazg',
    'jmlgywztzwhefalnap',
    'yulkwnlxpidsjfkzlgn'
]

const data1 = 'jiwfkujhamlolnu'

const dataArray = [...data1]
// const text = 'fk'
// console.log(text[text.length-1] < 'u')
let dataResult = []
let dataResult2 = []

dataArray.map((vowel,array) => {
    if (vowel>dataArray[array+1]) {
        dataResult.push(array)
        
        // console.log(dataResult)
    

}})
console.log(dataResult)
console.log(dataArray.slice(3,6))

let i = 0
function show () {
    if(i<dataResult.length){
        console.log(i)
        console.log(dataResult.length)
        console.log(dataResult[i+1]-dataResult[i])
        i++
        
    }
}




// let newData = []
// dataResult.map((vowel,array) => {
//     if (vowel>dataResult[array+1]){
//         dataResult.

//     }
// console.log(dataResult)
// })

// "j", "i", "w", "f", "k", "u", "j", "h", "a", "m", "l", "o", "l", "n", "u"

// 10 9 23 6 11 21 10 8 1 13 12 15 12 14 21

// "i", "w", "f", "k", "u", "a", "m", "l", "o", "l", "n"

// 9 23 6 11 21 1 13 12 15 12 14
// vowel < dataArray[array+1] || vowel > dataArray[array+1] && vowel > dataArray[array-1] 



// if ( dataArray[array-1] > vowel && vowel < dataArray[array+1] ) adiciona
// if ( dataArray[array-1] < vowel && vowel < dataArray[array+1] ) adiciona
// if ( dataArray[array-1] < vowel && vowel > dataArray[array+1] ) adiciona








// let i = 0
// function result () {
//   console.log(dataArray[i],dataArray[i+1])  

// if(dataArray[i]<dataArray[i+1]){
    
// dataResult.push(dataArray[i])
// console.log(dataResult)
// }else(
//     dataResult.push(dataArray[i+1])
// )
// i++
// if(i<=dataArray.length){
// result()
// }

// }

// result ()

