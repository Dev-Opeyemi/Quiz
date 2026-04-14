// QUESTIONS ARE STORED HERE
questions = [
  {
    questionText: "What is 2 + 2?",
    options: [2, 3, 4, 5],
    correctAnswer: "c",
  },

  {
    questionText: "Which language is used for web development?",
    options: ["Python", "HTML", "C++", "Java"],
    correctAnswer: "b",
  },

  {
    questionText: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Power Unit",
      "Control Processing Unit",
    ],
    correctAnswer: "a",
  },

  {
    questionText: "Which of these is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Float", "Undefined"],
    correctAnswer: "c",
  },

  {
    questionText: "What will 5 === '5' return?",
    options: [true, false, "both", "none"],
    correctAnswer: "b",
  },
];

const alphabet = ["a", "b", "c", "d"];
let currentQuestionIndex = 0;
let score = 0;

// grabbing all the elements to be displayed on screen
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const scoreScreen = document.getElementById("score-screen");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const finalScore = document.getElementById("final-score");

// to show a specific screen, and hide the others
function showScreen(screen) {
  welcomeScreen.style.display = "none";
  quizScreen.style.display = "none";
  scoreScreen.style.display = "none";
  screen.style.display = "block";
}

// START QUIZ BUTTON
document.getElementById("welcome-screen").querySelector("button").onclick =
  function () {
    showScreen(quizScreen);
    showQuestion();
  };

// FUNCTION TO SHOW QUESTION
function showQuestion() {
  const question = questions[currentQuestionIndex];

  questionNumber.innerHTML = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  questionText.innerHTML = question.questionText;

  // clear previous options and feedback
  optionsContainer.innerHTML = "";
  feedback.innerHTML = "";

  for (let i = 0; i < question.options.length; i++) {
    const button = document.createElement("button");

    button.innerHTML = `${alphabet[i]}. ${question.options[i]}`;

    button.onclick = function () {
      verifyAnswer(alphabet[i]);
    };

    optionsContainer.appendChild(button);
  }
}

// FUNCTION TO VERIFY IF ANSWER IS CORRECT
function verifyAnswer(answer) {
  if (answer === questions[currentQuestionIndex].correctAnswer) {
    score++;
    console.log("Correct!✅");
  } else {
    console.log("Wrong!❌");
  }

  // wait a little then move to next question
  setTimeout(showNextQuestion, 500);
}

// FUNCTION TO SHOW NEXT QUESTION AFTER PREVIOUS ONE IS VERIFIED
function showNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    finalScore.innerHTML = `You scored <br> <span>${score}</span> of <span>${questions.length}</span>`;
    showScreen(scoreScreen);
  }
}

// PLAY AGAIN BUTTON
document.getElementById("score-screen").querySelector("button").onclick =
  function () {
    currentQuestionIndex = 0;
    score = 0;
    showScreen(welcomeScreen);
  };
