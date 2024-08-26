
function evenNumber(){
    //filter() method is used to create new array with only elements that pass the condition inside the provided function
const numbers= [1, 2, 3, 4];
const evenNumbers = numbers.filter(number=>number%2===0);
console.log(evenNumbers);
}
evenNumber();

function mapUses(){
    //Map() method is used to create  a new array with the results of calling a provided function on every element in this array
    const numbers= [1, 2, 3, 4];
    const doubled= numbers.map(number => number * 2);
    console.log(doubled)
}
mapUses();

function sortUsed(){
    //sort() function is used to arrange/sort arrays elements either in ascending or descending order
    const fruits =['banana', 'apple', 'cherry'];
    fruits.sort()
    console.log(fruits)
}
sortUsed()
//--------------------------------------------
