var counter = document.querySelector();
var answer = document.querySelector()
var wrongAnswer = document.querySelector();
var correctAnswer = document.querySelector();
var beginQuiz = document.querySelector(#beginQuiz);
var quizScore = 0;
var didTimeRunOut;
var didGameStart = false;
var isGameOver = false;

var userInitial = localStorage.getItem("userInitial");

var questions;

beginQuiz.addEventListener("click", commenceQuiz);

