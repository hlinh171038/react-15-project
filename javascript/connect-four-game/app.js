let grid = document.querySelector('.grid');
let scoreDisplay = document.querySelector('.results');
// let squares = document.querySelectorAll('.grid div');
let currentShooterIndex = 202;
let width = 15;
let direction = 1;
let goingRight = true;
let alianRemoves = [ ];
let scores =0;

for(let i= 0; i<255 ;i++){
    let square = document.createElement('div');
    grid.appendChild(square);
}

let squares = Array.from(document.querySelectorAll('.grid div'));
// choose index to make allien invender
const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
  ];

// draw alien  Invender
function dawAlienInvender(){
    for(let i=0;i<alienInvaders.length;i++){
        if(!alianRemoves.includes(i))
        squares[alienInvaders[i]].classList.add('alienInvender')
    }
}
dawAlienInvender();
// remove alien invender
function removeAlienInvender(){
    for(let i=0;i<alienInvaders.length;i++){
        squares[alienInvaders[i]].classList.remove('alienInvender')
    }
}

// draw shooter 
function dawShooter(){
    squares[currentShooterIndex].classList.add('shooter');
}
dawShooter()
// move the shooter
function moveShooter(e){
    squares[currentShooterIndex].classList.remove('shooter');
    switch(e.key){
        case 'ArrowLeft':
            if(currentShooterIndex % width !== 0)
            currentShooterIndex -=1;
            break;
        case 'ArrowRight':
            if(currentShooterIndex %width  < width -1)
            currentShooterIndex +=1;
            break;
    }   
    dawShooter();    
}

document.addEventListener('keydown',moveShooter )
// move the alien invenders
function moveAlienInvender(){
    let leftEgde = alienInvaders[0] % width === 0;
    let rightEgde = alienInvaders[alienInvaders.length -1] % width === width - 1
    removeAlienInvender();
    if(rightEgde && goingRight){
        for(let i=0; i<alienInvaders.length;i++){
            alienInvaders[i] +=width+1;
            direction = -1;
            goingRight = false;
        }
    }
    if(leftEgde && !goingRight){
        for(let i=0;i<alienInvaders.length;i++){
            alienInvaders[i] +=width-1;
            direction = 1;
            goingRight = true;
        }
    }
    for ( let i=0; i<alienInvaders.length;i++){
        alienInvaders[i] +=direction;
    }
    dawAlienInvender();
    //codition for inveder move when collision shooter
    if(squares[currentShooterIndex].classList.contains('alienInvender')){
        clearInterval(invaderId);
        document.removeEventListener('keydown', moveShooter);
    }
    console.log(squares.length)
    for(let i=0;i<alienInvaders.length;i++){
        if(alienInvaders[i] > 200){
            clearInterval(invaderId);
            document.removeEventListener('keydown', moveShooter)
        }
    }
    
}
let invaderId = setInterval(moveAlienInvender, 1000);

// laser
function shoot(e) {
    let laserId
    let currentLaserIndex = currentShooterIndex
    function moveLaser() {
      squares[currentLaserIndex].classList.remove('laser')
      currentLaserIndex -= width
      squares[currentLaserIndex].classList.add('laser')
  
      if (squares[currentLaserIndex].classList.contains('alienInvender')) {
        squares[currentLaserIndex].classList.remove('laser')
        squares[currentLaserIndex].classList.remove('alienInvender')
        squares[currentLaserIndex].classList.add('boom')
  
        setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 300)
        clearInterval(laserId)
        let alienRemove = alienInvaders.indexOf(currentLaserIndex);
        alianRemoves.push(alienRemove);
        scores ++;
        console.log(scores)
        scoreDisplay.innerHTML = scores;
  
      }
      if(currentLaserIndex - width < 0){
        squares[currentLaserIndex].classList.remove('laser');
        clearInterval(laserId)
        console.log(currentLaserIndex);
      }
      if(alianRemoves.length === alienInvaders.length){
        scoreDisplay.textContent = ' you win ';
        squares[currentLaserIndex].classList.remove('laser');
        clearInterval(laserId);
        document.removeEventListener('keydown',moveShooter)
        clearInterval(invaderId);
      }
    }
    switch(e.key) {
      case 'ArrowUp':
        laserId = setInterval(moveLaser, 100)
    }
  }
  
  document.addEventListener('keydown', shoot)




















