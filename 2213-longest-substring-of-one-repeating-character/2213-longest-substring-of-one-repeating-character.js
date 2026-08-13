/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices) {
    const n = s.length;
    const k = queryIndices.length;
    const str = s.split('');

  
    const maxLen = new Int32Array(4 * n);
    const prefLen = new Int32Array(4 * n);
    const suffLen = new Int32Array(4 * n);
    const leftChar = new Array(4 * n);
    const rightChar = new Array(4 * n);

  
    function merge(node, l, r, mid) {
        const leftNode = 2 * node;
        const rightNode = 2 * node + 1;
        const leftSize = mid - l + 1;
        const rightSize = r - mid;

        leftChar[node] = leftChar[leftNode];
        rightChar[node] = rightChar[rightNode];

        
        maxLen[node] = Math.max(maxLen[leftNode], maxLen[rightNode]);

        prefLen[node] = prefLen[leftNode];
        if (prefLen[leftNode] === leftSize && rightChar[leftNode] === leftChar[rightNode]) {
            prefLen[node] += prefLen[rightNode];
        }

       
        suffLen[node] = suffLen[rightNode];
        if (suffLen[rightNode] === rightSize && rightChar[leftNode] === leftChar[rightNode]) {
            suffLen[node] += suffLen[leftNode];
        }

       
        if (rightChar[leftNode] === leftChar[rightNode]) {
            maxLen[node] = Math.max(maxLen[node], suffLen[leftNode] + prefLen[rightNode]);
        }
    }

    
    function build(node, l, r) {
        if (l === r) {
            maxLen[node] = 1;
            prefLen[node] = 1;
            suffLen[node] = 1;
            leftChar[node] = str[l];
            rightChar[node] = str[l];
            return;
        }

        const mid = (l + r) >> 1;
        build(2 * node, l, mid);
        build(2 * node + 1, mid + 1, r);
        merge(node, l, r, mid);
    }

    
    function update(node, l, r, idx, char) {
        if (l === r) {
            str[l] = char;
            leftChar[node] = char;
            rightChar[node] = char;
            return;
        }

        const mid = (l + r) >> 1;
        if (idx <= mid) {
            update(2 * node, l, mid, idx, char);
        } else {
            update(2 * node + 1, mid + 1, r, idx, char);
        }
        merge(node, l, r, mid);
    }


    build(1, 0, n - 1);

    const result = new Array(k);

   
    for (let i = 0; i < k; i++) {
        const idx = queryIndices[i];
        const char = queryCharacters[i];

        if (str[idx] !== char) {
            update(1, 0, n - 1, idx, char);
        }

        
        result[i] = maxLen[1];
    }

    return result;
};