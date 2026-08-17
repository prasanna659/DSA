/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
//    let left=0
//    let right=0
// let n=s.length;
//   // let s.split('')
//    for(let i=0;i<n;i++){
//     if(s[i]=='#'){
//         s.pop()
//         i--
//     }
//     for(let j=0;j<n;j++)
//     {
//         if(t[i]=='#'){
//             t.pop()
//             j--
//         }
       
//     }
//     if(s[i]==s[t]){
//         return true
//     }
//    }
//    return false
// };

// const process = (str) => {
//         const stack = [];
//         for (let char of str) {
//             if (char === '#') {
//                 stack.pop(); // Removes the last character if available
//             } else {
//                 stack.push(char);
//             }
//         }
//         return stack.join('');
//     };

//     return process(s) === process(t);

let i = s.length - 1;
    let j = t.length - 1;
    let skipS = 0;
    let skipT = 0;

    while (i >= 0 || j >= 0) {
        // Find next valid character in s
        while (i >= 0) {
            if (s[i] === '#') {
                skipS++;
                i--;
            } else if (skipS > 0) {
                skipS--;
                i--;
            } else {
                break;
            }
        }

        // Find next valid character in t
        while (j >= 0) {
            if (t[j] === '#') {
                skipT++;
                j--;
            } else if (skipT > 0) {
                skipT--;
                j--;
            } else {
                break;
            }
        }

        // Compare characters
        if (i >= 0 && j >= 0 && s[i] !== t[j]) {
            return false;
        }

        // Check if one string ended before the other
        if ((i >= 0) !== (j >= 0)) {
            return false;
        }

        i--;
        j--;
    }

    return true;

};



