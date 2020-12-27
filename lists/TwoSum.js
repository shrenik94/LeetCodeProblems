/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const obj = {};
  const len = nums.length;
  for( let i=0; i< len; i++ ){
      //if target - current value in array exist in obj then that's what we need
      if( target - nums[i] in obj ){
          return [ obj[ target - nums[i] ], i ];
      }
      //if target - current value doesn't exist in obj then push the value in obj
      obj[ nums[i] ] = i;
  }
};