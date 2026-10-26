/*
2.
Smart City Traffic Peak Load Analyzer

Problem Statement

A smart city monitors traffic density at different time intervals in a day.

An element is called a peak traffic point if it is greater than or equal to its adjacent elements.

You are given an array traffic[] of size N.

Tasks:

Find all peak elements
Calculate the sum of all peak traffic values
Find the product of all peak traffic values
Return the maximum peak value

Note:
If only one element exists, it is the only peak.

Test Case 1

Input:
traffic = [10, 50, 30, 70, 60, 90, 80]

Output:
Peaks = [50, 70, 90]
Sum = 210
Product = 315000
Max Peak = 90

Test Case 2

Input:
traffic = [100, 200, 150, 180, 170]

Output:
Peaks = [200, 180]
Sum = 380
Product = 36000
Max Peak = 200

Test Case 3

Input:
traffic = [5]

Output:
Peaks = [5]
Sum = 5
Product = 5
Max Peak = 5
*/










let s = parseInt(prompt("Enter the number of traffic elements:"));

let traffic_arr = [];
let res = [];

for (let i = 0; i < s; i++) {
    let num = Number(prompt(`Element ${i + 1} = `));
    traffic_arr.push(num);
}

console.log("Traffic =", traffic_arr);

if (traffic_arr.length === 1) {
    res.push(traffic_arr[0]);
} else {
    for (let i = 0; i < traffic_arr.length; i++) {

        // First element
        if (i === 0) {
            if (traffic_arr[i] >= traffic_arr[i + 1]) {
                res.push(traffic_arr[i]);
            }
        }

        // Last element
        else if (i === traffic_arr.length - 1) {
            if (traffic_arr[i] >= traffic_arr[i - 1]) {
                res.push(traffic_arr[i]);
            }
        }

        // Middle elements
        else {
            if (
                traffic_arr[i] >= traffic_arr[i - 1] &&
                traffic_arr[i] >= traffic_arr[i + 1]
            ) {
                res.push(traffic_arr[i]);
            }
        }
    }
}

if (res.length > 0) {
    let sum = res.reduce((a, b) => a + b, 0);
    let product = res.reduce((a, b) => a * b, 1);
    let maxPeak = res.reduce((a, b) => a > b ? a : b);

    console.log("Peaks =", res);
    console.log("Sum =", sum);
    console.log("Product =", product);
    console.log("Max Peak =", maxPeak);
} else {
    console.log("No peaks found.");
}
