// DECIDER JS

var score = 0;
var counter = 0;
var scoreMessage = "";

// 5 QUESTIONS
var question1 = "<p>Overall, will it have a positive or negative effect on you?</p>";
var question2 = "<p>Overall, will it have a positive or negative effect on others?</p>";
var question3 = "<p>What effect will it have on the great effort to make the world a safer, easier, and more enjoyable place to live for all?</p>";
var question4 = "<p>What effect would it have on the way caring people might feel about you?</p>";
var question5 = "<p>What effect do you think it would have on the way your future self might think about your current self?</p>";

// SET CONTENT OF COMMENT DIV
function commentPrint(commentMessage) {
	var comment = document.getElementById("comment");
	comment.innerHTML = commentMessage;
};

// SET CONTENT OF QUESTION DIV
function questionPrint(questionMessage) {
	var question = document.getElementById("question");
	question.innerHTML = questionMessage;
};

// OPENING COMMENT
function opener() {
	commentPrint("<h2>WELCOME</h2><p>If you're ready, click the <b>\"Initialize\"</b> button above to begin.</p>");
};
opener();

// INSTRUCTIONS
var howToProceed = function() {
	questionPrint("<p>Click the <b>\"Continue\"</b> button below to see the first of five questions that are designed to reveal if a thing should be done, or better left undone.</p>");
	commentPrint("<h3>Instructions</h3><ul id=\"instructionList\"><li>1. Think of something you are considering doing.</li><li>2. Now, try to clear your mind of all your opinions.</li><li>3. Try to be completely objective in your thinking.</li><li>4. And when answering the questions below, try to be brutally honest.</li></ul><p id=\"goodLuck\">&#9786; Good Luck! &#9786;</p>");
};

// SET BUTTON STATES
function beginButtonOff(state) {
	var beginButton = document.getElementById("beginButton");
	beginButton.disabled = state;
};

function continueButtonOff(state) {
	var continueButton = document.getElementById("continueButton");
	continueButton.disabled = (state)
};

function affirmativeButtonOff(state) {
	var affirmativeButton = document.getElementById("affirmativeButton");
	affirmativeButton.disabled = (state);
};

function negativeButtonOff(state) {
	var negativeButton = document.getElementById("negativeButton");
	negativeButton.disabled = (state);
};

function neitherButtonOff(state) {
	var neitherButton = document.getElementById("neitherButton");
	neitherButton.disabled = (state);
};

// INITIAL STATE SETTINGS
redLinePos("left: 50%");
beginButtonOff(false);
continueButtonOff(true);
affirmativeButtonOff(true);
negativeButtonOff(true);
neitherButtonOff(true);

// BEGIN BUTTON
function begin() {
	continueButtonOff(false);
	beginButtonOff(true);
	howToProceed();
};

// SET POSITION OF RED LINE ON SCALE
function redLinePos(position) {
	var redLine = document.getElementById("redLine");
	redLine.style = position;
};

// MATCHES SCORE AND RED LINE POSITION
function redSlider() {
	if (score > 9) {
		redLinePos("left: 5%");
	} else if (score === 8) {
		redLinePos("left: 10%");
	} else if (score === 6) {
		redLinePos("left: 20%");
	} else if (score === 4) {
		redLinePos("left: 30%");
	} else if (score === 2) {
		redLinePos("left: 40%");
	} else if (score === 0) {
		redLinePos("left: 50%");
	} else if (score === -2) {
		dredLinePos("left: 60%");
	} else if (score === -4) {
		redLinePos("left: 70%");
	} else if (score === -6) {
		redLinePos("left: 80%");
	} else if (score === -8) {
		redLinePos("left: 90%");
	} else if (score < -9) {
		redLinePos("left: 95%");
	}
};

// POSITIVE BUTTON
function affirmative() {
	continueButtonOff(false);
	negativeButtonOff(true);
	neitherButtonOff(true);
	affirmativeButtonOff(true);
	score += 2;
	redSlider();
	// COMMENT AND PROMPT
	if (score > 0  && score < 6) {
		commentPrint("<p>It's looking good.<br><br><br>Click <b>\"Continue\"</b></p>");
	} else if ( score > 5) {
		commentPrint("<p>This one's looking really good.<br><br><br>Click <b>\"Continue\"</b></p>");
	} else if (score < 1 && score > -3) {
		commentPrint("<p>This one might be making a turn for the better.<br><br><br>Click <b>\"Continue\"</b></p>");
	} else if (score < -2) {
		commentPrint("<p>This one might be a lost cause.<br><br><br>Click <b>\"Continue\"</b></p>");
	}
};

// NEGATIVE BUTTON
function negative() {
	continueButtonOff(false);
	affirmativeButtonOff(true);
	negativeButtonOff(true);
	neitherButtonOff(true);
	score -= 2;
	redSlider();
	// COMMENT AND PROMPT
	if (score > 0  && score < 6) {
		commentPrint("<p>This one might be making a turn for the worse.<br><br><br>Click <b>\"Continue\"</b></p>");
	} else if ( score > 5) {
		commentPrint("<p>This one still might be a good idea.<br><br><br>Click <b>\"Continue\"</b></p>");
	} else if (score < 1 && score > -3) {
		commentPrint("<p>It's not looking so good.<br><br><br>Click <b>\"Continue\"</b></p>");
	} else if (score < -2) {
		commentPrint("<p>This one is probably a lost cause.<br><br><br>Click <b>\"Continue\"</b></p>");
	}
};

// NEITHER BUTTON
function neither() {
	continueButtonOff(false);
	affirmativeButtonOff(true);
	negativeButtonOff(true);
	neitherButtonOff(true);
	commentPrint("<p>No effect isn't necessarily a bad thing, but it could be.<br><br><br>Click <b>\"Continue\"</b></p>");
}

// NEXT QUESTION BUTTON
function continueBtn() {
	affirmativeButtonOff(false);
	negativeButtonOff(false);
	neitherButtonOff(false);
	continueButtonOff(true);
	counter += 1;
	var questionsAnswered = counter - 1;
	commentPrint("<p><br>Current score = " + score + "<br><br>Questions answered = " + questionsAnswered + " of 5</p>");
	// DISPLAY QUESTIONS
	if (counter === 1) {
		questionPrint(question1);
	} else if (counter === 2) {
		questionPrint(question2);
	} else if (counter === 3) {
		questionPrint(question3);
	} else if (counter === 4) {
		questionPrint(question4);
	} else if (counter === 5) {
		questionPrint(question5);
	} else if (counter === 6) {
		questionPrint("");
		if (score < -3) {
			// SETS RESULTS
			scoreMessage += "is a total piece of garbage";
		} else if (score > -4 && score < 1) {
			scoreMessage += "reeks of potential problems";
		} else if (score > 0 && score < 3) {
			scoreMessage += "isn't anything special";
		} else if (score > 2 && score < 8) {
			scoreMessage += "is probably a win";
		} else if (score > 7) {
			scoreMessage += "is a real gem";
		}
		affirmativeButtonOff(true);
		negativeButtonOff(true);
		neitherButtonOff(true);
		commentPrint("<p><b>All done</b>.<br><br>You scored a " + score + ", which " + scoreMessage + " on the scale of good ideas.</p>");
		questionPrint("<p>If you have another question, let's go again.</p><br><button type=button\" onclick=\"reset()\"> Reset </button>");
	}
};

// RESET BUTTON
function reset() {
	opener();
	questionPrint("<div id=\"nightRider\"></div>");
	redLinePos("left: 50%");
	beginButtonOff(false);
	score = 0;
	counter = 0;
	scoreMessage = "";
};
