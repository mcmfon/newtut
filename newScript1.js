// delare variable for corect answer
var correct = 0;

//create the questions and increment correct by 1

var answer1 = prompt('which team won the premiership last year');
if (answer1.toUpperCase() === 'CHELSEA') {
	document.write('<p>You have chosen the right answer!</p>');
}
else{
	document.write('<p>this is the worng answer!</p>');
}