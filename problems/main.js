
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

const data1 = 'zyxwvutsrqponmlkjihgfedcba'
// hmqxcadevjhpues
// gqwhjqdkltzvazjl
// zyxwvutsrqponmlkjihgfedcba
// jlyrwzks
// lmxgbvbqoxmxorssajlutzh
// uvnnwshrb
// jmlgywztzwhefalnap

// hmqx
// dkltz
// z
// jly
// orss
// nnw
// aln


const dataArray = [...data1]
console.log(dataArray)

let dataResult = [0]
let dataResult2 = []

dataArray.map((vowel,array) => {
    if (vowel>dataArray[array+1]) {
        dataResult.push(array)
        
        // console.log(dataResult)
        
    }})
    
    console.log(dataResult)
  
    
    function show () {
        if(dataResult.length === 1){
            dataResult2 = [...dataArray].join("")
            
            console.log(dataResult2 , dataResult.length)
        }else { 
        let i = 0

        while (i<dataResult.length) {
            if(dataResult[0]===dataResult[1]){
             dataResult2.push(dataArray.slice(dataResult[i]+1,dataResult[i+1]+1).join(""))
        
            }else if(dataArray[dataResult[i]]<dataArray[dataResult[i+1]]){
                dataResult2.push(dataArray.slice(dataResult[i],dataResult[i+1]+1).join(""))

            }else{dataResult2.push(dataArray.slice(dataResult[i]+1,dataResult[i+1]+1).join(""))
            }
        
        
        i++
        }
        // }
    //     // 

    //     //     dataResult2.push(dataArray.slice(dataResult[i],dataResult[i+1]+1).join(""))

        // }
    //     // 
    //     //     dataResult2.push(dataArray.slice(dataResult[i]+1,dataResult[i+1]+1).join(""))
    //     // }

    
        dataResult2.sort((a,b) => b.length - a.length)
        console.log(dataResult2[0])
        }
        
            
        // }
    }
    
    show()
    

    // if(dataArray[0]<dataArray[1])
// A ideia eh conseguir fazer um slice do primeiro e segundo item do array e dar join neles, e ai dps contar quantos caracteres tem o array e ver qual eh o maior e mostrar.


// cntvjtrds
// 3 14 20 22 10 20 18 4 19


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

