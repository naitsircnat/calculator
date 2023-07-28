/*let firstNum, secondNum, op;

function operate() {

}
*/

const display=document.querySelector(".display");

const numButtons=document.querySelectorAll(".numButton")

let displayText;
    
numButtons.forEach(function(numButton){
    numButton.addEventListener("click", function() {
        displayText+=numButton.id;
        display.textContent=displayText;
    })
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