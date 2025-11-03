// MY IDEA
function longestCommonPrefix(strs: string[]): string {
  if(!strs.length) return ""
  let repeatedStr: string = "";
  let prefix = strs[0];
  if (!prefix) return repeatedStr;
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] !== prefix[j]) {
        break;
      }
      repeatedStr += prefix[j];
    }
    prefix = repeatedStr;
    repeatedStr = "";
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["dog", "door", "dock"])); // do
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["cir", "car"])); // ""
console.log(longestCommonPrefix(["ab", "a"])); // ""

// AI IDEA & BEST PRACTICE
function longestCommonPrefix2(strs: string[]): string {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
      j++;
    }
    prefix = prefix.slice(0, j);
    if (prefix === "") return "";
  }

  return prefix;
}

console.log(longestCommonPrefix2(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix2(["dog", "door", "dock"])); // do
console.log(longestCommonPrefix2(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix2(["cir", "car"])); // ""
