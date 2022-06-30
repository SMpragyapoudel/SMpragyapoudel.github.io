let num1=9;
let num2 =2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");


function add(){
	let result = num1 +num2;
	sumEl.textContent = "Sum: " + result;
}
 
function subtract( ) {
	let result = num1-num2;
	sumEl.textContent="subtraction:"+result;
}
function divide(){
	let result=num1/num2;
	sumEl.textContent="division"+result;
}
function multiply() {
	let result=num1*num2;
	sumEl.textContent="product"+result
}


