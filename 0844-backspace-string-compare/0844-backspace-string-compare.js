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

const process = (str) => {
        const stack = [];
        for (let char of str) {
            if (char === '#') {
                stack.pop(); // Removes the last character if available
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
    };

    return process(s) === process(t);



};



