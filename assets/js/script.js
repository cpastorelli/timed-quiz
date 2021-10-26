
// var questionPrompt = document.querySelector(".showQ");
// var answerPrompt = document.querySelector(".showA");
// var showGameOver = document.querySelector(".gameEnd");
 var timerEl= document.querySelector(".timer-count");
// var loss = document.querySelector(".lose");
// var win = document.querySelector(".win");


// var quizScore = 0;
 var timerCount;
// var winCount = 0;
 var lossCount = 0;
 var isWinner = false;
 var timer;


// var userInitial = localStorage.getItem("userInitial");

// var questions;


function startQuiz(){
    isWinner = false;
    
    timerCount = 10;
    
    // document.addEventListener("DOMContentLoaded", function(event) {
    //     document.getElementById("startQuizButton").disabled = true;
    //   });

    startTimer();
    //showQuestions(0);
}
    //localstorage set item
        // var previousQuizInfo = {
    //     username: userInitial.value.trim(),
    //     finalScore: quizScore.value,
    //     timedOut: didTimeRunOut.value,
    // }


//localStorage.setItem("user", JSON.stringify(quizObject));
// OR
    // var quizObject = JSON.stringify(previousQuizInfo);
    // localStorage.setItem("user", quizObject);


// function showQuestions(i) {
    
//     let questionTag =  questions[i].number + ". " + questions[i].question ;
    
//     let optionsTag = '<option value=1>'+ questions[i].answerChoices[0] +'</option>'
//     + '<option value=2>'+ questions[i].answerChoices[1] +'</option>'
//     + '<option value=3>'+ questions[i].answerChoices[2] +'</option>'
//     + '<option value=4>'+ questions[i].answerChoices[3] +'</option>';

//     questionPrompt.innerHTML = questionTag;
//     answerPrompt.innerHTML = optionsTag;

//     //const optionsToMake = answerPrompt.querySelectAll(".showA");

//     //const options = answerPrompt.querySelectAll(".answerChoices");

//     for (index = 0; index < 4; index++) {

//         answerChoices[index].setAttribute("onclick", "selectedAnswer(this)");
//     }

// }

function populate() {

    if (quiz_box.isEnded()) {

        showScore();

    } else {
        var questionEl = document.querySelector(".showQ");
        questionEl.innerHTML = quiz.getQuestionIndex().text;
        var ansChoices = quiz.getQuestionIndex().answerChoices;
        for (var i = 0; i < answerChoices.length; i++) {
            var answerEl = document.getElementById("choice" + i);
            answerEl.innerHTML = answerChoices[i];
            guess("btn" + i, answerChoices[i])
        }
        showProgress();
    }
}


function startTimer() {
   console.log("Start Timer has begun.");
    timer = setInterval(function() {
        
        timerCount--;
        
        timerEl.textContent = timerCount;

        if(timerCount >= 0) {

            if(isWinner && timerCount > 0)
            {
                clearInterval(timer);
                console.log("I am in If statement is winner && timercount > 0");
                gameWin();
            }
        }
         
        if(timerCount === 0) {
            clearInterval(timer);
            gameLose();
        }

    }, 1000);
}

// function selectedAnswer(answer) {

//  let userAnswer = answer.textContent; //get user selected option

//  let correctAnswer = questions[index].answer;

//  const allOptions = answerChoices.children.length;

//  if (userAnswer == correctAnswer) {

//     quizScore += 1;

//     answer.classList.add("correct");

//     answer.insertAdjacentHTML("beforeend", tickIconTag);

//     console.log("Correct Answer!");

//     }else {
//         answer.classList.add("incorrect");

//         answer.insertAdjacentHTML.apply("beforeend", crossIconTag);

//         console.log("Wrong Answer");
//     }

//     for (i = 0; i < allOptions; i++){

//         console.log("I don't know what to do really");

//         //answerChoices..children[i].classList.add("disabled");
//     }

// }

function gameWin(){

    console.log("you won!")

    document.addEventListener("DOMContentLoaded", function(event) {

        document.getElementById("startQuizButton").disabled = false;
      });

    winCount++;

    setWin();
}

function gameLose(){

    console.log("you lost!")

    // document.addEventListener("DOMContentLoaded", function(event) {

    //     document.getElementById("startQuizButton").disabled = false;
    //   });

    lossCount++;

    setLoss();
}

function setWin() {

    win.textContent = winCount;

    localStorage.setItem("winCount", winCounter);
}

function setLoss() {

    loss.textContent = lossCount;

    localStorage.setItem("lossCount", lossCount);
}