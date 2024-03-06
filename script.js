const questions = [
  {
    question: "Gdzie jest najgoręcej na Ziemi?",
    options: ["Na biegunach", "Na równiku", "W pobliżu równika", "W pobliżu biegunów"],
    answer: ["Na równiku"]
  },
  {
    question: "Gdzie znajduje się większość dżungli?",
    options: ["Na biegunach", "Na równiku", "W pobliżu równika", "W pobliżu biegunów"],
    answer: ["W pobliżu równika"]
  },
  {
    question: "Gdzie jest najwięcej śniegu i lodu?",
    options: ["Na równiku", "W strefach zwrotnikowych", "W strefach umiarkowanych", "Na biegunach"],
    answer: ["Na biegunach"]
  },
  { 
    question: "Gdzie występują cztery pory roku?",
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["W strefach umiarkowanych"]
  },
  { 
    question: "Gdzie są największe lasy iglaste?",
    options: ["Na równiku","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["W strefach umiarkowanych"]
  },
  { 
    question: "Gdzie znajduje się większość pustyń?",
    options: ["Na równiku","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["W strefach zwrotnikowych"]
  },
  { 
    question: "Gdzie jest najcieplej przez większość roku?",
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["W strefach równikowych"]
  },
  { 
    question: "Gdzie możemy znaleźć wielkie góry pokryte śniegiem?",
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["Na biegunach"]
  },  
  { 
    question: "Gdzie występuje wiele tropikalnych burz?",
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["W strefach równikowych"]
  },  
  { 
    question: "Gdzie jest najwięcej roślin i zwierząt różnych gatunków?",
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["W strefach równikowych"]
  },
  {
    question: "Gdzie występują największe opady deszczu i tropikalne lasy?",
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["W strefach równikowych"]
  },
  {
    question: "Gdzie są najbardziej ekstremalne temperatury, zarówno najwyższe, jak i najniższe?",
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["Na biegunach"]
  },
  {
    question: "Gdzie dominują suche, gorące lata i łagodne zimy?",  
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["W strefach zwrotnikowych"]
  },
  { 
    question: "Gdzie występują wielkie sawanny oraz tropikalne lasy deszczowe?",
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["W strefach równikowych"]
  },
  { 
    question: "Gdzie znajdują się gorące, suche pustynie?",
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["W strefach zwrotnikowych"]
  },
  { 
    question: "Gdzie występuje najwięcej różnorodnych kultur i języków?",
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["W strefach umiarkowanych"]
  },
  { 
    question: "Gdzie temperatura zmienia się najbardziej dramatycznie między porami roku?",
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["W strefach umiarkowanych"]
  },
  { 
    question: "Gdzie występuje tundra oraz wieczne zmarzliny?",
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["Na biegunach"]
  },  
  { 
    question: "Gdzie rolnictwo zależy w dużym stopniu od irygacji?",
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["W strefach zwrotnikowych"]
  },  
  { 
    question: "Gdzie występuje najwięcej gatunków ptaków migrujących?",
    options: ["W strefach równikowych","W strefach zwrotnikowych","W strefach umiarkowanych","Na biegunach"],
    answer: ["W strefach umiarkowanych"]
  },




]

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false; // Zmienna sprawdzająca, czy pytanie zostało już zaznaczone

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  questionElement.classList.remove("animate"); // Usuwamy klasę animate, jeśli została już dodana
  void questionElement.offsetWidth; // Resetujemy animację

  questionElement.classList.add("animate"); // Dodajemy klasę animate, aby uruchomić animację
  
  optionsElement.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.className = "option";
    li.addEventListener("click", () => checkAnswer(option, li));
    optionsElement.appendChild(li);
  });
}

function checkAnswer(selectedOption, optionElement) {
  if (isAnswered) return; // Jeśli pytanie już było zaznaczone, to wyjście

  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswers = currentQuestion.answer;

  if (correctAnswers.includes(selectedOption)) {
    optionElement.classList.add("correct");
    score++;
  } else {
    optionElement.classList.add("incorrect");
  }
  optionElement.classList.add("highlighted");
  isAnswered = true; // Oznaczenie pytania jako zaznaczone
  
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    setTimeout(() => {
      showQuestion();
      clearHighlights();
      isAnswered = false; // Zresetowanie zaznaczenia pytania
    }, 1000);
  } else {
    showResult();
  }
}

function clearHighlights() {
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.classList.remove('correct', 'incorrect');
  });
}
function showResult() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";

  const totalScore = (score / questions.length) * 100;
  resultElement.innerHTML = `Wynik ${score} / ${questions.length}<br>${totalScore.toFixed(2)}%`;
  resultElement.style.display = "block";
}

showQuestion();
