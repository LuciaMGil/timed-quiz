var startPage = $(`#startpage`);
var startBtn = $(`#start`);
const answerBtn = $('.answer-text');
var startQuiz = $('#unhide');
var questionsContainer = $('#questions-container');
var questionID = $('#question');
const answers = Array.from(document.getElementsByClassName('answer-text'));
const responseMsg = $('#response-message');
const endPage = $('#quiz-end');
var currentQuestion = {};
var acceptedAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions=[];

// Constants
const correctPoints = 10;
const maxQuestions = 3;

const questions = [ 
    {
        question: "Commonly used data types DO NOT include?",
        choices: ["strings", "booleans", "alerts", "numbers",],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets",],
        answer: "curly brackets"
    },
    {
        question: "THIRD",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets",],
        answer: "quotes"
    }
    
];

// Start page message
startPage.append(`<h2>Coding Quiz Challenge</h2><p>Try to answer the following code-related questions within the time limit.<br> Keep in mind that incorrect answers will penalize your score and time by 10 seconds!</p> `);


// Hide the start page when clicked and show the first question
startBtn.on('click', function () {
    console.log ("Quiz has begun");
    $('#hide').hide();
    $('#questions-container').show();
    startquiz();
});

answerBtn.on('click', event => {
    $('#result').remove();
    console.log(currentQuestion);
    let chosenAnswer = event.target.innerHTML
    if (chosenAnswer === currentQuestion.answer) {
        responseMsg.append(`<h1 id="result">Correct</h1>`);
    } else {
        responseMsg.append(`<h1 id="result">INCORRECT!</h1>`);
    }
    questionCounter++;
    newQuestions();
})

// Start the quiz at zero and run the new questions function
startquiz = () => {
    questionCounter = 0;
    score = 0;
    newQuestions();
};


// Append random questions to 
 newQuestions = () => {
    $('#current-question').remove();
    console.log(questionCounter);
    currentQuestion = questions[questionCounter];
    if (currentQuestion) {
    questionID.append(`<h1 id='current-question'>${currentQuestion.question}</h1>`);
    answers.forEach((answer, i) => {
        answer.innerHTML = currentQuestion.choices[i];
    })
    } else {
        endPage.append(`<h2>End of quiz <br> Your score: </h2>`);
        $('#questions-container').hide();
        endPage.show();
    }
};

