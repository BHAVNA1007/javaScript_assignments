//1.Multiplication Table Generator
//
//Scenario:
//A school learning app helps students practice multiplication tables.
//The user enters a number n, and the system prints multiplication tables from 1 to n using nested loops.
//
//Input:
//Enter limit: 3
//
//Output:
//1 x 1 = 1
//1 x 2 = 2
//1 x 3 = 3
//
//2 x 1 = 2
//2 x 2 = 4
//2 x 3 = 6
//
//3 x 1 = 3
//3 x 2 = 6
//3 x 3 = 9


let limit = 3;
for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= limit; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(""); // Add a blank line between tables
}












//2.Perfect Number Analyzer
//A mathematics research system analyzes special numbers within a given range.
//The user enters a starting number and ending number.
//The system checks every number in that range and displays all Perfect Numbers using nested loops.
//
//(A Perfect Number is a number whose sum of proper divisors is equal to the number itself.)
//
//Input:
//Enter starting number: 1
//Enter ending number: 1000
//Output:
//Perfect Numbers are:
//6
//28
//496

let startingNumber = 1;
let endingNumber = 1000;

for (let num = startingNumber; num <= endingNumber; num++) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) {
        console.log(num);
    }
}













//3.Prime Number Range Checker
//
//A cyber security system generates prime numbers for encryption analysis.
//The user enters a starting number and ending number.
//The system checks and displays all prime numbers between the given range using nested loops.
//
//Input:
//Enter starting number: 10
//Enter ending number: 50
//
//Output:
//Prime Numbers are:
//11
//13
//17
//19
//23
//29
//31
//37
//41
//43
//47


let startNum = 10;
let endNum = 50;

for (let num = startNum; num <= endNum; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}











//4.Armstrong Number Finder
//
//A digital number analysis system checks for Armstrong numbers within a range.
//The user enters starting and ending numbers.
//The system finds all Armstrong numbers using nested loops.
//
//Input:
//Enter starting number: 1
//Enter ending number: 500
//
//Output:
//Armstrong Numbers are:
//1
//153
//370
//371
//407


//let start = 1;
//let end = 500;
//
//for (let num = start; num <= end; num++) {
//    let originalNum = num;
//    let sum = 0;
//    while (num > 0) {
//        let digit = num % 10;
//        sum += digit ** 3;
//        num = Math.floor(num / 10);
//    }
//    if (sum === originalNum) {
//        console.log(originalNum);
//    }
//}



















//5.Strong Number Detector

//A banking security system uses Strong Numbers for special authentication testing.
//The user enters a range of numbers.
//The system identifies all Strong Numbers between the given range using nested loops.
//
//A Strong Number is a number in which the sum of factorials of its digits is equal to the original number.
//
//Example:
//145
//
//1! + 4! + 5!
//= 1 + 24 + 120
//= 145
//
//Since the sum is equal to the original number, 145 is called a Strong Number.
//
//Input:
//Enter starting number: 1
//Enter ending number: 500
//
//Output:
//Strong Numbers are:
//1
//2
//145


let startRange = 1;
let endRange = 500;

for (let num = startRange; num <= endRange; num++) {
    let originalNum = num;
    let sum = 0;
    let tempNum = num;
     
    for (let i = 0; i < String(num).length; i++) {
        let digit = tempNum % 10;
        let factorial = 1;
        for (let j = 1; j <= digit; j++) {
            factorial *= j;
        }
        sum += factorial;
        tempNum = Math.floor(tempNum / 10);
    }
    if (sum === originalNum) {
        console.log(originalNum);
    }
}













//6.Palindrome Number Range Checker
//A barcode verification system checks for palindrome numbers within a specific range.
//The user enters starting and ending numbers.
//The system displays all palindrome numbers using nested loops.
//
//Input:
//Enter starting number: 100
//Enter ending number: 200
//
//Output:
//Palindrome Numbers are:



