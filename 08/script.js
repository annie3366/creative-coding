const messageWrapper = document.getElementById('message');

const add = prompt('3+29=');
const subtract = prompt('32-3=');
const multiply = prompt('29x3=');
const equation = prompt('(3+29-3)x3')

let message = '3+29=' + add + '!\n';
if (add > 32) {
    message += 'Wrong answer!\n';
} else if (add < 32) {
    message += 'Wrong answer!\n';
}
message += '32-3=' + subtract + '!\n';
if (subtract > 29) {
    message += 'Wrong answer!\n';
} else if (subtract < 29) {
    message += 'Wrong answer!\n';
}
message += '29x3= ' + multiply + '!\n'; 
if (multiply > 87) {
    message += 'Wrong answer!\n';
} else if (multiply < 87) {
    message += 'Wrong answer!\n';
}
message += '(3+29-3)x3=' + equation + '!\n';
if (multiply > 87) {
    message += 'Wrong answer!\n';
} else if (multiply < 87) {
    message += 'Wrong answer!\n';
}

messageWrapper.innerText = message;