function adder(){
    let num1 = parseInt(prompt("Enter the first number: "));
    let num2 = parseInt(prompt("Enter the second number: "));
    num3 = num1 + num2;
    document.getElementById("result").innerHTML = "The sum of the two numbers is: " + num3;
}

function subtractor(){
    let num1 = parseInt(prompt("Enter the first number: "));
    let num2 = parseInt(prompt("Enter the second number: "));
    num3 = num1 - num2;
    document.getElementById("result").innerHTML = "The difference of the two numbers is: " + num3;
}

function multiplier(){
    let num1 = parseInt(prompt("Enter the first number: "));
    let num2 = parseInt(prompt("Enter the second number: "));
    num3 = num1 * num2;
    document.getElementById("result").innerHTML = "The product of the two numbers is: " + num3;
}

function divider(){
    let num1 = parseInt(prompt("Enter the first number: "));    
    let num2 = parseInt(prompt("Enter the second number: "));
    if(num2 == 0){
        document.getElementById("result").innerHTML = "Math error : Divide by zero";
        return;
    }
    num3 = num1 / num2; 
    document.getElementById("result").innerHTML = "The division of the two numbers is: " + num3;
}

function clearResult(){
    document.getElementById("result").innerHTML = "";
}

function input(){
    return document.getElementById("inp").value;
}
function mod(){
    document.getElementById("result").innerHTML = "Enter first number and hit enter";
    let num1 = parseInt(document.getElementById("enter").addEventListener("click", input()));
    document.getElementById("result").innerHTML = "Enter second number and hit enter";
    let num2 = parseInt(document.getElementById("enter").addEventListener("click", input()));
    document.getElementById("result").innerHTML = "Remainder is " + num1 % num2;
    

}