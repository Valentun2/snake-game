import { addSegment, snakeBody } from "./snake.js";

 export const scores = document.querySelector('.js-scores')
const record = document.querySelector('.js-record')

 let scoresTotal = 0
let maxScores = localStorage.getItem("maxScores") ||0
record.innerText = `Record: ${maxScores}`

export let foodCoord = {x:7,y:15}

export function updateFood() {
   maxScores = localStorage.getItem("maxScores") ||0
   if(snakeBody[0].x === foodCoord.x && snakeBody[0].y === foodCoord.y){
      scoresTotal +=1
      scores.innerText = `Scores: ${scoresTotal}`
      if(maxScores <= scoresTotal){
         console.log(maxScores,scoresTotal);
         record.innerText = `Record: ${scoresTotal}`

         localStorage.setItem("maxScores", `${scoresTotal} `)
      }
      addSegment(foodCoord)
foodCoord = {x:Math.floor(getRandomNumber()),y:Math.floor(getRandomNumber())}
   }
}
function getRandomNumber() {
    return Math.random() * (21 - 1) + 1;
  }


export function drawFood(gameBoard) {
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = foodCoord.y
        foodElement.style.gridColumnStart = foodCoord.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
    
}


export function resetScores() {
   scoresTotal = 0
   scores.innerText = `Scores: ${scoresTotal}`
}