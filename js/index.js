let boxTop = 40;
let boxLeft = 120;

document.addEventListener('keydown', (event) => {
    if(event.key === "ArrowUp") {
      if(boxTop >= 10) {
        boxTop -= 10;
      }
    }
    else if(event.key === "ArrowDown"){
      if(boxTop <= 280) {
        boxTop += 10;
      }
    }
    else if(event.key === "ArrowLeft"){
      if(boxLeft >= 10) {
        boxLeft -= 10;
      }
    }
    else if(event.key === "ArrowRight"){
      if(boxLeft <= 1150) {
        boxLeft += 10;
      }
    }
    
    document.getElementById("box").style.top = boxTop + "px";    
    document.getElementById("box").style.left = boxLeft + "px";
});