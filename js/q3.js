function toolchanger(tools, startIndex, target) {
  function moveLeft(){
    let step = 0;

    for (let i = startIndex-1; i >= 0; i--) {
      step++

      if (tools[i] === target) {
        return step;
      }
    }

    for (let i = tools.length-1; i >= startIndex; i--) {
      step ++
      if (tools[i] === target) {
        return step;
      }
    }
  }

  function moveRight(){
    let step = 0;

    for (let i = startIndex+1; i < tools.length; i++) {
      step++

      if (tools[i] === target) {
        return step;
      }
    }

    for (let i = 0; i < startIndex; i++) {
      step ++
      if (tools[i] === target) {
        return step;
      }
    }

    return step
  }

  return Math.min(moveLeft(), moveRight());
}


toolchanger(["ballendmill", "facemill", "keywaycutter"], 1, "keywaycutter")
