

export let inputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", handleDirection);

export function getInputDirection() {
  return inputDirection;
}

function handleDirection(e) {
  switch (e.keyCode) {
    case 37:
        if (inputDirection.x) {
            break
        }
       
      inputDirection = { x: -1, y: 0  };
      break;
    case 38:
        if (inputDirection.y) {
            break
        }
      inputDirection = { x: 0, y: -1};
      break;
    case 39:
        if (inputDirection.x) {
            break
        }
      inputDirection = { x: 1, y: 0 };
      break;
    case 40:
        if (inputDirection.y) {
            break
        }
      inputDirection = { x: 0, y: 1 };
      break;
    default:
      break;
  }
}
