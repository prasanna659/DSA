/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let n1=word1.length;
    let n2=word2.length;
    let result=[]
    let i=0;
    let j=0;
    while(i<n1 ||j<n2){
        if(i<n1){
            result.push(word1[i]);
            i++;
        }
        if (j < n2) {
            result.push(word2[j]);
            j++;
        }
    }
        return result.join('');
    
};