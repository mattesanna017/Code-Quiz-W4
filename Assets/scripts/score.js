var clearBtn= document.getElementById("clear");
var highScores= document.getElementById("highscores");
var list= document.createElement("li");

console.log(localStorage.length)


var addList=highScores.appendChild(list);


var init =JSON.partheScore (localStorage.getItem("initial"))
var theScore =JSON.partheScore (localStorage.getItem("score"))
var finalScore= init  + " score:  " + theScore ;

list.append(finalScore);

clearBtn.addEventListener("click", function(){
    window.localStorage.clear();
});


function submitTing(){
    
  
    submitButton.addEventListener("click", function(){
        var credentials =document.getElementById("initials").value;
        window.location = "highscores.html"
        window.localStorage.setItem("credentials",JSON.stringify(credentials));
        window.localStorage.setItem("score",JSON.stringify(score));

    });    

   


}    
