// delare variable for corect answer
var correct = 0;
var comres = 'congratulations';
var comres1 = 'you tried but missed one';
var comres2 = 'you only got one correct, you should work harder';
var comres3 = 'you did not get any of the answers correct, you should re-study';

//create the questions and increment correct by 1

var answer1 = prompt('which team won the premiership last year');
if (answer1.toUpperCase() === 'CHELSEA') {
	correct += 1
}

var answer2 = prompt('what is the popular game played with 11 on a team?');
if (answer2.toUpperCase() === 'SOCCER') {
	correct+= 1;
}

var answer3 = prompt('What is the most popular language in the world?');
if (answer3.toUpperCase() === 'ENGLISH') {
	correct += 1;
}

//output the results
document.write('<p>' + 'you got ' + correct + ' out of the 3 questions' + '</p>');

if (correct === 3) {
	document.write('<p>'+ comres + '</p>');
}
else if (correct === 2) {
	document.write('<p>'+ comres1 + '</p>');
}
else if (correct === 1) {
	document.write('<p>'+ comres2 + '</p>');
}
else if (correct < 1) {
	document.write('<p>'+ comres3 + '</p>');
}
