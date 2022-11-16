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
  timerId = setInterval(clockTick, 1000);

  // shows starting time
  timerEl.textContent = time;

  getQuestion();
}
function getQuestion() {
}

startBtn.onclick = startQuiz;