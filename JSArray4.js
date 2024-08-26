function reduceUses(){
    //reduce() method applies a function against an accumulator and each element in the array to reduce it to a single value
    const numbers= [1,2,3,4];
    const sum= numbers.reduce((acc, numbers)=> acc + numbers, 0);
    console.log(sum); //Output : 10
}
reduceUses();

function findUses(){
    //find() method retuns the value of the first element in an array that passes the test in a testing function
    const numbers= [1, 2, 3, 4];
    const found= numbers.find(number => number > 2)
    console.log(found) //Output: 3
}
findUses() 

function findIndexUses(){
    const numbers= [1, 2, 3, 4]
    const index= numbers.findIndex(number => number> 2)
    console.log(index) //Output: 2
}
findIndexUses();