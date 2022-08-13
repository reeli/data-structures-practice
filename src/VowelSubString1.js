const isVowel = (c) => {
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    return 1;
  }
  return 0;
};

const findSubstring = (s, k) => {
  let vowels = [];

  // 计算 头 k 个字符串的元音数
  let count = 0;
  for (let i = 0; i < k; i++) {
    count += isVowel(s[i]);
  }
  vowels[0] = count;

  for (let i = k; i < s.length; i++) {
    // 从 k 下一个开始
    // ..[...]
    // ...[...]
    // 判断最左少掉字符，是元音，则元音数 -1
    // 判断最右新增加的字符，是元音，则元音数 +1
    count = count - isVowel(s[i - k]) + isVowel(s[i]);

    // 以字符起始下标作为 index
    vowels[i - k + 1] = count;
  }

  // 最大元音数
  let max = Math.max(...vowels);

  if (max > 0) {
    for (let i = 0; i < vowels.length; i++) {
      if (vowels[i] === max) {
        return s.slice(i, i + k);
      }
    }
  }

  return "Not found!";
};

console.log(findSubstring("azerdii", 5));

// azerd 2
// zerdi  -a+i 2 -1 +1 = 2
// erdii  -z+i 2 -0 +1 = 3
