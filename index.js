var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var char=this.innerHTML;
    makeSound(char);
    buttonAni(char);
  });
}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAni(event.key);
});

function makeSound(key){

  switch (key) {
    case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var snare=new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "s":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "j":
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(char);

  }

}

function buttonAni(anikey){
  var active=document.querySelector("."+anikey);
  active.classList.add("pressed");

  setTimeout(function(){
    active.classList.remove("pressed");
  },100);
}
