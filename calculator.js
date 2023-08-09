let firstNum="";
let secondNum="";
let op="";

function add() {answer=parseInt(firstNum) + parseInt(secondNum);}
function subtract() {answer=parseInt(firstNum) - parseInt(secondNum);}
function multiply() {answer=parseInt(firstNum) * parseInt(secondNum);}
function divide() {answer=parseInt(firstNum) / parseInt(secondNum);}

function operate() {
    if (op=="+") add();
    if (op=="-") subtract();
    if (op=="*") multiply();
    if (op=="/") divide();
}

const display=document.querySelector(".display");
const numButtons=document.querySelectorAll(".numButton");

numButtons.forEach(function(numButton){
    numButton.addEventListener("click", function() {
        //firstNum input
        if (firstNum=="" && op==""){
            display.textContent+=numButton.id;
        }
        //secondNum input
        else if (firstNum!=="" && op!==""){
            secondNum+=numButton.id;
            display.textContent=secondNum;
            console.log(secondNum);
        }
    })  
})

//operator input & saving of number input
const opButtons=document.querySelectorAll(".opButton");

opButtons.forEach(function(opButton){
    opButton.addEventListener("click", function() {
        //for recording of firstNum
        if (firstNum=="" && op==""){
            firstNum=display.textContent;
            console.log(firstNum);
            op=opButton.id;
            console.log(op); 
        }

        //for operating on firstNum & secondNum
        else if (firstNum!=="" && secondNum!=="" && op!==""){
            operate();
            op=opButton.id;
            console.log(op)
            display.textContent=answer;
            firstNum=answer;
            //to clear secondNum value
            secondNum="";
            console.log(firstNum);
        }

        else if (firstNum!=="" && op==""){
            op=opButton.id;
            secondNum="";
        }
    })
})

//when equal is pressed
const equalButton=document.querySelector(".equalButton");

equalButton.addEventListener("click", function(){
    operate();
    display.textContent=answer;
    firstNum=answer;
    console.log(answer)
    op="";
})


//when clear button is pressed
const clearButton=document.querySelector(".clearButton");

clearButton.addEventListener("click", function(){
display.textContent="";
firstNum="";
secondNum="";
op=""
})


