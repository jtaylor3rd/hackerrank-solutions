function processData(input) {
function isPalindrome(str) {
	var length = str.length, charHash = {}, i = 0, oddLetterCount = 0,ans;

    /* for each letter in the string, store the count in a hash
     * this will be used to determine if any anagram of the
     * string qualifies to be a palindrome.
     */
	for (i; i < length; i++) {
		if (charHash[str[i]]) {
			charHash[str[i]] += 1;
		} else {
			charHash[str[i]] = 1;
		}
	}

    /* iterate through the hash and determine how many letters
     * have an odd count. Any palindrome can have at most
     * 1 letter with an odd count in the string.
     */
	for (prop in charHash) {
		if (charHash.hasOwnProperty(prop)) {
			if (charHash[prop] % 2 !== 0) {
				if (oddLetterCount === 0) {
					oddLetterCount++;
				} else {
					/* not a palindrome - has more than 1 letter with an odd count*/
					return false;
				}
			}
		}
	}
	return true;
};
    
ans = isPalindrome(input) ? 'YES' : 'NO';

console.log(ans);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
