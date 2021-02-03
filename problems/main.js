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

// console.log('u'<'j')

const data1 = 'jiwfkujhamlolnu'

const dataArray = [...data1]
let dataResult = []
dataArray.map((vowel,array) => {
    if (vowel < dataArray[array+1]){
        dataResult.push(vowel)
        
    }else if(vowel > dataArray[array+1] && vowel > dataArray[array-1]){
        dataResult.push(vowel)
    }
        
    console.log(dataResult)

})
let newData = []
dataResult.map((vowel,array) => {
    if (dataResult[array-1]>vowel ){
        newData.push(array)
        
    }else if (vowel > dataResult[array+1]) {
        newData.push(array)
    }
console.log(newData)
})

// "i", "w", "f", "k", "u", "a", "m", "l", "o", "l", "n"

// 9 23 6 11 21 1 13 12 15 12 14




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

