function dataFinder(data) {
  const beyondRange = (num) => num >= data.length || num < 0;

  const find = (min, max, value) => {
    if (beyondRange(min) || beyondRange(max)) {
      throw(new Error("Invalid range"))
    }
    // const arr = data.slice(min, max + 1);
    let res = false;
    for (let i = min; i <= max; i++) {
      res = data[i] === value
    }
    return res;
  }

  return find;
}

console.log(dataFinder([15, 1, 10, 5, 4, 20])(1, 4, 4))
