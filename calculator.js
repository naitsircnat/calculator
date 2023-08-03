let answer;
let numText="";
let op="";
let displayText="";
let array=[]; 

function add() {answer=parseInt(array[0]) + parseInt(array[2]);}

function subtract() {answer=parseInt(array[0]) - parseInt(array[2]);}

function multiply() {answer=parseInt(array[0]) * parseInt(array[2]);}

function divide() {answer=parseInt(array[0]) / parseInt(array[2]);}

function operate() {
    if (array[1]==["+"]) {add()}; 

    if (array[1]==["-"]) {subtract()}; 

    if (array[1]==["*"]) {multiply()}; 

    if (array[1]==["/"]) {divide()}; 
}

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
        array.push(numText);
        array.push(op);
        numText="";
        console.log(array);
})
})

const equalButton=document.querySelector(".equalButton");

equalButton.addEventListener("click", function(){
    array.push(numText);
    console.log(array[1]);
    operate();
    display.textContent=answer;
    console.log(answer)  
    numText="";
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
