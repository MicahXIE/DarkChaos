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

function vowelsAndConsonants(s) {
    
    for(var i=0; i<s.length; i++){
        var c = s.charAt(i)
        if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'){
            console.log(s.charAt(i));           
        }
    }
        
    for(var k=0; k<s.length; k++){
        var c1 = s.charAt(k)
        if(c1 == 'a' || c1 == 'e' || c1 == 'i' || c1 == 'o' || c1 == 'u'){
            continue;          
        } else {
            console.log(c1)
        }
    }
    
}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}

