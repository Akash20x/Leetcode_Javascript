/* Approach: We are given an array which contains only 0 and 1.
We have to divide array into 3 parts such that:
1. Every part contains same binary value
2. If not possible to divide with above condition return [-1.-1]
3. Trailing zero doesn't change binary value but leading zero does.
4. return [i,j] such that:
   1) i = last value of first part 
   2) j = first value of third part
   3) i+1 = first value of second part
   
 To solve this we will find total no of 1's in the array lets call it ones
 Now if this ones = 0 it means all elements of array will be zero, then we will
 consider 1st and 2nd element of array as 1st and 2nd part respectively and other 
 elements will be third part and 3rd element is first element of third part
 so we will return [0,2]. Now if we divide an array into 3 parts we must always get
 equal no of 1's in every part otherwise we can't maintain same binary value in each 
 part. If ones not divisible by 3 then we return [-1,-1]. Now we will find the index of 
 last 1 in the array (if every part has 2 1's then we find index of secondlast 1) it will
 give first 1 of last part and store it as k and subtract it from array length then it will
 give iter which tells us no of iterations to go to next part from first 1 of each part. 
 Now we find first one of first part which is index of first occurence of 1 in the array and then we jump to 
 next part using iter then we find index of first one of second part and store it as secondOne. 
 Now we have index of first one of each part.Now we take a loop till iter to compare if preceding part 
 after first 1 of each part will be same or not.
 (Here iter = 1 means that next part is immediatelty after first 1 of each part so no need to check 
 preceding part). If not same return [-1,-1] otherwise return [i,j]
 i = firstone of first part + iter  - 1
 (or i = second part -1)
 j = firstone of second part + iter


var threeEqualParts = function(arr) {
  const ones = arr.reduce((s, n) => s + n, 0);
  if (ones === 0){
      return [0, 2];
  }
  if (ones % 3 !== 0){
      return [-1, -1];
  }
  let onesToFind = ones / 3;
  let k = arr.length;
  while (onesToFind > 0){ 
      if (arr[--k] === 1){
          --onesToFind;
      }
  }
  const iter = arr.length - k;
  const firstOne = arr.indexOf(1);
  const secondOne = arr.indexOf(1, firstOne + iter);
  for (let i = 0; i < iter && iter>1; i++){
    if (arr[i + firstOne] !== arr[k + i] || arr[i + secondOne] !== arr[k + i]){
        return [-1, -1];
    }
  }
  return [firstOne + iter - 1, secondOne + iter];
};
