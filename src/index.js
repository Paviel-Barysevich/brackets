module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) return false;

  let bracketsObj = {};
  let arr = [];

  bracketsConfig.map((bracketsPair) => bracketsObj[bracketsPair[0]] = bracketsPair[1]);

  for (let i = 0; i < str.length; i++) {
    if (arr.length === 0) {
      arr.push(str[i]);
      continue;
    }

    let bracketLeft = arr.at(-1);

    if (bracketsObj[bracketLeft] === str[i]) {
      arr.pop();
    } else {
      arr.push(str[i]);
    }
  }

  return (arr.length === 0);
}