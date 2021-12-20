var characterBox = document.getElementById("character-box");
var block = document.getElementById("block");
var character = document.getElementById("character");
let cloud = document.getElementById("cloud");
let rock1 = document.getElementById('rock1');
let rock2 = document.getElementById('rock2');

var gameover = new Audio('./sounds/gameover.wav');
var music = new Audio('./sounds/music.mp3');
var jumpMusic = new Audio('./sounds/jump.wav');

let score = document.getElementById('score');
let scoreIncrease = 0;


//music.loop = true;
music.volume = 0.5;
//music.muted = false;
//music.play();

gameover.volume = 0.5;
jumpMusic.volume = 0.5;

document.addEventListener('keydown', jump);

function jump(e){
    if (e.keyCode == 38 || e.keyCode == 32){
        if (characterBox.classList == 'jump'){
            return ;
        }
        characterBox.classList.add('jump');
        jumpMusic.play();
        setTimeout(() => {
            characterBox.classList.remove('jump');
            jumpMusic.pause();
            jumpMusic.currentTime = 0;
            music.play();
        }, 700);
    }
}
let flag = 1
let scoreFlag = 1;
function check() {
    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let characterbottom = parseInt(window.getComputedStyle(characterBox).getPropertyValue('bottom'));
    if (blockleft > 30 && blockleft < 336 && characterbottom <= 150) {
        music.pause();
        block.style.animationPlayState = 'paused';
        character.style.animationPlayState = 'paused';
        characterBox.style.animationPlayState = 'paused';
        cloud.style.animationPlayState = 'paused';
        rock1.style.animationPlayState = 'paused';
        rock2.style.animationPlayState = 'paused';
        scoreFlag=0;
        jumpMusic.muted = true;
        if (flag == 1) {
            
            gameover.play();
            flag++;
        }
    }
    else {
        if(scoreFlag==1){
            scoreIncrease++;
            
        }
        score.innerHTML = scoreIncrease;
    }
}

setInterval(() => {check();}, 10);
