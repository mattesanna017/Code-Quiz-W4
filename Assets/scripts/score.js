var clearBtn= document.getElementById("clear");
var highScores= document.getElementById("highscores");
var list= document.createElement("li");

console.log(localStorage.length)


var addList=highScores.appendChild(list);


var init =JSON.parse(localStorage.getItem("initial"))
var theScore =JSON.parse(localStorage.getItem("score"))
var final= init  + " score:  " + theScore ;

list.append(final);

clearBtn.addEventListener("click", function(){
    window.localStorage.clear();
});


function submit(){
    
  
    submitButton.addEventListener("click", function(){
        var initial =document.getElementById("initials").value;
        window.location = "assets/highscores.html"
        window.localStorage.setItem("initial",JSON.stringify(initial));
        window.localStorage.setItem("score",JSON.stringify(score));

    });    

   


}    
