var firstInput = prompt('Enter the first number');
var firstNum = parseInt(firstInput);
var highNumber = prompt('Enter the highest number that you can think of');
var numGenerated = Math.floor(Math.random() * highNumber - firstNum + 1) + firstNum;
var newMessage = '<p>' + 'The number generated was ' + numGenerated + ' , which is greater than ' + firstNum ;
newMessage += ' and less than ' + highNumber + '</p>';
document.write(newMessage);