
const roman = [
    {letter:"I", number:1,},
    {letter:"V", number:5,},
    {letter:"X", number:10,},
    {letter:"L", number:50,},
    {letter:"C", number:100,},
    {letter:"D", number:500,},
    {letter:"M", number:1000,}
    ]

function teste () {
   return roman.find(function (romanLetter) {
    if (romanLetter.letter.includes("X")) {
        return romanLetter.number
    }
    
        
})}

console.log(teste())


// function roman_numbers () {

//     const s = "III"
//     let number = [...s]

//    function letterToNumber () {

//     roman.filter(function (letra){
//         return 
//     })

//    }
    
//     console.log(filtered)


// }

// console.log(roman_numbers())








// Example 1:

// Input: s = "III"
// Output: 3
// Example 2:

// Input: s = "IV"
// Output: 4
// Example 3:

// Input: s = "IX"
// Output: 9
// Example 4:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.














