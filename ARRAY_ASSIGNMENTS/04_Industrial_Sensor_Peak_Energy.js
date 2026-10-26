/*
3.
Industrial Sensor Peak Energy Monitoring System

Problem Statement

A factory machine records energy consumption at regular intervals.

A peak is defined as a value greater than or equal to its neighbors.

Tasks:

Find all peak energy values
Compute sum of squares of peak values
Compute average of peak values
Return difference between max peak and min peak
If no peaks, return -1

Test Case 1

Input:
energy = [20, 40, 30, 60, 50]

Output:
Peaks = [40, 60]
Sum of squares = 5200
Average = 50
Difference = 20

Test Case 2

Input:
energy = [10, 20, 15, 25, 20, 30]

Output:
Peaks = [20, 25, 30]
Sum of squares = 1525
Average = 25
Difference = 10

Test Case 3

Input:
energy = [5]

Output:
Peaks = [5]
Sum of squares = 25
Average = 5
Difference = 0
*/




//let energy = [20, 40, 30, 60, 50]
let s = parseInt(prompt(`Enter ele: `))

let energy = []
for(let i=0; i<s; i++){
    num = Number(prompt(`Enter ele: ${i+1} = `))
    energy.push(num)
}
console.log(energy)

let res = []
if (energy.length > 1) {
    for (let i = 0; i < energy.length; i++) {
        if (i == 0) {
            if (energy[i] >= energy[i + 1]) {
                res.push(energy[i])
            }
        }
        else if (i == energy.length - 1) {
            if (energy[i] >= energy[i - 1]) {
                res.push(energy[i])
            }
        }
        else {
            if ((energy[i - 1] <= energy[i]) && (energy[i] >= energy[i + 1])) {
                res.push(energy[i])
            }
        }
    }
}
else{
    res.push(energy[0])
}
if(res.length!== 0){

    console.log("peaks =", res)
    let sum =  res.map(n => n**2)
    console.log("Sum of squares=", sum.reduce((a,b) => a+b))
    console.log("Average =", (res.reduce((a,b)=> a+b))/res.length)
    console.log("Difference =", res.reduce((a,b) => a>b?a:b) - res.reduce((a,b) => a<b?a:b))
}
else{
    console.log(-1)
}