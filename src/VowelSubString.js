// Vowel-Substring
function findSubstring(s, k) {
  // Write your code here
  let max = 0;
  let res = null;
  const vowels = {
    a: "a",
    e: 'e',
    i: "i",
    o: "o",
    u: "u"
  }
  const cache = {}

  const findVowel = (item) => {
    if (cache[item]){
      return cache[item]
    }
    const list = item.split("").filter(i => vowels[i]);
    cache[item] = list.length;
    return list.length;
  }

  for (let i = 0; i < s.length - k + 1; i++) {
    let st = s.slice(i, k + i);

    if (st.length === k) {
      const count = findVowel(st);
      if (count > max) {
        max = count;
        res = st;
      }
    }
  }

  return res || "Not found!";
}

console.log(findSubstring("azerdii", 5))
console.log(findSubstring("qwdftr", 2))
