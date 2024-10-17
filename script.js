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

function clearResult(){
    document.getElementById("result").innerHTML = "";
}

function bubbleSort(){
   let length =  prompt("Enter length of array: ");
   let arr = [];
   for (let i = 0; i < length; i++){
       arr.push(parseInt(prompt("Enter element " + (i + 1) + ": ")));
   }
    let n = arr.length;
    let steps = "<ol>";
    for(let i=0;i<n;i++){
        for(let j=0;i<n;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                steps+= "<li>"
                for(let k=0;k<n;k++){
                    steps+= arr[k] + " ";
                }
                steps=+ "</li>";
            }
        }
    }
    steps+= "</ol>";
    document.getElementById("result").innerHTML = steps;
}