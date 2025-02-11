function wordBreak(word, dict) {
    let dp = new Array(word.length).fill(false);
    dp[0] = true;
    let wordSet = new Set(dict);
    for(let i = 0; i < word.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; // No need to check further if found
            }        
        }
    }

    return dp[word.length];
}