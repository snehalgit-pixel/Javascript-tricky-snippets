// Javascript program to find palindromic substrings of a string

const str1 = "abbaeae";
console.log(countPalindromicSubstrings(str1.split(""), str1.length));

function countPalindromicSubstrings(arr, n) {
    let dp = new Array(n);
    let p = new Array(n);
    for (let i=0; i<n; i++) {
        dp[i] = new Array(n);
        p[i] = new Array(n);
        for (let j=0; j<n; j++) {
            dp[i][j] = 0;
            p[i][j] = false;
        }
    }

    for (let i=0; i<n; i++) {
        p[i][i] = true;
    }

    for (let i=0; i < n-1; i++) {
        if (arr[i]==arr[i+1]) {
            p[i][i+1] = true;
            dp[i][i+1] = 1;
        }
    }

    for (let gap=2; gap<n; gap++) {
        for (let i=0; i<n-gap; i++) {
            let j = gap + i;
            if (arr[i] == arr[j] && p[i+1][j-1]) {
                p[i][j] = true;
            }
            if (p[i][j]) {
                dp[i][j] = dp[i][j-1] + dp[i+1][j] - dp[i+1][j-1] +1;
            }
            else {
                dp[i][j] = dp[i][j-1] + dp[i+1][j] - dp[i+1][j-1];
            }
        }
    }
    return dp[0][n-1];
}