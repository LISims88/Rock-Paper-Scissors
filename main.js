//Data Model
var classic = ['rock', 'paper', 'scissors']
var human = {
    wins: 0,
    selection: ''
}
var computer = {
    wins: 0,
    selection: ''
}
//DOM Variable
//classic
var gameWeapons = document.querySelector('.game-weapons')
var rock = document.querySelector('.rock')
var paper = document.querySelector('.paper')
var scissors = document.querySelector('.scissors')

var humanWins = document.querySelector('.human-wins')
var computerWins = document.querySelector('.computer-wins')
var weapons = document.querySelector('.weapons')
var gameChoice = document.querySelector('.game-choice')
var classicGame = document.querySelector('.classic')
var challengeGame = document.querySelector('.challenge')
var differentGameButton = document.querySelector('.button')

var classicBoard = document.querySelector('.classic-game-board')

//challenge
var lizard = document.querySelector('lizard')
var alien = document.querySelector('.alien')
var challengeBoardAdd = document.querySelector('.challenge-game-add')

//Eventlisteners
classicGame.addEventListener('click', showClassicGame)
challengeGame.addEventListener('click', showChallengeGame)
differentGameButton.addEventListener('click', function(){
    returnHome()
    challengeBoardAdd.classList.add('hidden')
} )
gameWeapons.addEventListener('click', function(event){
    if(event.target.className === 'rock') {
        console.log(event)
        human.selection = 'rock'
    } else if(event.target.className === 'paper'){
        human.selection = 'paper'
    } else if(event.target.className === 'scissors'){
        human.selection = 'scissors'
    }
    createComputer()
})
//Event Handlers
function showClassicGame(){
    classicGame.classList.toggle('hidden')
    challengeGame.classList.toggle('hidden')
    gameChoice.classList.toggle('hidden')
    classicBoard.classList.toggle('hidden')
    weapons.classList.toggle('hidden')
    differentGameButton.classList.toggle('hidden')
}
function showChallengeGame(){
    classicGame.classList.toggle('hidden')
    challengeGame.classList.toggle('hidden')
    gameChoice.classList.toggle('hidden')
    classicBoard.classList.toggle('hidden')
    challengeBoardAdd.classList.remove('hidden')
    weapons.classList.toggle('hidden')
    differentGameButton.classList.toggle('hidden')
}
function returnHome(){
     if (showClassicGame){
        !showClassicGame()
    } else if (showChallengeGame){
        !showChallengeGame()
    } 
}
function rockWins(){
    paper.classList.add('hidden')
}
function paperWins(){
    scissors.classList.add('hidden')
}
function scissorsWins(){
    rock.classList.add('hidden')
}
function resetGameBoard(){
    rock.classList.remove('hidden')
    scissors.classList.remove('hidden')
    paper.classList.remove('hidden')
}

//Functions
function getRandomIndex(array){
    var randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

function createComputer(){
    computer.selection = getRandomIndex(classic)
    getResults()
}

function getResults(){
    if((human.selection === 'rock' && computer.selection === 'scissors') || (computer.selection === 'rock' && human.selection === 'scissors')){
        rockWins()
        weapons.innerText = `Rock beats Scissors`
    } else if ((human.selection === 'paper' && computer.selection === 'rock') || (computer.selection === 'paper' && human.selection === 'rock')){
        paperWins()
        weapons.innerText = `Paper beats Rock`
    }else if ((human.selection === 'scissors' && computer.selection === 'paper') || (computer.selection === 'scissors' && human.selection === 'paper')){
        scissorsWins()
        weapons.innerText = `Scissors beats Paper`
    } else{
        weapons.innerText = `The game is a Draw`
    }
    getWins();
    setTimeout(function(){
        resetGameBoard()}, 8000)
    
}
function getWins(){
      if ((human.selection === 'rock' && computer.selection === 'scissors') || (human.selection === 'paper' && computer.selection === 'rock') || (human.selection === 'scissors' && computer.selection === 'paper')){
        humanWins.innerText = human.wins += 1
    } else if((computer.selection === 'rock' && human.selection === 'scissors') || (computer.selection === 'paper' && human.selection === 'rock') || (computer.selection === 'scissors' && human.selection === 'paper')){
        computerWins.innerText = computer.wins += 1
    } else{
        return
    }
}





// code needed 
//(human.selection === 'rock' && computer.selection === 'lizard') || (computer.selection === 'rock' && human.selection === 'lizard')

//(human.selection === 'paper' && computer.selection === 'alien') || (computer.selection === 'paper' && human.selection === 'alien')

//(human.selection === 'scissors' && computer.selection === 'lizard') || (computer.selection === 'scissors' && human.selection === 'lizard')

//(human.selection === 'lizard' && computer.selection === 'paper')|| (computer.selection === 'lizard' && human.selection === 'paper') ||(human.selection === 'lizard' && computer.selection === 'alien') || (computer.selection === 'lizard' && human.selection === 'alien')


////(human.selection === 'alien' && computer.selection === 'scissors')|| (computer.selection === 'alien' && human.selection === 'scissors') ||(human.selection === 'alien' && computer.selection === 'rock') || (computer.selection === 'alien' && human.selection === 'rock')


