/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var propertyDivide = area / 2;
console.log("Each person will get: ", propertyDivide);


/** Problem -02 ( Cycle or Laptop ) */
var money = 45000;
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
var rahimaMedicineDay = ["1 - rest", "2 - rest", "3 - medicine"]
for(var i = 1; i <= 11; i++){
    console.log(i, "-", "rest");
    if(i % 3 === 0){
        console.log(i, "-", "medecine");
    }
}