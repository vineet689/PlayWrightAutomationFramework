
function forEachUses(){
    //forEach() used to loop over array by executing a provided callback function for each element in an array
    const numbers= [1, 2, 3, 4];
    numbers.forEach(number => console.log(number))
}
forEachUses()

function concatUses(){
    //concat() function is used to merge two or more arrays and returns a new array, without changing the existing arrays
    const array1= [1, 2, 3];
    const array2= [4, 5, 6];
    const combinedArray= array1.concat(array2)
    console.log(combinedArray); //Output: [ 1, 2, 3, 4, 5, 6 ]
}
concatUses()

function everyUses(){
    //every() function is used to check every elements in the array that passes the condition, returning true or false as appropriate
    const numbers= [1,2, 3, 4];
    const allPositive= numbers.every(numbers => numbers > 0)
    console.log(allPositive) //Output: true
}
everyUses()

