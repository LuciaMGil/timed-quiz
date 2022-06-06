var startBtn = $(`#start`);
const answerBtn = $('.answer-text');
var questionID = $('#question');
const answers = Array.from(document.getElementsByClassName('answer-text'));
// const responseMsg = $('#response-message');
const endPage = $('#quiz-end');
const endDiv = $('#end-div');
const submitBtn = $('#submit');
const viewHighscore = $('#highscore');
const highscoresList = $('#highscoresList');
var score = 0;
var questionCounter = 0;
var secondsLeft = 75;
var availableQuestions=[];
var currentQuestion = {};

// Constants - when you get a question right you get 10 points, when you get it wrong you lose 5 points
const correctPoints = 10;
const incorrectPoints = 5;

// Array of objects that contains questions
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

// When you start the quiz, it will display the first question and start the timer
startquiz = () => {
    newQuestions();
    setTime();
};


answerBtn.on('click', event => {
    // Removes previous result
    $('#result').remove();
    // Displays the text of the button you clicked. EX: Alerts
    let chosenAnswer = event.target.innerHTML;
    // If the chosen answer is the same as the questions answer in the array of objects then...
    if (chosenAnswer === currentQuestion.answer) {
        // It will append "Correct!"
        $('#response-message').append(`<h2 id="result">Correct!</h2>`);
        // Add score of 10 points to your total score
        score = score + correctPoints;
    } else {
        // It will append "Inorrect!"
        $('#response-message').append(`<h2 id="result">Incorrect!</h2>`);
        // Subtract score of 5 points to your total score
        score = score + incorrectPoints;
        // Reduce time by 10 seconds
        secondsLeft -= 10;
    
        console.log("This is your score " + score);

    }
    // Adds one to question counter
    questionCounter++;
    // Runs a new question
    newQuestions();
})



// Generates the next question
 newQuestions = () => {
    // Removes previous question
    $('#current-question').remove();
    // Every time a question gets added we use it as an index to move on to the next question
    currentQuestion = questions[questionCounter];
    // If there is another question..
    if (currentQuestion) {
    // Append a new question
    questionID.append(`<h1 id='current-question'>${currentQuestion.question}</h1>`);
    // Add corresponding answer inner text to each question
    answers.forEach((answer, i) => {
        answer.innerHTML = currentQuestion.choices[i];
    })
    } else {
        // If there are no more questions show final page and hide questions container
        endPage.append(`<h2>End of quiz <br> Your total score: ${score} </h2>`);
        $('#questions-container').hide();
        endDiv.show();
        
        localStorage.setItem("mostRecentScore",score);
        
        
    }
};


 setTime = () => {
    var timerInterval = setInterval(function () {
        // Subtract seconds left every second
        secondsLeft--;
        // Add text to the timer
        $('#timer').text(secondsLeft + " seconds left");
        // If seconds left is zero or if there are no more questions stop timer and clear text
        if (secondsLeft === 0 || !currentQuestion) {
            clearInterval(timerInterval);
            $('#timer').text("");
        }
    }, 1000);
 }







submitBtn.on('click', event => {
    event.preventDefault();
    var names = document.querySelector('#name').value;
    const finalScore = $(score);
    const mostRecentScore = localStorage.getItem('mostRecentScore');
    const maxHighscores = 5;
    viewHighscore.append("SCORE: " + mostRecentScore);

   const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

   const scoreObj = {
       score: mostRecentScore,
       name: names,
   };

   highscores.push(scoreObj);

   highscores.sort = (a,b) => {
    //    If b score is higher than a score then put b before a
       return b.scoreObj - a.scoreObj
   }
    //    Cuts list off at 5 
    highscores.splice(5);
    localStorage.setItem('highscores', JSON.stringify(highscores));
    endDiv.hide();

    // Highscores page
    viewHighscore.show();


    
    lastpage();
   

});



lastpage = () => {
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscoresList.text(highscores);
    highscores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`
    }).join("");
    
    
}