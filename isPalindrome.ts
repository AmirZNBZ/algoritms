function isPalindrome(x: number): boolean {
  console.log(x);
  let original = x;
  let reversed = 0;
  console.log(reversed);
  while (reversed < x) {
    const lastNumber = x % 10;
    reversed = reversed * 10 + lastNumber;
    x = Math.floor(x / 10);
  }
  console.log(x);
  return x === Math.floor(reversed / 10);
}

function isPalindromeV2(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversed = 0;

  while (x > reversed) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  return x === reversed || x === Math.floor(reversed / 10);
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(1001));

console.log(isPalindromeV2(121));
console.log(isPalindromeV2(-121));
console.log(isPalindromeV2(10));
console.log(isPalindromeV2(1001));
