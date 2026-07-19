/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    const stack = [];
    const seen = new Set();
    const lastOccur = {};
    
   
    for (let i = 0; i < s.length; i++) {
        lastOccur[s[i]] = i;
    }
    
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        
        if (seen.has(char)) continue;
        
        
        while (
            stack.length > 0 && 
            char < stack[stack.length - 1] && 
            i < lastOccur[stack[stack.length - 1]]
        ) {
            seen.delete(stack.pop());
        }
        
       
        stack.push(char);
        seen.add(char);
    }
    
    return stack.join('');
};