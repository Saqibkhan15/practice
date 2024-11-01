
var forward = 0;
function abc() {
  // console.log(event.key);
  console.log(event.keyCode);

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
}

window.onkeydown = abc;