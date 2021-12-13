function climbingStairs(cost,n){
    let dp = new Array(n);
    if (n == 1) 
        return cost[0];

    dp[0] = cost[0];
    dp[1] = cost[1];

for (let i = 2; i < n; i++){
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
}

return Math.min(dp[n - 2], dp[n - 1]);
}
 
let a=[0, 2, 2, 1];
let n = a.length;
console.log(climbingStairs(a, n));

a=[0, 2, 3, 2];
n = a.length;
console.log(climbingStairs(a, n));

a=[10, 15, 20];
n = a.length;
console.log(climbingStairs(a, n));

a=[0, 0, 0, 0, 0, 0];
n = a.length;
console.log(climbingStairs(a, n));