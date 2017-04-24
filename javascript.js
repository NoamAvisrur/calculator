var operation = {
    num1: "",
    num2: "",
    operator: "",
    result: ""
};
resButtonAble (true, "red");
var digButtons = document.querySelectorAll('.digits button:not(:last-child)');
for (var i = 0; i < digButtons.length; i++){
    digButtons[i].addEventListener("click", clickDigButton);
}  
          
function clickDigButton(event) {
    if (!operation.operator){
        operation.num1 += event.target.dataset.number;
        document.querySelector('.equation_output').textContent = operation.num1;
    }else{
        operation.num2 += event.target.dataset.number;
        document.querySelector('.equation_output').textContent = operation.num2;       
    }
}

var opButtons = document.querySelectorAll('.operators button');

for (var i = 0; i < opButtons.length; i++){
    opButtons[i].addEventListener("click", clickOpButton)
}  
          
function clickOpButton(event) {
    if (operation.num1){
        operation.operator = event.target.dataset.operator;
        document.querySelector('.operator_output').textContent = operation.operator+operation.num1;
        resButtonAble (false, "#eee");
    }else {
         console.log ('please enter a number first'); 
    }
}

document.querySelector('.calcilate button').addEventListener("click", clickResButton);
        
function clickResButton(event) {
    if (!(operation.num1 && operation.num2 && operation.operator)){
        console.log ('chack that num1, operator& num2 is pressed');
        return false;   
    }
    switch (operation.operator) {
        case '+':
            operation.result = parseFloat(operation.num1) + parseFloat(operation.num2);
        break;
        case '-':
            operation.result = parseFloat(operation.num1) - parseFloat(operation.num2);
        break;
        case '*':
            operation.result = parseFloat(operation.num1) * parseFloat(operation.num2);
        break;
        case '/':
            operation.result = parseFloat(operation.num1) / parseFloat(operation.num2);
        break;

    }
    document.querySelector('.equation_output').textContent = operation.result;
    document.querySelector('.operator_output').textContent = "";
    resButtonAble (true, "red");
    var keys = Object.keys(operation);
    for (var i = 0; i <keys.length; i++) {
        operation[keys[i]] = "";
    }    
}

document.querySelector('.digits button:last-child').addEventListener("click", clickClearButton);
        
function clickClearButton(event) {
    document.querySelector('.equation_output').textContent = "";
    document.querySelector('.operator_output').textContent = "";
    resButtonAble (true, "red");
    var keys = Object.keys(operation);
    for (var i = 0; i <keys.length; i++) {
        operation[keys[i]] = "";
    }
}
function resButtonAble (status, color){
        document.querySelector('.calcilate button').disabled = status;
        document.querySelector('.calcilate button').style.borderColor = color;
}

