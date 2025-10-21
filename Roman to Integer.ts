function romanToInt(s: string): number {
  const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result: number = 0;

  for (let i = 0; i < s.toUpperCase().length; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      result -= map[s[i]];
    } else result = result + map[s[i]];
  }
  return result;
}

console.log(romanToInt("MCMXCIV"));
