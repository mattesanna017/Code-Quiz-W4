var startBtn = document.getElementById("start");
var counterBack = document.getElementById("time");

var quizTitle = document.getElementById("quiz-title");
var quizRules= document.getElementById("quiz-rules");

var questionTitle=document.getElementById("question-title");
var userChoice=document.getElementById("choices");
var hiddenDisplay= document.querySelector(".hide");
var displayAnswer= document.getElementById("display-answer");

var num=0;
var endScreen= document.getElementById("end-screen");
var timeToGo= counterBack.textContent;
timeToGo=50;
var score=0

var finalScore=document.getElementById("final-score")

var submitButton= document.getElementById("submit")

var highScore= document.querySelector(".scores");


function startGame(){
    countdown()
    displayQuestions()
    submit()
    clearBtn()
     
};


startBtn.addEventListener("click",startGame);


function countdown() {
    var timerInterval = setInterval(function() {
    
        timeToGo--;
        counterBack.textContent = timeToGo
        
        if(timeToGo <=0) {
            clearInterval(timerInterval);
            questionTitle.style.display="none";
            userChoice.style.display="none";
            endScreen.style.display="block";
            counterBack.textContent= 0;
            finalScore.textContent += score;
            console.log(score)
        }
    }, 1000);
}


function displayQuestions(){
    
    var firstQuestion = document.createElement("button");
    var secondQuestion = document.createElement("button");
    var thirdQuestion = document.createElement("button");   
    var fourthQuestion = document.createElement("button");
    userChoice.appendChild(firstQuestion);
    userChoice.appendChild(secondQuestion);
    userChoice.appendChild(thirdQuestion);
    userChoice.appendChild(fourthQuestion);
    
    firstQuestion.textContent=questions[num].choices[0];
    secondQuestion.textContent=questions[num].choices[1];
    thirdQuestion.textContent=questions[num].choices[2];
    fourthQuestion.textContent=questions[num].choices[3];

    var finalA= questions[questions.length-1].choices[0];
    var finalB= questions[questions.length-1].choices[1];
    var finalC= questions[questions.length-1].choices[2];
    var finalD= questions[questions.length-1].choices[3];

    
    quizTitle.textContent="";
    quizRules.textContent="";
    startBtn.style.display="none";
    
   
    hiddenDisplay.style.display="block"


    questionTitle.textContent= questions[num].title;               
    userChoice.addEventListener("click", function(e){
        clickElement = e.target.textContent
        clickElementLength= clickElement.length
        rightAnswer= questions[num].answer
        var audioCorrect = new Audio("./Assets/sfx/correct.wav")
        var audioWrong = new Audio("./Assets/sfx/incorrect.wav")
        
    
            if(clickElement!== finalA && clickElement!==finalB && clickElement!==finalC && clickElement !== finalD){
                num++;
                questionTitle.textContent= questions[num].title; 
                firstQuestion.textContent=questions[num].choices[0];
                secondQuestion.textContent=questions[num].choices[1];
                thirdQuestion.textContent=questions[num].choices[2];
                fourthQuestion.textContent=questions[num].choices[3];
               
            }
            else{
                questionTitle.style.display="none"
                userChoice.style.display="none"
                timeToGo=0;
            }
           
                
            if(clickElement== rightAnswer){
                audioCorrect.play()
                displayAnswer.textContent = "CORRECT !"
                score+=1;
                    
                setTimeout(function(){
                     displayAnswer.textContent = ""
                }, 350);     
            }

            else{
                displayAnswer.textContent = "WRONG !"
                audioWrong.play()
                timeToGo-=10;
                setTimeout(function(){
                    displayAnswer.textContent = ""
                    }, 350);  
                    
                }        
                
    });
              
        
}
  