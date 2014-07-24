function Question(questionText, answerOne, answerTwo, answerThree, answerFour, correctAnswer, solution) {
  this.questionText = questionText;
  this.answerOne = answerOne;
  this.answerTwo = answerTwo;
  this.answerThree = answerThree;
  this.answerFour = answerFour;
  this.correctAnswer = correctAnswer
  this.solution = solution;
}
var questionNumber = 0;
var totalCorrect = 0;

var questions = [];
questions.push(new Question("Luigi's name was inspired by:",
								"A pizzeria near Nintendo of America's headquarters named Mario and Luigi's",
								"A play on words with 'ruigi', which is Japanese for 'similar'",
								"Super Luigi Plumbing located in Brooklyn, New York",
								"Luigi is the Italian version of Ludwig, which means famous warrior",
								"2",
								"Mario creator Miyamoto liked that 'ruigi' means 'similar' in Japanese, and Luigi was designed to have the same size, shape and gameplay of Mario"
								));

questions.push(new Question("Why does Link have long underwear in Ocarina of Time?",
								"To prevent him from looking too cool, and therefore not fitting with Nintendo's style",
								"Link’s clothing is designed to match medieval clothing",
								"It was decided that if the legs were not clothed muscles would need to be rendered, which was too complex for the Nintendo 64",
								"In order to align with the color palate used in the original NES game",
								"1",
								"The wife of Zelda designer Yoshiaki Koizumi believed the original Link in Ocarina of Time funny, particularly his nose. Koizumi redesigned link to look more handsome, but added long underwear to prevent him from looking \"too cool\"."
								));

questions.push(new Question("The famous phrase \"I took an arrow in the knee\" in Skyrim originates from which source:",
								"The internet forum 4chan user Klanklannon, in a discussion when the game was first announced",
								"The Shakesperean play Hamlet, spoken by the character Polonius",
								"An inside joke between Skyrim designers Adam Adamowicz and Todd Howard",
								"The 2007 book \"The Name of the Wind\"",
								"4",
								"While never confirmed by Bethesda, the phrase \"Took an arrow in the knee\" appears in the 2007 fantasy novel \"The Name of the Wind\", and is believed to be the source of this phrase."
								));

questions.push(new Question("Two masked men stole 6,000 copies of which video game prior to its release by colliding with a delivery truck and using tear gas?",
								"Halo 3",
								"Titanfall",
								"Call of Duty: Modern Warfare 3",
								"Elder Scrolls: Skyrim",
								"3",
								"Two days prior to its release, two men in Paris stole 6,000 copies of Call of Duty: Modern Warfare 3, at a street value of €400,000"
								));

questions.push(new Question("Minecraft was originally called:",
								"Cave Game",
								"Rubydung",
								"World Dig",
								"Minecraft (the name has never been changed)",
								"1",
								"Minecraft's original name was simply \"Cave Game\""
								));

$(document).ready(function() {
	newGame();

	$('#submit').click(function() {
  		if($('input[name=answer]:checked').val() == questions[questionNumber].correctAnswer) {
  			$('#answer-text').find('h3').html("You are correct!");
  			totalCorrect++;
  		}
  		else {
  			$('#answer-text').find('h3').html("You are incorrect!");
  		}
  		$('#answer-text').find('h3').show();
  		$('#answer-text').find('p').show();
  		$('#answer-text').find('p').html(questions[questionNumber].solution);
  		questionNumber++;
  		$('#next').show();
  		$('#submit').hide();
  		console.log(totalCorrect);
  	});

  	$('#next').click(function() {

  		$('#next').hide();
  		$('#submit').show();
  		$('#answer-text').find('p').hide();
  		$('#answer-text').find('h3').hide();
  		if(questionNumber == 5) {
  			$('.answer-options').hide();
  			$('#submit').hide();
  			$('#answer-text').find('p').hide();
  			$('#answer-text').find('h3').hide();
  			$('#again').show();
  			$('.question-text').find('p').html("Congratulations, you got " + totalCorrect + " out of 5 correct");
  		}
  		else {
  			updateText();  			
  		}
  	});
  	$('#again').click(function() {
  		newGame();
  	});
});

var newGame = function () {
	questionNumber = 0;
	totalCorrect = 0;
	$('.answer-options').show();
	$('#submit').show();
	$('#next').hide()
	$('#again').hide();
	updateText();
}

var updateText = function () {
	$('.question-text').find('p').html(questions[questionNumber].questionText);
	$(".answer-options span:eq(0)").html(questions[questionNumber].answerOne);
	$(".answer-options span:eq(1)").html(questions[questionNumber].answerTwo);
	$(".answer-options span:eq(2)").html(questions[questionNumber].answerThree);
	$(".answer-options span:eq(3)").html(questions[questionNumber].answerFour);
}
