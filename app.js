// Q1


// let para = document.querySelector("#para");
// para.innerHTML ="Welcome!";
//  Q2

// let inputName =document.querySelector("#inputName");
// let result = document.querySelector("#result");
// function displayName(){
//   result.innerHTML = inputName.value
// }
//Q3
// function changeColor(){
//     let box =document.querySelector("#box");
//     box.style.backgroundColor ="#ADD8E6";
// }
// Q4
// let title =document.querySelector("#Maintitle");
// title.style.color = "red"; 

//Q5
// let num = document.querySelector("#num1");
// let outPut = document.querySelector("#outPut");
// function add(){
//     outPut.innerHTML = num.value
// }
// Q6
// let sumbitButton =document.querySelector(".sumbit-btn");
// function btnClick(){
//     console.log("btn Clicked");
// }

// Q7
// let num1 =document.querySelector("#firstNumber");
// let num2 =document.querySelector("#secondNumber");
// let result = document.querySelector("#sum");
// function addNumbers(){
//     result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
// }

// Q8
// let para =document.querySelector(".description");
// function changetext(){
//     para.innerHTML = "Updated Text";
// }


//Q9
// let box =document.querySelector("#box");
// box.style.width = "200px";
// box.style.height = "200px";
// box.style.border = "2px solid black";
// box.style.backgroundColor = "green";
// Q10
// let email =document.querySelector("#emailInput");
// function emailVaild(){
//     console.log(email.value);
// }


//Q11
// let para =document.querySelector("#para");
//  para.style.fontSize = "24px";
let fullName =document.querySelector("#inputFullname");
let greeting =document.querySelector("#greeting");
function resultName(){
    greeting.innerHTML =  "Hello" + fullName.value;
}
