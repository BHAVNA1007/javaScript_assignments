
//1. Smart Credit Card Approval System
//A bank evaluates credit card applications based on income, credit score, employment type, and existing debt.
//If income is greater than or equal to 50000, then check credit score. If credit score is greater than or equal to 750, then check debt. If debt is less than 20000, approve Premium Card; otherwise approve Gold Card. If credit score is less than 750, then check employment type. If employment is government and credit score is at least 650, approve Gold Card; otherwise reject.
//If income is less than 50000, then check if income is at least 30000 and credit score is at least 700. If yes, approve Silver Card; otherwise reject.
//Input:
//Income = 45000
//Credit Score = 720
//Employment = private
//Debt = 10000
//Output:
//Card Type = Silver Card


let income1 = 45000;
let creditScore1 =  720;
let employment = "private";
let debt = 10000;

if (income1 >= 50000) {
    if (creditScore1 >= 750) {
        if (debt < 20000) {
            console.log("Card Type = Premium Card");
        } else {
            console.log("Card Type = Gold Card");
        }
    } else {
        if (employment == "government" && creditScore1 >= 650) {
            console.log("Card Type = Gold Card");
        } else {
            console.log("Card Type = Rejected");
        }
    }
} else {
    if (income1 >= 30000 && creditScore1 >= 700) {
        console.log("Card Type = Silver Card");
    } else {
        console.log("Card Type = Rejected");
    }
}














// 2. Hospital Emergency Priority System
// A hospital assigns treatment priority based on age, severity, and insurance.
// If severity is critical, then check age. If age is 60 or above, assign Immediate ICU; otherwise assign Emergency Ward.
// If severity is moderate, then check insurance. If insured, assign Priority Treatment; otherwise assign General Queue.
// If severity is low, then check age. If age is less than 10, assign Pediatric Priority; otherwise assign Wait.
// Input:
// Age = 65
// Severity = critical
// Insurance = yes
// Output:
// Treatment = Immediate ICU

let _age = 65;
let severity = "critical";
let insurance = "yes";

if (severity == "critical") {
    if (_age >= 60) {
        console.log("Treatment = Immediate ICU");
    } else {
        console.log("Treatment = Emergency Ward");
    }
} else if (severity == "moderate") {
    if (insurance == "yes") {
        console.log("Treatment = Priority Treatment");
    } else {
        console.log("Treatment = General Queue");
    }
} else {
    if (severity == "low") {
       if (_age < 10) {
          console.log("Treatment = Pediatric Priority");
        } else {
        console.log("Treatment = Wait");
        }
    }
}
















// 3. Smart Scholarship Allocation System
// A scholarship is provided based on marks, family income, and category.
// If marks are 85 or above, then check income. If income is less than or equal to 300000, then check category. If category is not general, give Full Scholarship; otherwise give 75% Scholarship. If income is above 300000, give 50% Scholarship.
// If marks are between 70 and 84, then check income. If income is less than or equal to 200000, give 50% Scholarship; otherwise give 25% Scholarship.
// If marks are below 70, no scholarship is given.
// Input:
// Marks = 88
// Income = 250000
// Category = OBC
// Output:
// Scholarship = Full Scholarship


let marks1 = 88;
let income = 250000;
let category = "OBC";

if (marks1 >= 85) {
    if (income <= 300000) {
        if (category != "general") {
            console.log("Scholarship = Full Scholarship");
        } else {
            console.log("Scholarship = 75% Scholarship");
        }
    } else {
        console.log("Scholarship = 50% Scholarship");
    }
} else if (marks1 >= 70 && marks1 <= 84) {
    if (income <= 200000) {
        console.log("Scholarship = 50% Scholarship");
    } else {
        console.log("Scholarship = 25% Scholarship");
    }
} else {
    console.log("No scholarship is given.");
}













//4. Airline Ticket Pricing Engine
//An airline calculates ticket price based on class, distance, and booking time.
//If class is business, then check distance. If distance is greater than 1000, price is 8000; otherwise 5000.
//If class is economy, then check distance. If distance is greater than 1000, then check booking time. If booking is early, price is 4000; otherwise 5000. If distance is less than or equal to 1000, price is 2500.
//Input:
//Class = economy
//Distance = 1200
//Booking = early
//Output:
//Ticket Price = 4000

let travelClass = "economy";
let distance = 1200;
let bookingTime = "early";

 if (travelClass == "business") {
    if (distance > 1000) {
        console.log("Ticket Price = 8000");
    } else {
        console.log("Ticket Price = 5000");
    }
} else if (travelClass == "economy") {
    if (distance > 1000) {
        if (bookingTime == "early") {
            console.log("Ticket Price = 4000");
        } else {
            console.log("Ticket Price = 5000");
        }
    } else {
        console.log("Ticket Price = 2500");
    }
}












//6. Banking Fraud Detection System
//A bank checks fraud risk based on transaction amount, location, device, and transaction count.
//If amount is greater than or equal to 50000, then check location. If location is international, then check device. If device is new, then check transaction count. If transactions are more than 3, mark High Risk (Block); otherwise Medium Risk. If device is not new, mark Medium Risk.
//If location is domestic, then check transaction count. If more than 5, mark Medium Risk; otherwise Low Risk.
//If amount is less than 50000, then check unusual activity. If yes, then check device. If device is new, mark Medium Risk; otherwise Low Risk. If no unusual activity, mark Safe.
//
//Input:
//Amount = 70000
//Location = international
//Device = new
//Transactions = 4
//
//Output:
//Risk Level = High Risk (Blocked)

