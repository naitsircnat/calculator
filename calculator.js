let firstNum, secondNum , answer;
let op="";

const display=document.querySelector(".display");

const numButtons=document.querySelectorAll(".numButton");

let displayText="";
let displayText2="";

const opButtons=document.querySelectorAll(".opButton");

numButtons.forEach(function(numButton){
    numButton.addEventListener("click", function() {
        displayText+=numButton.id;
        display.textContent=displayText;
})
})

opButtons.forEach(function(opButton){
    opButton.addEventListener("click", function() {
        firstNum=displayText;
        op=opButton.id;     

        if (op === "+" || op === "-" || op === "/" || op === "*") {
            numButtons.forEach(function(numButton){
            numButton.addEventListener("click", function() {
                displayText2+=numButton.id;
                display.textContent=displayText2;
              })
        })}
    })
})

function operate(){
    secondNum=displayText2;
    if (op === "+") answer = parseInt(firstNum) + parseInt(secondNum);
    if (op === "-") answer = firstNum - secondNum;
    if (op === "*") answer = firstNum*secondNum;
    if (op === "/") answer = firstNum/secondNum;
    display.textContent=answer;
}

const equalButton=document.querySelector(".equalButton");

equalButton.addEventListener("click", operate)



/*{
    secondNum=displayText;
    if (op === "+") answer = parseInt(firstNum) + parseInt(secondNum);
    if (op === "-") answer = firstNum - secondNum;
    if (op === "*") answer = firstNum*secondNum;
    if (op === "/") answer = firstNum/secondNum;
    firstNum=answer;
    display.textContent=firstNum;

    numButtons.forEach(function(numButton){
        numButton.addEventListener("click", function() {
            displayText="";
            displayText+=numButton.id;
            display.textContent=displayText;
    })
    })
})

*/

// clear button - come back to it 
   
const clearButton=document.querySelector(".clearButton");

clearButton.addEventListener ("click", function() {
    display.textContent="";
    firstNum="";
    secondNum="";
    displayText="";
    op="";
    answer="";
})

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
