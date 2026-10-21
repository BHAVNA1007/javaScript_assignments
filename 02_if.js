
//1. Smart Voting & ID Verification System
//   A government system verifies whether a citizen can vote and whether they have a valid ID.

//* If age ≥ 18 → Eligible to vote
//* If ID proof is available → Allowed inside booth

//Input:
//Enter age: 22
//Do you have ID (yes/no): yes

//Output:
//Eligible to vote
//Allowed inside booth

// let age = 30;
// let id = "yes";
// if (age >= 18) {
//     console.log("Eligible to vote");
// }
// if (id == "yes") {
//     console.log("Allowed inside booth");
// }








//02_Student_Performance_Analyzer
//   A school wants to evaluate students based on marks.
//
//* If marks ≥ 40 → Pass
//* If marks ≥ 75 → Distinction
//
//Input:
//Enter marks: 80
//
//Output:
//Pass
//Distinction 



//let marks = 75;
//if (marks >= 40) {
//    console.log("Pass")
//}
//if (marks >= 75) {
//    console.log("Distinction")
//}









//03_E-Commerce_Offer_Engine
//   An online store provides multiple offers independently:
//
//* If cart value ≥ 500 → Free delivery
//* If cart value ≥ 1000 → 10% discount coupon
//
//Input:
//Enter cart value: 1200
//
//Output:
//Free delivery applied
//Discount coupon unlocked






//let cart_value = 1200;
//
//if (cart_value >= 500) {
//    console.log("Free delivery applied");
//}
//if (cart_value >= 1000) {
//    console.log("Discount coupon unlocked");
//}











//04_Gym_Membership_Eligibility_Checker
//   A gym checks multiple conditions:
//* If age ≥ 18 → Allowed for gym
//* If BMI > 25 → Suggest weight loss program
//Input:
//Enter age: 25
//Enter BMI: 27
//output:
//Gym access granted
//Enroll in weight loss program


//let age = 25;
//let bmi = 27;
//if (age >= 18){
//    console.log("gym access granted");
//}
//if (bmi > 25){
//    console.log("Enroll in weight loss program");
//}









//05_Banking_Security_System
//   A bank validates login attempt:
//
//* If username is "admin" → Valid user
//* If password length ≥ 8 → Strong password
//
//Input:
//Enter username: admin
//Enter password: secure123
//
//Output:
//Valid user
//Strong password 


//let username = "admin";
//let password = "secure123";
//if (username == "admin"){
//    console.log("Valid user");
//}
//if (password.length >= 8){
//    console.log("Strong password");
//}








//06_Weather_Monitoring_System
//   A system checks weather conditions:
//
//* If temperature ≥ 30 → Hot day
//* If humidity ≥ 70 → High humidity alert
//
//Input:
//Enter temperature: 32
//Enter humidity: 75
//
//Output:
//Hot day
//High humidity alert


//let temp = 30;
//let humidity = 70;
//if (temp >= 30){
//   console.log("Hot day") 
//}
//if (humidity >= 70){
//   console.log("High humidity alter")
//}







//07_Salary_Benefits_System
//   A company provides benefits:
//
//* If salary ≥ 30000 → Eligible for PF
//* If salary ≥ 50000 → Eligible for bonus
//
//Input:
//Enter salary: 55000
//
//Output:
//PF applicable
//Bonus applicable


//let salary = 55000
//if (salary >= 30000) {
//   console.log("Eligible for PF")
//}
//if (salary >= 50000) {
//   console.log("Eligible for bonus")
//}











//08_Number_Property_Checker
//   A system evaluates number properties:
//
//* If number % 2 == 0 → Even number
//* If number % 5 == 0 → Divisible by 5
//
//Input:
//Enter number: 20
//
//Output:
//Even number
//Divisible by 5 


//let number = 20;
//if (number % 2 === 0){
//   console.log("Even number") 
//}
//if (number % 5 === 0){
//   console.log("Divisible by 5") 
//}












//09_Library_Access_System
//   A library checks:
//
//* If membership is active → Entry allowed
//* If books issued < 3 → Can issue more books
//
//Input:
//Membership active (yes/no): yes
//Books issued: 2
//
//Output:
//Entry allowed
//Can issue more books


//let membership = "yes"
//let book_issued = 2
//
//if (membership == "yes"){
//    console.log("Entry allowed ")
//}
//if (book_issued < 3){
//   console.log("Can issue more books")
//}

















//10_Online_Exam_System
//    System evaluates exam conditions:
//
//* If marks ≥ 40 → Pass
//* If attendance ≥ 75 → Eligible for certificate
//Input:
//Enter marks: 60
//Enter attendance: 80
//Output:
//Pass
//Eligible for certificate

let marks = 60
attendance = 80

if( marks>=40){
    console.log("Pass")
}    
if (attendance>=75){
    console.log("Eligible for certificate")
}    