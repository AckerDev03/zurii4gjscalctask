const firstNum = Number(prompt('Enter the first number: '));
const operator = prompt('Enter operator you want to use: ');
const secondNum = Number(prompt('Enter the second number: '));


if (operator == '+') {
    let result = firstNum + secondNum;
    alert('Your result is ' + result);
} else if (operator == '-') {
    result = firstNum - secondNum;
    alert('Your result is ' + result);
} else if (operator == '*') {
    result = firstNum * secondNum;
    alert('Your result is ' + result);
} else if (operator == '/') {
    result = firstNum / secondNum;
    alert('Your result is ' + result);
} else {
    alert('You enter a wrong operator!!!');
}