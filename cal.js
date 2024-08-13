let current=[];
let sumCurrent=0;
let sum=0;
let symbol="_";
let symbolPre="_";
const num='0123456789';
const displayCurrent= document.querySelector("#displayCurrent");

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
    if(b===0){
        console.log("hi");
        display("n/a");
        return "n/a";
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
        console.log((a + "/" + b));
        return divide(a,b);
    }
    else if (option==="="){
        return;
    }
    else{
        return "n/a";
    }
}
function compile(current){
    let string=""
    for(let i=0; i<current.length; i++){
        string=string+current[i];
    }
    return string;
}
function display(show){
    const content=document.getElementById("dis");
    content.textContent=show;
    displayCurrent.appendChild(content);
}
const buttons=document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click",() =>{
        if(button.id==="clear"){
            current=[];
            sumCurrent=0;
            sum=0;
            symbol="_";
            display(sum);
        }
        else if(sum==="n/a"){
            return display("n/a (plese clear)");
        }
        else if(isNaN(button.id)){
            if(button.id==="="){ 

                 if(symbolPre!=="_"){
                    console.log(sumCurrent);
                    sum=operate(sum,sumCurrent,symbolPre);
                        if(sum==="n/a"){
                            return;
                        }
                    console.log(sum);
                    sumCurrent=0;
                    display(sum);
                    symbol="_"
                }
                else{
                     console.log(sumCurrent);
                     sum=operate(sum,sumCurrent,symbol);
                     console.log(sum);
                     if(sum==="n/a"){
                        return;
                    }
                     display(sum);
                     symbolPre=symbol;
                     sumCurrent=0;
                     symbol="_"
                     
                }
            }
            else if(symbol!=="_"){
                console.log(sumCurrent);
                sum=operate(sum,sumCurrent,symbol);
                sumCurrent=0;
                console.log(sum);
                display(sum);
                symbol=button.id;
                current=[];
            }
            else{
                if(symbol==="_"){ 
                    symbol=button.id;
                    if(sumCurrent!==0){ 
                    sum=sumCurrent;
                    }
                    current=[];
                    display(sum);
                    symbolPre="_";
                }
                else{
                    symbol=button.id;
                    symbolPre="_";
                    current=[];
                }
            }
        }
        else{
        current.push(button.id)
        sumCurrent=compile(current);
        sumCurrent=parseInt(sumCurrent);
        display(sumCurrent);
        }
       
        //display(current);
    });
});