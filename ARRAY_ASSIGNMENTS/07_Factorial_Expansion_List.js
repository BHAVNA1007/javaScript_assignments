/*
7.
Factory Production – Factorial Expansion List

Problem Statement

A factory produces items where production capacity is defined using factorial growth.

Given a list of numbers, replace each number with its factorial value.

Then perform analysis on the resulting list.

Tasks:

Convert each element to factorial
Find sum of all factorial values
Find maximum factorial value
Count how many factorial values are even

Input:
A list of integers

Example 1

Input:
[3, 4, 5]

Processing:
3! = 6
4! = 24
5! = 120

Output:
[6, 24, 120]
Sum = 150
Max = 120
Even Count = 3
*/




//let arr = [3, 4, 5]
let s = parseInt(prompt(`Enter number of elements: `))
let arr = []
for (let i=0; i<s; i++){
    num = Number(prompt(`elements ${i+1} = `))
    arr.push(num)
}
console.log(arr)

let fact = arr.map((n) =>{
    let f = 1
    while(n >= 1){
        f = f * n
        n--
    }
    return f
})
console.log(fact)
console.log("sum = ", fact.reduce((a,b) => a+b))
console.log("Max = ", fact.reduce((a,b) => a>b?a:b,-1))
console.log("Even count = ", fact.filter(i => i%2 ==0).length)