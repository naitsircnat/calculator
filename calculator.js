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
            console.log(op)
            operate();
            display.textContent=answer;
            firstNum=answer;
            console.log(firstNum);
        }
    })
})


//when equal is pressed
/*
const equalButton=document.querySelector(".equalButton");

equalButton.addEventListener("click", function(){
    operate();
    display.textContent=answer;
    console.log(answer)  
    //numText="";
})
/*




/*
        if (op!=null){
            numButtons.forEach(function(numButton){
                numButton.addEventListener("click", function() {
                    display.textContent="";
                    secondNum+=numButton.id;
                    display.textContent=secondNum;
                    console.log(secondNum);
                })*/
            
/*
        if (op!=null){
            opButtons.forEach(function(opButton){
                opButton.addEventListener("click", function() {
                    operate();
                    display.textContent=answer;
                    op=opButton.id;
                    numText="";
            })
            })
        }
    }
)})
*/



/*
if (firstNum > 0 && secondNum > 0){
    console.log("test");
    opButtons.forEach(function(opButton){
        opButton.addEventListener("click", function() {
        display.textContent=""
        operate();
        console.log(answer);
        display.textContent=answer; 
    })})
}
*/

/*
if (op==="+"){{
console.log("notNull");
    numButtons.forEach(function(numButton){
        numButton.addEventListener("click", function() {
            display.textContent="";
            secondNum+=numButton.id;
            display.textContent=secondNum;
            console.log(secondNum);
        })
    
    opButtons.forEach(function(opButton){
        opButton.addEventListener("click", function() {
        display.textContent=""
        operate();
        console.log(answer);
        display.textContent=answer; 
    })})
})}}
*/

/*
if (op!=null){
    opButtons.forEach(function(opButton){
        opButton.addEventListener("click", function() {
            operate();
            display.textContent=answer;
            op=opButton.id;
            numText="";
    })
    })
}
*/



/*
how to store second number without pressing =
https://stackoverflow.com/questions/73654630/calculate-result-after-clicking-an-operator-on-calculator

CRUX? - 2nd number only adds to array when = is pressed

try back old way where array wasn't used?

*/


// if (array === 3), then when press any operator, it will operate 

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
