const array = [3, 8, 7, 5, 3, 9, 8];
const uniqueSet = new Set(array);
const filteredElements = array.filter(currentValue => {
      if (uniqueSet.has(currentValue)) {
         uniqueSet.delete(currentValue);
      }
      else {
         return currentValue;
      }
console.log((currentValue));
   }
);