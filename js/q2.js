function toolchanger(tools, startIndex, target) {
  function fn(left, right, leftStep = 0, rightStep = 0) {
    const leftIdx = left < 0 ? tools.length - 1 : left;
    const rightIdx = right > tools.length - 1 ? 0 : right;

    leftStep = leftStep + 1;
    rightStep = rightStep + 1

    if (leftIdx === startIndex || rightIdx === startIndex) {
      return 0
    }

    if (tools[leftIdx] === target) {
      return rightStep
    }

    if (tools[rightIdx] === target) {
      return rightStep
    }

    return fn(leftIdx - 1, rightIdx + 1, leftStep, rightStep);
  }

  return fn(startIndex - 1, startIndex + 1, 0);
}


console.log(toolchanger(["ballendmill", "keywaycutter", "123", "456", "hello", "facemill"], 5, "456"))
