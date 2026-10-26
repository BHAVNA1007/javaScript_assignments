/*
6.

A security system logs employee entry IDs during a day.

Only prime-numbered IDs are considered valid VIP entries.

Tasks:

Extract all prime IDs from the list
Find the sum of prime IDs
Find the maximum prime ID
Count how many prime entries exist

Input:
A list of integers (may contain duplicates and non-prime numbers)

Example 1

Input:
[12, 5, 7, 9, 11, 14, 17]

Output:
Prime IDs = [5, 7, 11, 17]
Sum = 40
Max = 17
Count = 4

Example 2

Input:
[4, 6, 8, 10]

Output:
Prime IDs = []
Sum = 0
Max = -1
Count = 0
*/







// let arr = [12, 5, 7, 9, 11, 14, 17]

let s = parseInt(prompt(`Enter number of ele: `))
let arr =[]
for (let i = 0; i<s; i++){
    num = Number(prompt(`element ${i+1} = `))
    arr.push(num)
}
console.log(arr)

let prime = []
for(let i of arr){
    if( i > 1){
        found = 1
        for(let n = 2; n <= i/2; n++){
            if(i%n == 0){
                found =0
                break
            }
        }
        if(found == 1){
            prime.push(i)
        }
    }
}

console.log("Prime IDs = ",prime)
console.log("Sum = ", prime.reduce((a,b) => a+b,0))
console.log("Max = ", prime.reduce((a,b) => a>b?a:b,-1))
console.log("Count = ", prime.length)