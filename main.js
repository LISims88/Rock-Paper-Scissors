//Data Model
var classic = ['rock', 'paper', 'scissors']

//DOM Variable
var rock = document.querySelector('.rock')
var paper = document.querySelector('.paper')
var scissors = document.querySelector('.scissors')
// var lizard = document.querySelector('')
// var alien = document.querySelector('')

var classicGame = document.querySelector('.classic')
var challengeGame = document.querySelector('.challenge')
var classicBoard = document.querySelector('.classic-game-board')
var challengeBoardAdd = document.querySelector('.challenge-game-add-on')
var weapons = document.querySelector('.weapons')
var gameChoice = document.querySelector('.game-choice')
//Eventlisteners
classicGame.addEventListener('click', showClassicGame)

//Event Handlers
function showClassicGame(){
    classicGame.classList.toggle('hidden')
    challengeGame.classList.toggle('hidden')
    gameChoice.classList.toggle('hidden')
    classicBoard.classList.toggle('hidden')
    weapons.classList.toggle('hidden')
}



//Functions
function getRandomIndex(array){
    var randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

function humanPlay () {
    
}

function createComputer(){
    computerPlay = getRandomIndex(classic)
}