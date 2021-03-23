Test: gcdIter(99, 144)
Output:
9
Test: gcdIter(68, 17)
Output:
17
Test: gcdIter(20, 20)
Output:
20
Test: gcdIter(154, 242)
Output:
22
Test: gcdIter(10, 14)
Output:
2
Test: gcdIter(3, 25)
Output:
1
Test: gcdIter(26, 40)
Output:
2
Test: gcdIter(175, 91)
Output:
7
Test: gcdIter(69, 66)
Output:
3
Test: gcdIter(360, 288)
Output:
72

// Test: gcdRecur(125, 90)
// Output:
// 5
// Test: gcdRecur(195, 156)
// Output:
// 39
// Test: gcdRecur(288, 96)
// Output:
// 96
// Test: gcdRecur(320, 256)
// Output:
// 64
// Test: gcdRecur(64, 100)
// Output:
// 4
// Test: gcdRecur(234, 180)
// Output:
// 18
// Test: gcdRecur(49, 126)
// Output:
// 7
// Test: gcdRecur(140, 230)
// Output:
// 10
// Test: gcdRecur(35, 14)
// Output:
// 7
// Test: gcdRecur(112, 224)
// Output:
// 112

let a = 195
let b = 156
let c = a%b

while (c !== 0){
    a=b
    b=c
    c=a%b
}
console.log(b)



