let c=0;
let lvl=0;
let highestScore=0;

let colors = ["red", "green", "yellow", "purple"];
let gameseq=[];
let userseq=[];
let started=false;


let ra=document.querySelector(".red");
ra.addEventListener("click", function () {
    let redaudio=new Audio("/assets/red.mp3");
    redaudio.play();
});

let ga=document.querySelector(".green");
ga.addEventListener("click", function () {
    let greenaudio=new Audio("/assets/green.mp3");
    greenaudio.play();
});

let ya=document.querySelector(".yellow");
ya.addEventListener("click", function () {
    let yellowaudio=new Audio("/assets/yellow.mp3");
    yellowaudio.play();
});

let pa=document.querySelector(".purple");
pa.addEventListener("click", function () {
    let purpleaudio=new Audio("/assets/purple.mp3");
    purpleaudio.play();
});

let start=document.querySelector("button");
let h2=document.querySelector("h2");

start.addEventListener("click", function() {
    if(started==false) {
        let sa=new Audio("/assets/start.mp3");
        sa.play();
        console.log("Game is Started");
        h3.innerText="";
        started=true;
        lvlUP();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function lvlUP() {
    userseq=[];
    lvl++;

    let num=Math.floor(Math.random()*4);
    let randonColor=colors[num];
    let randombtn=document.querySelector(`.${randonColor}`);
    btnFlash(randombtn);

    gameseq.push(randonColor);

    h2.innerText=`Level ${lvl}`;
}

function userBtn(btn) {
    btn.classList.add("userBtn");

    setTimeout(function () {
        btn.classList.remove("userBtn");
    }, 250);
}

function reset() {
    started=false;
    userseq=[];
    gameseq=[];
    lvl=0;
}
function checkHigh(lvl){
    if((lvl-1)>highestScore) {
        highestScore=(lvl-1);
    }
}
let body=document.querySelector("body");
let h3=document.querySelector("h3");
function checking(idx) {
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length) {
            setTimeout(lvlUP, 500);
        }
    }
    else{
        gameOverFlash(body);
        let ov=new Audio("/assets/over.mp3");
        ov.play();
        checkHigh(lvl);
        h2.innerText="Game Over! Press the start button to start the game!";
        h3.innerHTML=`Your Score: <b>${lvl-1}</b>.<br>Highest Score: <b>${highestScore}</b>`;
        reset();
    }
}

function btnpressed () {
    let btn=this;
    userBtn(btn);
    userseq.push(btn.classList[1]);
    
    checking(userseq.length-1);

    // lvlUP();
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn) {
    btn.addEventListener("click",  btnpressed);
}


function gameOverFlash(body) {
    body.classList.add("gameOverFlash");

    setTimeout(function () {
        body.classList.remove("gameOverFlash");
    }, 250);
}
