//CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function backspace(){
    display.value = display.value.slice(0, -1);
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "ERROR";
    }
}
