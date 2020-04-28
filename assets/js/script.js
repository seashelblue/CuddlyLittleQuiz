var questions = [
    {
        question: 'What color is the ocean?',
        options: ['purple', 'blue', 'orange'],
        answer: 'blue'
    },
    {
        question: 'Is blue a primiary color?',
        options: ['yes', 'no', 'maybe'],
        answer: 'yes'
    },
    {
        question: 'How does JavaScript make you feel?',
        options: ['peachy', 'happy', 'fustrated'],
        answer: 'peachy'
    },
    {
        question: 'What color is the grass?',
        options: ['yellow', 'blue', 'green'],
        answer: 'green',
    },
    {
        quesetion: 'Why is Beyoncé not a president a.idk b.i dunno c. idk',
        options: ['idk', 'i dunno', 'idk'],
        answer: 'i dunno'
    },

]

var currentQuestionIndex = 0;
var time = 60;
var timerId = setInterval(clockTick, 1000)


var startBtn = document.getElementById("start-btn");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var endScreen = document.getElementById("end-screen");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");

startBtn.addEventListener("click", startGame);

function clockTick() {
    time--;
    //use text content to show time on screen
}

function startGame() {
    startScreen.setAttribute("class", "hide");
    quizScreen.removeAttribute("class", "hide");
    buildQuestionCard();
}


function buildQuestionCard() {
    var currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    choicesEl.innerHTML = "";

    currentQuestion.options.forEach(function (choice, i) {

        var buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "choice");
        buttonEl.setAttribute("value", choice);

        buttonEl.textContent = choice;
        buttonEl.onclick = questionClick;

        choicesEl.appendChild(buttonEl);
    })


}

function questionClick() {
    if(this.value !== questions[currentQuestionIndex].answer) {
        console.log("wrong")
    } else {
        console.log("right")
    }
    currentQuestionIndex++;
    if(currentQuestionIndex === questions.length) {
        console.log("game over")
        endQuiz();
    } else {
    buildQuestionCard();
    }
}