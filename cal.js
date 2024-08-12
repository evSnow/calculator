let current=[];
let sumCurrent=0;
let sum=0;
let symbol=0;
const num='0123456789';
let userChoice

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b==0){
        return false;
    }
    return a/b;
}

function operate(a,b,option){
    if(option==="+"){
        console.log(a + "+" + b);

        return add(a,b)
    }
    else if (option==="-"){
        return subtract(a,b);
    }
    else if (option==="*"){
        return multiply(a,b);
    }
    else if (option==="/"){
        return divide(a,b);
    }
    else if (option==="="){
        return divide(a,b);
    }
    else{
        return "error";
    }
}
function compile(current){
    let string=""
    for(let i=0; i<current.length; i++){
        string=string+current[i];
    }
    return string;
}
function display(current){
    console.log(current.length);
    for(let i=0; i<current.length; i++){
        console.log(current[i]);
        
    }
}
const buttons=document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click",() =>{

        if(isNaN(button.id)){
            if(button.id==="="){ 
            console.log(sumCurrent);
            sum=operate(sum,sumCurrent,symbol);
            console.log(sum);
            }
            else{
                symbol=button.id
                sum=sumCurrent;
                current=[];
            }
        }
        else{
        current.push(button.id)
        sumCurrent=compile(current);
        sumCurrent=parseInt(sumCurrent);
        }
       
        //display(current);
    });
});