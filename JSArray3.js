function someUses(){
    //some() function is used to check if at least one element in the array that passes the condition, returning true or false as appropriate
    const numbers = [1, 2, 3, 4];
    const hasNegative= numbers.some(number => number <0)
    console.log(hasNegative); //Output: false  
}
someUses()

function includesUses(){
    //includes() function is used to check if an array includes the specified element, returning true or false as appropriate
    const fruits= ['apple', 'banana', 'cherry']
    const hasApple= fruits.includes('apple')
    console.log(hasApple)
}
includesUses()

function joinUses(){
    //join() method is used to return a new string by concatenating all of the arrays elements seprated by the specified seprator
    const fruits= ['apple', 'banana', 'cherry']
    const fruitString= fruits.join(', ')
    console.log(fruitString);
}
joinUses();