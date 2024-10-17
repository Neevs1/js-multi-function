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
    num3 = num1 / num2; 
    document.getElementById("result").innerHTML = "The division of the two numbers is: " + num3;
}