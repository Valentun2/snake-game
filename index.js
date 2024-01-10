import { Snake_Speed, updateSnake, drawSnake, snakeBody } from "./snake.js"
import { updateFood, drawFood,   resetScores } from "./food.js"
import {  inputDirection } from "./input.js"
export {snakeBody} from "./snake.js"
const gameOverEl = document.querySelector(".js-game-over")

const buttonRestart = document.querySelector(".js-restart")
buttonRestart.addEventListener("click",handleButtonRestart)

let lastRenderTime = 0
const gameBoard = document.querySelector(".js-gameBoard")

function main(currentTime) {
const headOnBody = snakeBody.filter((coord, i)=>{
   
   return  (snakeBody[0].x ===coord.x && snakeBody[0].y === coord.y && i !== 0) ? true : false
  

});
const lose = snakeBody[0].x === -1 || snakeBody[0].x === 22 ||snakeBody[0].y === -1 ||snakeBody[0].y === 22 || (headOnBody.length !==0 && snakeBody.length>2)
if(lose){
   
    gameOverEl.classList.add("active")  
    return
}
window.requestAnimationFrame(main)
    const secondsSinseLastRender = (currentTime-lastRenderTime)/1000
    
    if(secondsSinseLastRender < 1/Snake_Speed){
        return
    }
    
    lastRenderTime = currentTime

    update()
    draw()
}


function update() {
 
   updateSnake() 
   updateFood()
}

function draw() {
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

window.requestAnimationFrame(main)

function handleButtonRestart(e) {
    // window.location = "/"
    snakeBody.splice(0,snakeBody.length -1)
    snakeBody[0] = {x:11,y:11},
    gameOverEl.classList.remove("active")  

    window.requestAnimationFrame(main)
    inputDirection.x = 0
    inputDirection.y = 0
    resetScores()
    gameBoard.innerHTML = ""
    update()
    draw()
}