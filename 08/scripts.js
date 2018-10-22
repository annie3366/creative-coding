const messageWrapper = document.getElementById('message');

const name = prompt('What is your name?');
const age = prompt('What is your age?');
const school = prompt('What school do you go to?');

let message = 'Hello, ' + name + '!\n';
message += 'You are ' + age + ' years old!\n';

if (age > 30) {
 message += 'That\'s old!\n';
} else if (age < 13) {
 message += 'Should you even be on the internet?\n';
}

message += 'You go to ' + school + '!\n'; 

messageWrapper.innerText = message;