let gameSeq=[];
let userSeq=[];

let btns = ["red","yellow","purple","green"];

let start = false;
let level = 0;

document.addEventListener("keypress",function(){
    if(start == false){
        console.log("game started");
        start = true;
        levelUp();
    }
});

function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    gameFlash(randbtn);
}

function checkAns(idx){
        if(userSeq[idx] === gameSeq[idx]){
            if(userSeq.length === gameSeq.length){
                 setTimeout(levelUp(),4000)
            }
        }
        else{
            h2.innerHTML = `Game Over! Your Score was<b>${level}</b><br>Press any key to start`;
            highest_score(level);
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){document.querySelector("body").style.backgroundColor="white"},150);
            reset();
        }
}

function btnPress(){
     let btn = this;
    userFlash(btn);
    
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function highest_score(score){
    let highest = 0;
    
     if(score>highest){
        highest = score;
       h3.innerText =`Highest Score : ${score}`;
       
     }
}



