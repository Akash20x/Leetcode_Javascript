var findSubstring = function(s, words) {
    
    let result = [];
    const wordCount = new Map();
    words.forEach(word => {
        if(!wordCount.get(word)){
            wordCount.set(word, 0);
        }
        wordCount.set(word, wordCount.get(word) + 1);
    });
    let chunk = words[0].length;
    let chunkCount = words.length;
    let idxLimit = chunk*chunkCount;
    for( let i = 0; i <= s.length - idxLimit; i += 1){
      if(wordCount.get(s.substring(i, i+chunk))){
        let wordsCopy = new Map(wordCount);
        for(let j = 0; j < chunkCount; j += 1){
            let curChunk = s.slice(i + j*chunk, i + j*chunk + chunk)
            let numOccurences = wordsCopy.get(curChunk);
            
            if(!numOccurences){
                break;
            }
            wordsCopy.set(curChunk, wordsCopy.get(curChunk) - 1);

            if(j === chunkCount - 1){
                result.push(i);
            }
        }
      }
    }
    return result;
};
