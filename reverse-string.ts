function reverseString(s: string): string {
  let reverse: string = "";
  let temp: string = "";
  for (const char of s) {
    if (char !== " ") {
      temp += char;
    } else {
      reverse = reverse.length ? temp + " " + reverse : temp + reverse;
      temp = "";
    }
  }
  return temp ? temp + " " + reverse : reverse;
}
