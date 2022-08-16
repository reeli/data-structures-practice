// Vowel-Substring

function hasVowel(s) {
  return ["a", "e", "i", "o", "u"].indexOf(s) > -1
}

function findSubstring(s, k) {

  function findFirstMatch(s, k) {
    let count = 0;
    const str = s.slice(0, k);
    const list = str.split("");

    for (let i = 0; i < list.length; i++) {
      if (hasVowel(list[i])) {
        count = count + 1
      }
    }

    return [str, count];
  }

  const [first, count] = findFirstMatch(s, k);

  let finalCount = count;
  let mapping = {
    [first]: count
  }

  for (let i = 1; i <= s.length - k; i++) {
    const prev = s[i - 1];
    const last = s[i+k-1]
    const next = s.slice(i, k+i);

    // console.log(prev, next, last)
    if (hasVowel(last)) {
      finalCount = finalCount + 1
    }

    if (hasVowel(prev)) {
      finalCount = finalCount - 1
    }

    mapping[next] = finalCount
  }


  const findStrWithMaxVowel = (obj) => {
    let count = 0;
    let str = ""
    Object.entries(obj).forEach((([key, value]) => {
      if (value > count) {
        count = value
        str = key
      }
    }))

    return str
  }

  // console.log(mapping,'xxx')

  return findStrWithMaxVowel(mapping) || "Not found!"
}

console.log(findSubstring("azerdii", 5))
// azerdii
//      ^
// 01234
//       6^

//azerd

// zerdi -a+i
// erdii -z+i

console.log(findSubstring("qwdftr", 2))
