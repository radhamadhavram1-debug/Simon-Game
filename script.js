let gameSeq = [];
let userSeq = []; 
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let scoreText = document.querySelector(".scoreText"); 
let allBtns = document.querySelectorAll(".box"); 


let started = false;
let level = 0;

document.addEventListener("keypress", ()=>{
    
let started = false;
let level = 0;

   if(started == false){
    started = true;
    levelUp(); 
}
})


function levelUp(){
    userSeq = []; 
    level++;
    scoreText.innerText = `Level ${level}`;
    let randIdx = Math.floor((Math.random()*4)+1);
    let randClass = `box${randIdx}`;
    console.log(randClass); 

    let btn = document.querySelector(`.${randClass}`); 
   
    boxFlash(btn);

    gameSeq.push(randClass); 
    // console.log(gameSeq); 
}

function boxFlash(e){
    e.classList.add("flash"); 
    setTimeout(()=>{
        e.classList.remove("flash")
    }, 230); 
}


function check(idx){
   
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp, 500); 
        }
    }
    else{
      
         scoreText.innerHTML = `Game Over! Your score is <b>${level} </b> <br>  Press any key to start a new game`;
         document.querySelector("body").style.backgroundColor = "red";
         setTimeout(()=>{
             document.querySelector("body").style.backgroundColor = "#308695";
         },150); 
         reset(); 
    }
}



function btnPress() {
    console.log(this); 
   let btn = this; 
   boxFlash(btn);  
   let userId = btn.getAttribute("id");
   
   userSeq.push(userId);

   check(userSeq.length - 1); 

}

for(btn of allBtns){
    btn.addEventListener("click", btnPress); 
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0; 
}

//Hw -- highest score and level 0 functionality. 