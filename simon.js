

var q=["red","blue","green","yellow"];
var y=[];
//randomNumber(q);


var userClickedPattern=[];

var started=false;

var level=0;

$(document).keypress(function(){

 if(!started){
   $("#level-title").text("Level "+ level);
   nextSequence();
   started=true;
 }


});


$(".btn").click(function(){

  var userChosenColor=$(this).attr("id");
  
userClickedPattern.push(userChosenColor);
// console.log(userClickedPattern);
   


function playSound(userChosenColor){
if(userChosenColor==="green"){
  var audio=new Audio("sounds/green.mp3");
  audio.play();
}else if(userChosenColor==="blue"){
  var audio=new Audio("sounds/blue.mp3");
  audio.play();
}else if(userChosenColor==="yellow"){
  var audio=new Audio("sounds/yellow.mp3");
  audio.play();
}else if(userChosenColor==="red"){
  var audio=new Audio("sounds/red.mp3");
  audio.play();
}

}
playSound(userChosenColor);


checkAnswer(userClickedPattern.length-1);
});



function checkAnswer(currentLevel){
if(y[currentLevel]===userClickedPattern[currentLevel]){
  if(y.length===userClickedPattern.length){
setTimeout(function(){
  nextSequence();
},1000);
}
}else{
  var audio=new Audio("sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
  $("h1").text("Game Over, Press any key to start again ")
  setTimeout(function(){
    $("body").removeClass("game-over");
  },100);
  startOver();
}

}

function startOver(){
  started=false;
  level=0;
  y=[];
}




$(".btn").click(function(){
$(this).addClass("pressed");

setTimeout(function(){
  $(".btn").removeClass("pressed")
},100);

});




function nextSequence(){

  userClickedPattern=[];
level++;
$("#level-title").text("Level "+ level);


  var p=Math.random();
      p=p*4;
      p=Math.floor(p);
      var t=q[p];
      y.push(t);
      
    $("#"+ t).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   


};








