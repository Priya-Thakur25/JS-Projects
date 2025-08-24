const questions = [
  {
    question: "Which animal is the largest mammal?",
    options: [
      { text: "Elephant", correct: "false" },
      { text: "Blue Whale", correct: "true" },
      { text: "Giraffe", correct: "false" },
      { text: "Shark", correct: "false" }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: [
      { text: "Earth", correct: "false" },
      { text: "Venus", correct: "false" },
      { text: "Mars", correct: "true" },
      { text: "Jupiter", correct: "false" }
    ]
  },
  {
    question: "What is the capital of France?",
    options: [
      { text: "Berlin", correct: "false" },
      { text: "Madrid", correct: "false" },
      { text: "Paris", correct: "true" },
      { text: "Rome", correct: "false" }
    ]
  },
  {
    question: "Which gas do plants release during photosynthesis?",
    options: [
      { text: "Carbon Dioxide", correct: "false" },
      { text: "Oxygen", correct: "true" },
      { text: "Nitrogen", correct: "false" },
      { text: "Hydrogen", correct: "false" }
    ]
  },
  {
    question: "Which language is primarily used for web development?",
    options: [
      { text: "C++", correct: "false" },
      { text: "JavaScript", correct: "true" },
      { text: "Python", correct: "false" },
      { text: "Java", correct: "false" }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-btn");
const nextElement = document.getElementById("Next");

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.options.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetState(){
    nextElement.style.display = "none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerbuttons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextElement.style.display = "block";
}

function showScore(){
    resetState();
    if(score == questions.length) questionElement.innerHTML = `Excellent💥, You scored ${score} out of ${questions.length}!`;
    else questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextElement.innerHTML = "Play Again";
    nextElement.addEventListener("click",StartQuiz)
    nextElement.style.display = "block";
}
nextElement.addEventListener("click", ()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) showQuestion();
    else showScore();

})
StartQuiz();