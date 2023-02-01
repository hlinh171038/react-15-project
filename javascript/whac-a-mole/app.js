let squares = document.querySelectorAll('.square');
let square = document.querySelector('.square');
let mole = document.querySelector('.mole')
let timer = document.querySelector('#timer');
let score = document.querySelector('#score');
//variable
let count = 0;
let randomSquareId;
let timeCount = 20;
// random square
function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole');
    })
    let randomSquare = squares[Math.floor(Math.random()* 9)];
    randomSquare.classList.add('mole');
    randomSquareId =randomSquare.id;
    console.log(randomSquareId);
    console.log(randomSquare);
    squares.forEach(square =>{
        square.addEventListener('click',countScore);
    })
   
}

// count Score
function countScore(){
    if(this.id == randomSquareId){
        count++;
        score.textContent = count;
        randomSquareId = null;
    }
}
//count tim
function countTime(){
    timeCount--;
    timer.textContent = timeCount;
    if(timeCount == 0){
        clearInterval(countTimeId);
        clearInterval(randomSquare);
        alert(' you havent the time');
    }
}

randomSquare();
setInterval(randomSquare, 1000);
let countTimeId = setInterval(countTime, 1000)