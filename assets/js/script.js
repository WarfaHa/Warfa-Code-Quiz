// list of all questions and answers
  var quizQuestions =[
	{
		question: "Commonly used data types DO NOT include: ",
		answers: [
			'A: strings',
			'B: booleans',
			'C: alerts',
            'D: numbers'
		],
		correctAnswer: 'C: alerts'
	},
	{
		question: "The condition in an if / else statement is enclosed within ____.",
		answers: [
			'A: quotes',
			'B: curly brackets',
			'C: parentheses',
            'D: square brackets'
		],
		correctAnswer: 'C: parentheses'
	},
    {
		question: "Arrays in JavaScript can be used to store ____.",
		answers: [
			'A: numbers and strings',
			'B: other arrays',
			'C: booleans',
            'D: all of the above'
        ],
		correctAnswer: 'D: all of the above'
	},
    {
		question: "String values must be enclosed within ____ when being assigned to variables.",
		answers: [
			'A: commas',
			'B: curly brackets', 
			'C: quotes',
            'D: parentheses'
        ],
		correctAnswer: 'C: quotes'
	},
    {
		question: "A very useful tool used during development and debugging for printing content to the debugger is:",
		answers: [
			'A: JavaScript', 
			'B: terminal / bash', 
			'C: for loops',
            'D: console.log'
        ],
		correctAnswer: 'D: console.log'
	}
];

// global variables
var questionIndex = 0;
var time = quizQuestions.length * 15;
var timerId;

// references HTML elements
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var responseEl = document.getElementById('response');

function startQuiz() {
  // references the 'start-screen' element and hides it
  var startScreenEl = document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'hide');

  // un-hides the questions section
  questionsEl.removeAttribute('class');

  // starts the timer
  timerId = setInterval(countdown, 1000);

  // shows starting time
  timerEl.textContent = time;

  getQuestion();
}
function getQuestion() {
    // get current question object from array
    var currentQuestion = quizQuestions[questionIndex];
  
    // update title with current question
    var titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.question;
  
    // clear out any old question choices
    choicesEl.innerHTML = '';
  
    // loop over choices
    for (var i = 0; i < currentQuestion.answers.length; i++) {
      // create new button for each choice
      var choice = currentQuestion.answers[i];
      var choiceNode = document.createElement('button');
      choiceNode.setAttribute('class', 'choice');
      choiceNode.setAttribute('value', choice);
  
      choiceNode.textContent = choice;
  
      // display on the page
      choicesEl.appendChild(choiceNode);
    }
  }

  function countdown() {
    // counts down the time
    time--;
    timerEl.textContent = time;
  
    // checks to see if time is up
    if (time <= 0) {
      quizEnd();
    }
  }

  
startBtn.onclick = startQuiz;