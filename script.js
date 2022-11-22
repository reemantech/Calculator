var buttons = document.getElementsByClassName("btn");
var display = document.getElementById("output-eval");
var operand1 = 0;
var operand2 = null;
var operator = null;

function calculation() {
    var value = this.getAttribute('data-value');
    if (value == '+' || value == '-' || value == '/' || value == '*') {
        if (operator != null) {
            operator = value;
        }
        else {
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.innerText += value;
        }

        if (operand1 == 0) {
            display.innerText = 0; // first operator is selected without selecting the operand1
            return;
        }
        // else{

        // }


    }
    else if (value == '%') {
        display.innerText = (parseFloat(display.textContent) / 100).toFixed(4);
    }
    else if (value == 'AC') {
        display.innerText = 0;
        operand1 = 0;
        operand2 = null;
        operator = null;
    }
    else if (value == 'back') {

        var content = display.textContent;
        content = content.substring(0, content.length - 1);
        if (content.length == 0) {
            display.innerText = 0;
            operand1 = 0;
            operand2 = null;
            operator = null;
        } else {
            display.innerText = content;
        }
    }
    else if (value == '=') {
        operand2 = parseFloat(display.textContent);

        // use eval
        display.innerText = parseFloat(eval(display.textContent)).toFixed(4);
        operand2 = null;
        operator = null;
        // show result on the display
    } else {
        if (operand1 == 0) {
            operand1 = value;
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    }

}



for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', calculation);
}