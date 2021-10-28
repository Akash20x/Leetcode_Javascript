/* Approach : We are given a string s and an array words in which all
the different strings are of same length and we have to return starting
index of all possible substrings formed by words array in the string s. 
We have to concatenate different strings of the words array in such a 
way that no string is repeated, no string will skip, no other characters
between strings will be added that are not present in words array. To
solve this first we will create a map and store count of each unique string 
that is present in the words array like if word is not present in the map
we assign value of that word to be zero and if it is present we increase
the value of that word by 1.We also store no of words present in words array
as chunkCount and also store no of characters in first string as chunk. Now
we have to iterate over the characters of string s till 
total length of characters - chunk * chunkCount. Let's take chunk and chunkCount
to be 3 for simplicity and now we will check if string
formed by consecutive 3 characters like characters on index (0,3) then (1,4)
then (2,5) of string s will contain any word stored in map and if that word not
present in the map we can skip the iteration. Now we will create the copy of 
above map and store it as wordsCopy. Now we will take another loop to choose 3
consecutive words of each 3 characters and check their occurrence in the map like
we change the value of words to zero if they present once and 
if they occur more than once we break the loop else change their values to 0. If 
there is no break that means j will contain value 2 after end of j for loop and that
time we will store value of i in our result array and when i completes all iteration
we will get required starting index of substrings. 
*/


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
