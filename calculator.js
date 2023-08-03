let firstNum="", answer;
let secondNum="";
let numText="";
let op="";
let displayText="";
let array=[]; 

function add() {answer=parseInt(firstNum) + parseInt(secondNum);}
function subtract() {answer=parseInt(firstNum) - parseInt(secondNum);}
function multiply() {answer=firstNum * secondNum;}
function divide() {answer=firstNum/secondNum;}

const display=document.querySelector(".display");

const numButtons=document.querySelectorAll(".numButton");

numButtons.forEach(function(numButton){
    numButton.addEventListener("click", function() {
        numText+=numButton.id;
        display.textContent=numText;
        console.log(array);
})
})

const opButtons=document.querySelectorAll(".opButton");

opButtons.forEach(function(opButton){
    opButton.addEventListener("click", function() {
        op=opButton.id;
        display.textContent="";
        array.push(numText);
        array.push(op);
        numText="";
        console.log(array);
})
})

//delete branch from rock paper scissors

// if (array === 3), then when press any operator, it will operate 






/*

/*
NOTE:
- ensure text can't overflow out of display

OVERVIEW:

A) do up interface

1) when key in number - shows up on screen
more numbers can be added to the screen

2) after press operator - "capture" full number

3) repeat 1)

4) after press = (or other operators) - "capture" full number and 
add it to the first number. display answer

5) IF press other operators again, "capture" latest answer and repeat 3)
*/
