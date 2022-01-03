function twoNumberSum(array: number[], targetSum: number) {
    const dict: {[key:number]: number} = {};
      for(let i =0; i < array.length; i++) {
          const diff = targetSum - array[i];
          if(diff in dict) {
              return [diff, array[i]];
          } else {
              dict[array[i]] = 1;
          }
      }
    return [];
  }
  