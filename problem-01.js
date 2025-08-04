/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var propertyDivide = area / 2;
console.log(propertyDivide);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money >= 25000) {
    console.log("Laptop");
}
else if(money >= 10000 && money < 25000) {
    console.log("Cycle");
}
else{
    console.log("Chocolate");
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
var dayStart = 1;
for(var i = 1; i <= lastDay; i++){
    if(i % 3 !== 0){
        console.log(i, "-", "rest");
    }
    if(i % 3 === 0){
        console.log(i, "-", "medicine");
    }
}


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
var alwaysLowerCase = fileName.toLowerCase();
var extension = alwaysLowerCase.split(".");
var validateStart = alwaysLowerCase.startsWith("#");
// console.log(validateStart);

if(extension.includes("pdf")){
    console.log("Store");
}
else if(extension.includes("docx")){
    console.log("Store");
}
else if(validateStart != false){
    console.log("Store");
}
else{
    console.log("Delete");
}


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse"  };
//write your code here
var emailBody = student.name + student.roll + "." + student.department;
console.log(emailBody + "@ph.ac.bd");



/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalaryPresent = 45000;
// write your code here
var sumTotalSalary = startingSalaryPresent;
for(var i = 1; i <= experience; i++){

    var perYearIncrease = startingSalaryPresent * (5 / 100);
    startingSalaryPresent += perYearIncrease;
}


console.log(startingSalaryPresent.toFixed(2));
