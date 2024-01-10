import { getInputDirection } from "./input.js";
export const Snake_Speed = 3

export let snakeBody=[
    {x:11,y:11},
  

]

export function updateSnake() {
  
  
    const inputDirection = getInputDirection()
for (let i = snakeBody.length - 2; i >=0; i--) {
   snakeBody[i+1] = {...snakeBody[i]}
}
snakeBody[0].x += inputDirection.x
snakeBody[0].y += inputDirection.y
if(snakeBody[0].x === 0 ){
    snakeBody[0].x = -1
}else if( snakeBody[0].y ===0){[
    snakeBody[0].y =-1
]}
}


export function drawSnake(gameBoard) {
    snakeBody.forEach((segment,i )=>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x

        
        if (i === 0) {
            snakeElement.classList.add('snake-head')

        } else {
            
            snakeElement.classList.add('snake')
        }
        gameBoard.appendChild(snakeElement)
    })
}



export function addSegment(coord) {

    snakeBody.push({...snakeBody[snakeBody.length -1]})
}