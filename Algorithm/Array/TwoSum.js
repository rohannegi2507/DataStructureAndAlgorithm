

// Technique: while loop
// Time Complexity:  O(n2)
var twoSumBruteForce = function (nums, target) {
    if (nums.length === 1) {
        return []
    }

    let l = 0, r = 1;
    let res = []

    while (l < r) {
        if ((nums[l] + nums[r]) === target) {
            return [l, r]
        }
        r++
        if (r === (nums.length - 1)) {
            l += 1
            r = l + 1;
        }

    }


    return res;
};

console.log('O(n2)', twoSumBruteForce([3, 2, 4], 6))

// Technique: Sorting and Two pointer
// Time Complexity:  O(nLogn)
var twoSumSort = function (nums, target) {
    const arr = [...nums]
    arr.sort((a, b) => a - b)
    let l = 0, r = arr.length - 1

    while (l < r) {
        const numSum = arr[l] + arr[r]
        if (numSum === target) {
            return [nums.indexOf(arr[l]), nums.indexOf(arr[r])]
        } else if (numSum < target) {
            l++
        } else {
            r--
        }
    }
    return []
};

console.log('O(nLogn)', twoSumSort([3, 2, 4], 6))

// Technique : Hashmap
// Time Complexity:  O(n)
var twoSumMap = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]

        if (map.has(diff)) {
            return [map.get(diff), i]
        } else {
            map.set(nums[i], i)
        }
    }
    return []
};

console.log("O(n)", twoSumMap([3, 2, 4], 6))