// Technique: for loops
var longestPalindromeBruteForce = function (s) {
    let longSub = ''
    if (s === null || s.length === 0) return "";
    if(s.length === 1) return s

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const str = s.substring(i, j)
           // console.log(str)
            if (isPalindrome(str) && str.length > longSub.length) {
                longSub = str
            }
        }
    }

    return longSub
};
console.log("O(n2)", longestPalindromeBruteForce("babad"))
function isPalindrome(str) {
    let l = 0, r = str.length - 1
    while (l < r) {
        if (str[l] !== str[r]) {
            return false
        }
        l++
        r--
    }

    return true
}


