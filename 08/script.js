const messageWrapper = document.getElementById('message');

const name = prompt('3+29=');
const number = prompt('29-3=');
const value = prompt('3x29=');

let message = '3+29=' + name + '!\n';
message += '29-3=' + number + '!\n';
message += '3x29= ' + value + '!\n'; 

messageWrapper.innerText = message;