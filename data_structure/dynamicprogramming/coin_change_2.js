/*
Input: coins = [1,2,5], amount = 5
Output: 3
Explanation: 11 = 5 + 5 + 1
0  1  2  3  4  5   
0  0  0  0  0  0
0  1  1  1  1  1
0  1  2   
0  1  1  2  2  1  
*/
function coinChange(coins, amount) {
    let n = coins.length;
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
 
   for(let coin of coins) {
    for (let i = coin; i <= amount; i++) {
        dp[i] += dp[i - coin];
    }
   }
 
   return dp[amount];
 }