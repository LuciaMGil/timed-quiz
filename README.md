# timed-quiz
<!-- PSUEDO CODE -->
<!--
1. Start with a webpage with an H1 that says "Coding Quiz Challenge".
2. Add a p tag that says "try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score and time by 10 seconds!
3. Add a start button that says Start Quiz, when clicked: new page shows and timer starts. ("on" jquery?)
4. Create and array or object with the questions with the questions 
5. *** all questions will have same font and color + hover so you can add to all *** SEE EVENT BUBBLING??
6. Add timers interval that starts at first question at 75 seconds, subtracting seconds, when a question is wrong subtract 10 seconds.  *** SEE WEB API ACTIVITY 9 TIMERS INTERVALS
7. if right one is clicked then set item to local storage ( if incorrect, next page and --subtract 10 seconds, else add to local storage ** dont forget json stringify)
8. need a variable for score
9.
10.
 -->
## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```