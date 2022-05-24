var startPage = $(`#startpage`);
var startBtn = $(`#start`);
const answerBtn = $('.answer-text');
var startQuiz = $('#unhide');
var questionsContainer = $('#questions-container');
var questionID = $('#question');
var timer = $('#timer');
var secondsLeft = 75;
const answers = Array.from(document.getElementsByClassName('answer-text'));
const responseMsg = $('#response-message');
const endPage = $('#quiz-end');
const endDiv = $('#end-div');
const submitBtn = $('#submit');
var input = $('#saveServer');
var currentQuestion = {};
var acceptedAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions=[];

// Constants
const correctPoints = 10;
const incorrectPoints = 5;

const questions = [ 
    {
        question: "Commonly used data types DO NOT include?",
        choices: ["Strings", "Booleans", "Alerts", "Numbers",],
        answer: "Alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        choices: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets",],
        answer: "Curly brackets"
    },
    {
        question: "Arrays in Javascript are used to store _____.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above",],
        answer: "All of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["Commas", "Parentheses", "Quotes", "Curly Brackets",],
        answer: "Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "Terminal/Bash", "For loops", "Console.log",],
        answer: "Console.log"
    }
    
];

// Start page message
startPage.append(`<h2>Coding Quiz Challenge</h2><p>Try to answer the following code-related questions within the time limit.<br> Keep in mind that incorrect answers will penalize your score and time by 10 seconds!</p> `);


// Hide the start page when clicked and show the first question
startBtn.on('click', function () {
    console.log ("Quiz has begun");
    $('#start').hide();
    $('#questions-container').show();
    startquiz();
    
});
// Start the quiz at zero and run the new questions function
startquiz = () => {
    questionCounter = 0;
    score = 0;
    newQuestions();
    setTime();
};

answerBtn.on('click', event => {
    $('#result').remove();
    console.log(currentQuestion);
    let chosenAnswer = event.target.innerHTML
    if (chosenAnswer === currentQuestion.answer) {
        responseMsg.append(`<h2 id="result">Correct!</h2>`);
        score = score + correctPoints;
        console.log("This is your score " + score);
    } else {
        responseMsg.append(`<h2 id="result">INCORRECT!</h2>`);
        score = score + incorrectPoints;
        secondsLeft -= 10;
        console.log("This is your score " + score);
    }
    
    questionCounter++;
    
    newQuestions();
})



// Append random questions to 
 newQuestions = () => {
   
    $('#current-question').remove();
    // console.log(questionCounter);
    currentQuestion = questions[questionCounter];
    if (currentQuestion) {
    questionID.append(`<h1 id='current-question'>${currentQuestion.question}</h1>`);
    answers.forEach((answer, i) => {
        answer.innerHTML = currentQuestion.choices[i];
    })
    } else {
        endPage.append(`<h2>End of quiz <br> Your total score: ${score} </h2>`);
        $('#questions-container').hide();
        endDiv.show();
        
    }
};


 setTime = () => {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.text(secondsLeft + " seconds left");
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
 }

submitBtn.on('click', event => {
    event.preventDefault();

    var names = document.querySelector('#names').value;
    console.log(names);
    
    window.localStorage.setItem("allNames", names);
})