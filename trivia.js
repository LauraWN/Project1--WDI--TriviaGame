//trivia game project,

// Array of trivia data
var triviaData = new Array(10) //10 questions
createTwoDimensionalArray(3); // by 3 parts to each question.

var questionsAsked = 0;
var totalCorrect = 0;
var currentQuestion = 0;
var selectionValid = false;

triviaData[0][0] = "Baltimore is the capital of Maryland.",
triviaData[1][0] = "The Continental Divide runs along the Rocky Mountains in the United States.",
triviaData[2][0] = "The Nile and the Amazon are the two longest rivers in the world.",
triviaData[3][0] = "Mars is the closest planet to Earth.",
triviaData[4][0] = "The Grand Canyon is located in New Mexico.",
triviaData[5][0] = "Mercury is the planet closest to the sun.",
triviaData[6][0] = "Wellington is the capital of New Zealand.",
triviaData[7][0] = "Magyars are the people of Hungary.",
triviaData[8][0] = "The Baikonur Cosmodrome, Russia's main space launch facility, is located in Turkmenistan.",
triviaData[9][0] = "The TauTona Gold Mine, the world's deepest mine, is located in South Africa.",
console.log(triviaData[0][0]);

triviaData[0][1] = "false",
triviaData[1][1] = "true",
triviaData[2][1] = "true",
triviaData[3][1] = "false",
triviaData[4][1] = "false",
triviaData[5][1] = "true",
triviaData[6][1] = "true",
triviaData[7][1] = "true",
triviaData[8][1] = "false",
triviaData[9][1] = "true",

triviaData[0][2] = "no",
triviaData[1][2] = "no",
triviaData[2][2] = "no",
triviaData[3][2] = "no",
triviaData[4][2] = "no",
triviaData[5][2] = "no",
triviaData[6][2] = "no",
triviaData[7][2] = "no",
triviaData[8][2] = "no",
triviaData[9][2] = "no",

setQuestion();

// setting question so that know the question has been used
function setQuestion() {
    selectionValid = false;
    while (selectionValid == false) {
        currentQuestion = Math.floor(Math.random() * 10); // randomly select starting question
        if (triviaData[currentQuestion][2] == "no") {
            selectionValid = true;
        }
    }

    triviaQuestion = triviaData[currentQuestion][0];
console.log(triviaData[currentQuestion][0])


console.log(document.getElementById("triviaQuestion"));
console.log(triviaQuestion[0][0]);
console.log(triviaData);
console.log(triviaData[currentQuestion]);
console.log(triviaData[currentQuestion][0]);

var element = document.createElement("span"); //have to create element
element.id = "triviaQuestion[currentQuestion][]"; //before it is
var el = document.getElementById('currentQuestion[][0]'); // referenced.

    document.getElementById(triviaQuestion[currentQuestion][0]).innerHTML;
    // =
    //==triviaData[currentQuestion][0];
    triviaData[currentQuestion][2] = "yes";
    questionsAsked = questionsAsked + 1;
}

function processAnswer(myAnswer) {
    if (triviaData[currentQuestion][1] == myAnswer) {
// if the answer is correct, update the total correct ...
        totalCorrect = totalCorrect + 1;
    }
}

//fingers crossed for array creation here
function createTwoDimensionalArray(arraySize) {
      for (i = 0; i < triviaData.length; i = i+1)
          triviaData[i] = new Array(arraySize);
}
//checking the answer, updating correct total
function checkAnswer() {
      if (document.getElementById("RadioTrue").checked) {
          processAnswer("true");
      }
      else {
           processAnswer("false");
           }
//getting next question if more questions available to ask.
      if (questionsAsked < 10) {
          setQuestion();
      }

//disabling Next Question button and showing final score.
      else {
          alert("You answered all the questions! You got " + totalCorrect + " correct out of 10.");
          document.getElementById("buttonContinue").disabled = true;
      }
// updating totals
      document.getElementById("numberAsked").innerHTML = questionsAsked;
      document.getElementById("numberCorrect").innerHTML = totalCorrect;
}
