var startBtn = $(`#start`);
const answerBtn = $('.answer-text');
var questionID = $('#question');
var timer = $('#timer');
const answers = Array.from(document.getElementsByClassName('answer-text'));
const responseMsg = $('#response-message');
const endPage = $('#quiz-end');
const endDiv = $('#end-div');
const submitBtn = $('#submit');
const viewHighscore = $('#highscore');
var score = 0;
var questionCounter = 0;
var secondsLeft = 75;
var availableQuestions=[];
var currentQuestion = {};

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

// Hides the start page when clicked and starts the quiz
startBtn.on('click', function () {
    $('#start').hide();
    $('#questions-container').show();
    startquiz();
});

// Start the quiz at zero and run the new questions function
startquiz = () => {
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
    // const highscores = JSON.parse(localStorage.getItem("score", JSON.stringify(score)));
    // console.log("this is the highscore: " + highscores);

    // const scores = {
    //     score: 
    // }
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
        if (secondsLeft === 0 || !currentQuestion) {
            clearInterval(timerInterval);
            timer.text("");
        }
    }, 1000);
 }

submitBtn.on('click', event => {
    event.preventDefault();
    // Get data from input box
    var names = document.querySelector('#names').value;
    // If nothing is saved then save an empty array
    if(localStorage.getItem('names') == null) {
        localStorage.setItem('names', '[]');
    }

    //  Add old data to new data
    var oldData = JSON.parse(localStorage.getItem('names'));
    oldData.push(names);

    // Save old and new data
    localStorage.setItem('names', JSON.stringify(oldData));
    // window.localStorage.setItem("allNames", names);
    endDiv.hide();
    viewHighscore.show();
    // var retrievedName = localStorage.getItem('allNames');
    // var retrievedScore = localStorage.getItem('score');
    // viewHighscore.append("SCORE: " + retrievedName + " " + retrievedScore);

})