let amount = 70000;
let location = "international";
let device = "new";
let transactions = 4;

if (amount >= 50000) {
    if (location == "international") {
        if (device == "new") {
            if (transactions > 3) {
                console.log("Risk Level = High Risk (Blocked)");
            } else {
                console.log("Risk Level = Medium Risk");
            }
        } else {
            console.log("Risk Level = Medium Risk");
        }
    }
} 


















//7. University Result Classification System
//A university assigns final class based on marks, backlog, and project score.
//If marks are 75 or above, then check backlog. If backlog is 0, then check project score. If project score is 80 or above, assign First Class with Distinction; otherwise First Class. If backlog is not 0, assign First Class.
//If marks are between 60 and 74, then check backlog. If backlog is less than or equal to 2, assign Second Class; otherwise Pass Class.
//If marks are between 50 and 59, assign Pass. Otherwise Fail.
//Input:
//Marks = 78
//Backlogs = 0
//Project = 85
//Output:
//Result = First Class with Distinction

let marks = 78;
let backlogs = 0;
let project = 85;

if (marks >= 75) {
    if (backlogs == 0) {
        if (project >= 80) {
            console.log("Result = First Class with Distinction");
        } else {
            console.log("Result = First Class");
        }
    } else {
        console.log("Result = First Class");
    }
} else if (marks >= 60) {
    if (backlogs <= 2) {
        console.log("Result = Second Class");
    } else {
        console.log("Result = Pass Class");
    }
} else if (marks >= 50) {
    console.log("Result = Pass");
} else {
    console.log("Result = Fail");
} 














//8. E-Commerce Dynamic Pricing System
//An e-commerce system gives discount based on demand, stock, user type, and festival.
//If demand is 80 or above, then check stock. If stock is less than 50, then check user type. If user is premium, then check festival. If festival is yes, give 20% discount; otherwise 10%. If user is not premium, no discount. If stock is 50 or more, give 5% discount.
//If demand is between 40 and 79, then check festival. If yes, give 10% discount; otherwise no discount.
//If demand is below 40, then check stock. If stock is greater than 200, give 15% discount; otherwise no discount.
//Input:
//Demand = 85
//Stock = 40
//User Type = premium
//Festival = yes
//
//Output:
//Discount = 20%


let demand = 85;
let stock = 40;
let userType = "premium";
let festival = "yes";

if (demand >= 80) {
    if (stock < 50) {
        if (userType == "premium") {
            if (festival == "yes") {
                console.log("Discount = 20%");
            } else {
                console.log("Discount = 10%");
            }
        } else {
            console.log("Discount = No discount");
        }
    } else {
        console.log("Discount = 5%");
    }
} else if (demand >= 40) {
    if (festival == "yes") {
        console.log("Discount = 10%");
    } else {
        console.log("Discount = No discount");
    }
} else {
    if (stock > 200) {
        console.log("Discount = 15%");
    } else {
        console.log("Discount = No discount");
    }
}












//9. Smart Loan Eligibility System
//A bank approves loans based on salary, age, credit score, and EMI.
//If salary is 40000 or above, then check age. If age is between 21 and 60, then check credit score. If credit score is 750 or above, then check EMI. If EMI is less than or equal to 40% of salary, approve at 8%; otherwise approve at 10%. If credit score is below 750, then check if it is at least 650. If yes, approve at 12%; otherwise reject.
//If salary is below 40000, then check if salary is at least 25000 and credit score is at least 700. If yes, approve at 13%; otherwise reject.
//Input:
//Salary = 50000
//Age = 30
//Credit Score = 760
//EMI = 18000
//Output:
//Loan Status = Approved at 8%


let salary = 50000;
let age = 30;
let creditScore = 760;
let emi = 18000;

if (salary >= 40000) {
    if (age >= 21 && age <= 60) {
        if (creditScore >= 750) {
            if (emi <= 0.4 * salary) {
                console.log("Loan Status = Approved at 8%");
            } else {
                console.log("Loan Status = Approved at 10%");
            }
        } else {
            if (creditScore >= 650) {
                console.log("Loan Status = Approved at 12%");
            } else {
                console.log("Loan Status = Rejected");
            }   
        }
    } else {
        console.log("Loan Status = Rejected");
    }
}














//10. Military Recruitment Fitness System
//Selection is based on age, BMI, running time, and medical condition.
//If age is between 18 and 25, then check BMI. If BMI is between 18 and 25, then check running time. If running time is less than or equal to 15 minutes, then check medical. If medical is fit, select; otherwise medical reject. If running time is more than 15, physical fail. If BMI is not in range, BMI fail.
//If age is between 26 and 30, then check running time and medical. If running time is less than or equal to 14 and medical is fit, conditional selection; otherwise reject.
//If age is above 30 or below 18, not eligible.
//
//Input:
//Age = 23
//BMI = 22
//Running Time = 14
//Medical = fit
//Output:
//Selection Status = Selected


let age1 = 23;
let bmi = 22;
let runningTime = 14;
let medical = "fit";

if (age1 >= 18 && age1 <= 25) {
    if (bmi >= 18 && bmi <= 25) {
        if (runningTime <= 15) {
            if (medical == "fit") {
                console.log("Selection Status = Selected");
            } else {
                console.log("Selection Status = Medical Reject");
            }
        } else {
            console.log("Selection Status = Physical Fail");
        }
    } else {
        console.log("Selection Status = BMI Fail");
    }
}