// Test: gcdIter(99, 144)
// Output:
// 9
// Test: gcdIter(68, 17)
// Output:
// 17
// Test: gcdIter(20, 20)
// Output:
// 20
// Test: gcdIter(154, 242)
// Output:
// 22
// Test: gcdIter(10, 14)
// Output:
// 2
// Test: gcdIter(3, 25)
// Output:
// 1
// Test: gcdIter(26, 40)
// Output:
// 2
// Test: gcdIter(175, 91)
// Output:
// 7
// Test: gcdIter(69, 66)
// Output:
// 3
// Test: gcdIter(360, 288)
// Output:
// 72

let a = 154
let b = 242
let c = a%b

while (c !== 0){
    a=b
    b=c
    c=a%b
}
console.log(b)



