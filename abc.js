// Given an integer array nums and an integer k, return the number of continuous subarrays whose sum equals k.

// nums = [1, 1, 1]
// k = 2

// output: 2
// 

// Given a string s, find the index of the first non-repeating character. Return -1 if none exists.


// s = "leetcode"
// output: 0


function firstUnqCharacter(s){
    const freq = {};

    //freq map
    for(let ch of s){
        freq[ch] = (freq[ch] || 0) + 1
    }

    //first non rep char
    for(let i=0;i<s.length;i++){
        if(freq[s[i]] === 1) return i;
    }

    return -1;

}
