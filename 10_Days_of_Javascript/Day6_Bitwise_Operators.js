/*
Sample Input 0
3
5 2
8 5
2 2

Sample Output 0
1
4
0
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function getMaxLessThanK(n, k){
    
    var max = 0;
    var res = 0;
    for(var i=1; i<n; i++){
        for(var j=i+1; j<=n; j++){
            res = i&j;
            if(res < k && res > max){
                max =res;
            }
        }
    }
    
    return max;
}


function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}