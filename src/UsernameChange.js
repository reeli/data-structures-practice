// Username Change
const order = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const total = "a";

const mapping = order.reduce((res, item, idx) => {
  return {
    ...res,
    [item]: idx
  }
}, {});

function totalNumber(str) {
  return str.split("").map(v =>{
  })
}

console.log(totalNumber("hydra"), "a")
console.log(totalNumber("hydar"), "b")

function possibleChanges(usernames) {
  function canMakeChange(name) {
  }

  return usernames.map(name => {
    return canMakeChange(name) ? "YES" : "NO"
  })
}


possibleChanges(["foo", "bar", "baz"])
possibleChanges(["hydra"])

// "h" + "y" + "d" + "r" + "a"
