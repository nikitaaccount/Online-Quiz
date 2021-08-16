//IIFE(immediately invoked function expression) which runs as soon as we define it.
//object literals to represent the individual questions and an array to hold all the questions

(function() {
const myQuestions = [
{
question: "What does HTML stands for? ",
answers: {
a: "Hyper Text Markup Language ",
b: "Home Tool Markup Language",
c: "HyperLinks and Text Markup Language"
},
correctAnswer: "a"
},
{
question: "Which tag insert a line horizontally on your web page?",
answers: {
a: "hr",
b: "line",
c: "br"
},
correctAnswer: "a"
},
{
question: "Which HTML tag produces the biggest heading?",
answers: {
a: "h7",
b: "h1",
c: "h9"
},
correctAnswer: "b"
},
{
question: "What does Css stands for?",
answers: {
a: "Cascading style sheet",
b: "Computer style sheets",
c: "Creative style sheets"
},
correctAnswer: "a"
}, 
{
question: "The Default value of Position attribute is?",
answers: {
a: "Fixed",
b: "Relative",
c: "Absolute"
},
correctAnswer: "b"
},
{
question: "Which Css property is used to control the text size?",
answers: {
a: "Font-style",
b: "Text-size",
c: "Font-size"
},
correctAnswer: "c"
},
{
question: "Inside which HTML element do we put the Javascript?",
answers: {
a: "script",
b: "javascript",
c: "js"
},
correctAnswer: "a"
},
{
question: "Javascript code is written inside file having extension",
answers: {
a: ".javascript",
b: ".js",
c: ".jvs"
},
correctAnswer: "b"
},
{
question: "The var and function are",
answers: {
a: "keywords",
b: "Datatypes",
c: "Declaration statements"
},
correctAnswer: "c"
}
];

function buildQuiz() {
// variable  to store the HTML output including questions and answer choices.
const output = [];
 
// for each question...
//=> 1.arrow function to perform our operations on each question.
// 2.It makes defining a function just like writing a simple expression.
// In forEach loop we get the current value and the index which is currentQuestion and QuestionNumber respectively.

myQuestions.forEach((currentQuestion, questionNumber) => {

// we'll want to store the list of answer choices
const answers = [];
 
// and for each available answer...
for (letter in currentQuestion.answers) {

// ...add an HTML radio button
//<label element is used so that users will be able to click anywhere on the answer text to select the answer.
//${code}- Template literals which are strings literals allowing embedded expressions.we can use multi line string with them.

answers.push(
`<label id="${questionNumber}${letter}" href="#">
<input type="radio" name="question${questionNumber}" value="${letter}"} id="${questionNumber}${letter}"">
${letter} :
${currentQuestion.answers[letter]}
</label>`
);
}
 
// add the question and its answers to the output
//The join expression takes our list of answers and puts them together in one string that we can output into our answers div.
output.push(
`<div class="slide">
<div class="question"> ${currentQuestion.question} </div>
<div class="answers"> ${answers.join("")} </div>
</div>`
);
});
 
// finally combine our output list into one string using join and put it on the HTML page
 
quizContainer.innerHTML = output.join("");
}

var numCorrect = 0;
var numCorrect1 = 0;
var numCorrect2 = 0;

//function to loop over the answers and show the results.
function showResults() {
	
// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll(".answers");
 
 
// for each question...
 myQuestions.forEach((currentQuestion, questionNumber) => {
 
// find selected answer
 
const answerContainer = answerContainers[questionNumber];//we are looking inside the answer container for the current question.
const selector = `label input[name=question${questionNumber}]:checked`;//css selector to find which radio button is checked.
const userAnswer = (answerContainer.querySelector(selector) || {}).value;//javascript quesySelector to search for our Css selector in the previously defined answerContainer.

//.value cause an error if the user left the answer blank therefore we added || means an empty object.

const answerID = (answerContainer.querySelector(selector) || {}).id;
const selector1 = `label[id="${answerID}"]`; //Select user's answer
var answerElem = answerContainer.querySelector(selector1);
const selector2 = `label[id="${questionNumber}${currentQuestion.correctAnswer}"]`;
var answerElem1 = answerContainer.querySelector(selector2);
 
if(questionNumber<3)
{  
  // if answer is correct
  if (userAnswer === currentQuestion.correctAnswer) {
     // add to the number of correct answers
      numCorrect++;
 
     // color the answers green
     answerElem.style.background = "#70F85A";
     answerElem.style.fontWeight = "900";
 
  } 
  else{
    // if answer is wrong or blank
    // color the answers red
 
   answerElem1.style.color="#70F85A";
   answerElem.style.background="#FD2929";
   answerElem1.style.fontWeight = "900";
       }
}
else if(questionNumber>=3 && questionNumber<6)
{
	if (userAnswer === currentQuestion.correctAnswer) {
    // add to the number of correct answers
    numCorrect1++;
 
   // color the answers green
   answerElem.style.background = "#70F85A";
   answerElem.style.fontWeight = "900";
 
    } 
   else {
   // if answer is wrong or blank
   // color the answers red
 
    answerElem1.style.color="#70F85A";
    answerElem.style.background="#FD2929";
   answerElem1.style.fontWeight = "900";
       }
}
else
{
	if (userAnswer === currentQuestion.correctAnswer) {
    // add to the number of correct answers
    numCorrect2++;
 
    // color the answers green
 
    answerElem.style.background = "#70F85A";
    answerElem.style.fontWeight = "900";
     } 
    else {
     // if answer is wrong or blank
     // color the answers red
 
     answerElem1.style.color="#70F85A";
     answerElem.style.background="#FD2929";
     answerElem1.style.fontWeight = "900";
         }
}
});
 
// show number of correct answers out of total
 
resultsContainer.innerHTML = `${numCorrect+numCorrect1+numCorrect2} out of ${myQuestions.length}`;
}

function Chart() 
{
  JSC.Chart('chartDiv',{
	  type:'vertical column',
	  series:[
	  {
		  points:[
		  {x:'HTML',y:numCorrect},
		  {x:'Css',y:numCorrect1},
		  {x:'Javascript',y:numCorrect2}
	             ]
	  }
	]
  });
}

//function to allow our navigation buttons to show the previous slide and the next slide.
function showSlide(n) {

slides[currentSlide].classList.remove("active-slide");//Hide the current slide by removing the active slide class.
slides[n].classList.add("active-slide");//Show the new slide by adding the active slide class
currentSlide = n;//update the current slide number.
 
if (currentSlide === 0) {
previousButton.style.display = "none";
} else {
previousButton.style.display = "inline-block";
}
 
if (currentSlide === slides.length - 1) {
nextButton.style.display = "none";
submitButton.style.display = "inline-block";
graphButton.style.display="inline-block";
} 
else {
nextButton.style.display = "inline-block";
submitButton.style.display = "none";
graphButton.style.display="none";
 }
}
 
function showNextSlide() {
showSlide(currentSlide + 1);
}
 
function showPreviousSlide() {
showSlide(currentSlide - 1);
}

// Select HTML elements using their id and store references to them in variables.
//getElementById()method returns the element that has the id attribute with the specified value.

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const graphButton=document.getElementById("show");
 
// display quiz right away
 
buildQuiz();
 
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
 
showSlide(0);
 
// Event listeners
 
submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
graphButton.addEventListener("click", Chart);
})();

