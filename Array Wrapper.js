class ArrayWrapper {
    constructor(nums) {
      this.nums = nums;
    }
  
    valueOf() {
      return this.nums.reduce((sum, num) => sum + num, 0);
    }
  
    toString() {
      return '[' + this.nums.join(',') + ']';
    }
  }
  
  // Example usage:
  const arrayWrapper = new ArrayWrapper([1, 2, 3, 4]);
  console.log(arrayWrapper.valueOf()); // Output: 10
  console.log(arrayWrapper.toString()); // Output: [1,2,3,4]
  