
const quizData = [
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "Nacl2"],
        answer: "H2O"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Which actor played the role of Tony Stark in the Iron Man movies?",
        options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
        answer: "Robert Downey Jr."
    },
    {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Brazil", "Germany", "France" ,"Argentina"],
        answer: "France"
    },
    {
        question: "Who is the co-founder of Microsoft Corporation?",
        options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg" ,"Jeff Bezos"],
        answer: "Bill Gates"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    for (const option of question.options) {
        const optionElement = document.createElement("div");
        optionElement.textContent = option;
        optionElement.classList.add("option");
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionElement);
    }
}

function checkAnswer(selectedOption) {
    const question = quizData[currentQuestion];
    if (selectedOption === question.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Quiz completed!";
    optionsElement.innerHTML = "";
    resultElement.textContent = `Your Score: ${score} out of ${quizData.length}  🎉🎉`;
}

loadQuestion();

