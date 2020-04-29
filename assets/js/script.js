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
var time = 40;
var correct = [];


var startBtn = document.getElementById("start-btn");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var endScreen = document.getElementById("end-screen");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var timerEl = document.getElementById("timer");
var feedbackEl = document.getElementById("feedback");
startBtn.addEventListener("click", startGame);


// endBtn.addEventListener("click", endGame);


function clockTick() {
    // timerId = setInterval(function () {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
}

function startGame() {

    var timerId = setInterval(clockTick, 1000);
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
    if (this.value !== questions[currentQuestionIndex].answer) {
   //show right or wrong on screen use setinterval
        console.log("wrong")
        time -= 15;
        if (time < 0){
            time = 0;
        } 
        timerEl.textContent = time;
        feedbackEl.textContent = "wrong"
   
    } else {
        console.log("right")
          //show right or wrong on screen use setinterval
          //create a cprrect array push the question into the array
          correct.push(questions[currentQuestionIndex]);
          console.log(correct)
          feedbackEl.textContent = "right"
    }
    feedbackEl.setAttribute("class", "feedback")
    
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide")
    }, 1000);
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex === questions.length) {
        console.log("game over")
        endQuiz();
    } else {
        buildQuestionCard();
    }
}

function endQuiz() {
    endScreen.removeAttribute("class", "hide");
    quizScreen.setAttribute("class", "hide");

}
