const display = document.getElementById('display');

const buttons = document.querySelectorAll('th');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var value = button.innerText;

        if (value == 'Reset') {
            display.innerText = '';
        }
        if (value != 'Reset' &&  value != '=') {
            display.innerText +=  value;
        }
        if (value == '=') {
            const result = eval(display.innerText);
            display.innerText = result;
        }

    })
})