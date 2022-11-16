// object of all questions and answers
  var quizQuestions =[
	{
		question: "Commonly used data types DO NOT include: ",
		multipleChoice: [
			'A: strings',
			'B: booleans',
			'C: alerts',
            'D: numbers'
		],
		correctAnswer: 'C: alerts'
	},
	{
		question: "The condition in an if / else statement is enclosed within ____.",
		multipleChoice: [
			'A: quotes',
			'B: curly brackets',
			'C: parentheses',
            'D: square brackets'
		],
		correctAnswer: 'C: parentheses'
	},
    {
		question: "Arrays in JavaScript can be used to store ____.",
		multipleChoice: [
			'A: numbers and strings',
			'B: other arrays',
			'C: booleans',
            'D: all of the above'
        ],
		correctAnswer: 'D: all of the above'
	},
    {
		question: "String values must be enclosed within ____ when being assigned to variables.",
		multipleChoice: [
			'A: commas',
			'B: curly brackets', 
			'C: quotes',
            'D: parentheses'
        ],
		correctAnswer: 'C: quotes'
	},
    {
		question: "A very useful tool used during development and debugging for printing content to the debugger is:",
		multipleChoice: [
			'A: JavaScript', 
			'B: terminal / bash', 
			'C: for loops',
            'D: console.log'
        ],
		correctAnswer: 'D: console.log'
	}
];

// global variables defined and HTML elements referenced
var questionIndex = 0;
var time = quizQuestions.length * 15;
var timerId;

var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var responseEl = document.getElementById('response');

// Click the button to start the quiz
function startQuiz() {
// after pushing button it hides the start screen
  var startScreenEl = document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'hide');

  questionsEl.removeAttribute('class');

// countdown timer starts
  timerId = setInterval(countdown, 1000);

  timerEl.textContent = time;

//   after the start screen is hidden it calls the questions function to load
  askQuestion();
}

// updates and displays new questions and multipleChoice answers
function askQuestion() {
    var currentQuestion = quizQuestions[questionIndex];
  
    var titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.question;
  
    choicesEl.innerHTML = '';
  
    for (var i = 0; i < currentQuestion.multipleChoice.length; i++) {
    
      var choice = currentQuestion.multipleChoice[i];
      var choiceNode = document.createElement('button');
      choiceNode.setAttribute('class', 'choice');
      choiceNode.setAttribute('value', choice);
  
      choiceNode.textContent = choice;

      choicesEl.appendChild(choiceNode);
    }
  }

  //   Asks the user to pick an answer from multiple choice quiz
  function pickAnswer(event) {
    var buttonEl = event.target;
  
    // if the user picks nothing, do nothing and make user pick again.
    if (!buttonEl.matches('.choice')) {
      return;
    }
  
    // If the user picks incorrectly, then it subtracts time
    if (buttonEl.value !== quizQuestions[questionIndex].correctAnswer) {

      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
  
      // updates and displays time
      timerEl.textContent = time;
  
    //   displays reponses to answers as Correct or Wrong
      responseEl.textContent = ('Wrong! ' + 'The correct answer is ' + quizQuestions[questionIndex].correctAnswer);
    } else {

      responseEl.textContent = ('Correct! ' + 'The answer is ' + quizQuestions[questionIndex].correctAnswer);
    }
  
    responseEl.setAttribute('class', 'response');
    setTimeout(function () {
      responseEl.setAttribute('class', 'response hide');
    }, 1000);
  
    questionIndex++;
  
    // continues quiz until gameOver
    if (time <= 0 || questionIndex === quizQuestions.length) {
      gameOver();
    } else {
      askQuestion();
    }
  }

// this function counts down the time
  function countdown() {
    
    time--;
    timerEl.textContent = time;
  
    if (time <= 0) {
      gameOver();
    }
  }

//   Ends the quiz and stops the timer
  function gameOver() {
    
    clearInterval(timerId);
  
    var endScreenEl = document.getElementById('end-screen');
    endScreenEl.removeAttribute('class');
  
    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = time;
  
    questionsEl.setAttribute('class', 'hide');
  }

// event listener for start quiz button
startBtn.onclick = startQuiz;

// user clicks on element containing choices
choicesEl.onclick = pickAnswer;