// https://leetcode.com/problems/combination-sum/

var combinationSum = function(candidates, target) {
    let res = []

    function dfs(i, current, tar) {

       // console.log(i,current,tar, res)

        if(target === tar){
            res.push([...current])
            return
        }

        if( i>= candidates.length || tar > target){
            return 
        }

        current.push(candidates[i])
        dfs(i, current, tar + candidates[i])
        current.pop()
        dfs(i+1, current, tar)
    }

    dfs(0,[],0)
    return res
};

console.log(combinationSum([2,3,6,7], 7))
console.log(combinationSum([2], 1))
console.log(combinationSum([2,3,5], 8))
