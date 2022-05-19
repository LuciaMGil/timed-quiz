var welcome = $(`#welcome`);
var btn = $(`#start`);
var startQuiz = $('#unhide');
var questionTitle = $('#questionTitle');
var selectionList = $('#selectionList');
var i = 0;
const questions = [ 
    {
    question1: "Commonly used data types DO NOT include?",
    choices: ["strings", "booleans", "alerts", "numbers",],
    answer: 2,
    id: "007"
    },
    {
        question2: "The condition in an if/else statement is enclosed within _____.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets",],
        answer: 1
    }
    
];





welcome.append(`<h2>Coding Quiz Challenge</h2> `);
welcome.append(`<p>Try to answer the following code-related questions within the time limit.<br> Keep in mind that incorrect answers will penalize your score and time by 10 seconds!</p> `)

// Hide the start page when clicked and show the first question
btn.on('click',function () {
        console.log("Quiz has been started");
        $("#hide").hide();
        startQuiz.append('<h3>Question</h3>');
    
    }
)

