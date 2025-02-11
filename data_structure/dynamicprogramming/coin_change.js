/*
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
0 1 2 3
0 1 2  
1 -> 1 [1]
2 -> 1 [2]
3 -> 2 [1, 2]
4 -> 2 [2, 2]
5 -> 1 [5]
6 -> 2 [1, 5]
7 -> 3 [2, 5]
8 -> 4 [1, 2, 5]
9 -> 5 [2, 2, 5]
10 -> 2 [5, 5]
11 -> 3 [1, 5, 5]
*/
function coinChange(coins, amount) {
   let n = coins.length;
   let dp = new Array(amount + 1).fill(Infinity);
   dp[0] = 0;

   for(let i =0; i<=amount; i++) {
    for (let coin of coins) {
        if (i >= coin) {
            dp[i] = Math.min(dp[i], 1 + dp[i-coin]);
        }
    }
   }

  return dp[amount] === Infinity? -1 : dp[amount];
}