let firstNum="";
let secondNum="";
let op="";
//let answer;

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
            //to clear display first
            secondNum="";
            display.textContent="";
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
            console.log(firstNum);
        }

        else if (firstNum!=="" && op==""){
            op=opButton.id;
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



/*

/*
NOTE:
- ensure text can't overflow out of display

OVERVIEW:

1) when key in number - shows up on screen
more numbers can be added to the screen

2) after press operator - "capture" full number

3) repeat 1)

4) after press = (or other operators) - "capture" full number and 
add it to the first number. display answer

5) IF press other operators again, "capture" latest answer and repeat 3)
*/
