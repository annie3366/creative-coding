const messageWrapper = document.getElementById('message');

const one = parseInt(prompt('Enter first number'));
const two = parseInt(prompt('Enter second number to add'));
const three = parseInt(prompt('Enter third number to subtract'));
const four = parseInt(prompt('Enter fourth number to multiply'));

const x= (one+two-three)*four

let message = '(' + one + ' + ' + two + ' - ' + three + ') * ' + four + ' = ' + x;

messageWrapper.innerText = message;