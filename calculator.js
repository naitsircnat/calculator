let answer;
let numText="";
let secondNum="";
let op="";
let displayText="";
let array=[];

function add() {answer=parseInt(array[0]) + parseInt(secondNum)}
function subtract() {answer=parseInt(array[0]) - parseInt(secondNum);}
function multiply() {answer=parseInt(array[0]) * parseInt(secondNum);}
function divide() {answer=parseInt(array[0]) / parseInt(secondNum);}

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
        console.log(array);

        if (numText!=0){
            numButtons.forEach(function(numButton){
                numButton.addEventListener("click", function() {
                    secondNum="";
                    display.textContent="";
                    secondNum+=numButton.id;
                    display.textContent=secondNum;        
                })
            })

            if (secondNum!==0){
                opButtons.forEach(function(opButton){
                    opButton.addEventListener("click", function() {
                        operate();
                        display.textContent=answer;
                        array=[]
                        numText=answer;
                        array.push(answer);
                        array.push(opButton.id);
                        console.log(array);
                    })
                })
            }
        }
    })
})

const equalButton=document.querySelector(".equalButton");

equalButton.addEventListener("click", function(){
    array.push(secondNum);
    operate();
    display.textContent=answer;
    console.log(array)
    console.log(answer);  
    numText="";
})


// if (array === 3), then when press any operator, it will operate 

/*

/*
NOTE:
- ensure text can't overflow out of display

OVERVIEW:

1) after first num and second num is operated on, answer = first num

*/
