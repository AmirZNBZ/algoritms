function isValid(s: string): boolean {
  const allowedCharOpen: Record<string, string> = {
    "(": "(",
    "[": "[",
    "{": "{",
  };
  const matchChar: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const arraySorted: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (allowedCharOpen[s[i]]) arraySorted.push(s[i]);
    else if (arraySorted.pop() !== matchChar[s[i]]) {
      return false;
    }
  }

  return arraySorted.length === 0 ? true : false;
}
