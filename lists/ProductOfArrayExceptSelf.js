// //Brute force

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function(nums) {
//   let output = [];
  
//   for(var i =0; i<nums.length; i++) {
//       let temp = 1;
//       for(j=0; j<nums.length; j++) {
//           if(i !== j) {
//               temp*=nums[j];
//           }
//       }
//       output.push(temp)
//   }
  
//   return output
// };

// Dynamic Programming Solution

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let arrLeft = [];
  let arrRight = [];
  let result = []
  temp = 1
  // to fill the left part of the arr
  for(var i=0; i<nums.length; i++) {
      temp = temp * nums[i];
      arrLeft.push(temp)
  }
  temp2 = 1;
  //to fill the right part of the arr
  for(var j=nums.length-1; j>=0; j--) {
      temp2 = temp2 * nums[j]
      arrRight.push(temp2)
  }
  arrRight.reverse()
  console.log(arrRight);
  console.log(arrLeft);
  for(k =0; k< nums.length; k++) {
      if(k === 0) {
          result.push(arrRight[k+1]);
      } else if(k === nums.length -1) {
          result.push(arrLeft[k-1]);
      } else {
          result.push(arrLeft[k-1] * arrRight[k+1])
      }
  }
  return result
};


