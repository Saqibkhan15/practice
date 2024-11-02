
var forward = 0;
function abc() {


  var character = document.getElementById("character");
  if(event.keyCode === 39){
    forward = forward + 10;
    character.style.left = forward + "px"
  }
  if(event.keyCode === 37){
    forward = forward - 10;
    character.style.left = forward + "px"
  }
  if(event.keyCode === 38){
    character.style.width = "107px"
    character.style.height = "302px"
    character.src = "images/iron-fly.gif"
    
  }
  if(event.keyCode === 40){
    character.style.width = "143px"
    character.style.height = "92px"
    character.src = "images/ironman-crouch.gif"
    
  }
  var character = document.getElementById("charactert");
  if(event.keyCode === 68){
    forward = forward + 10;
    character.style.left = forward + "px"
  }
  if(event.keyCode === 65){
    forward = forward - 10;
    character.style.left = forward + "px"
  }
  if(event.keyCode === 87){
    character.style.width = "107px"
    character.style.height = "302px"
    character.src = "images/than-walk.gif"
    ; character1.style.transform = "scaleX(1)";t
  }
  if(event.keyCode === 65){
    character.style.width = "143px"
    character.style.height = "92px"
    character.src = "images/ironman-crouch.gif"
    
  }
}

window.onkeydown = abc;