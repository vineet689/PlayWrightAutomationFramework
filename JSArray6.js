function pushUses(){
    //push() method is use to adds one or more elements to the end of array and returns the new length of the array
    const array= [1, 2, 3]
    const newLength= array.push(4)
    console.log(array) //Output: [ 1, 2, 3, 4 ]
    console.log(newLength) //Output: 4
}pushUses()

function popUses(){
    //pop() method removes the last element from the end of array and return that element
    const array= [1, 2, 3, 4]
    const lastElement= array.pop();
    console.log(array)//Output : [ 1, 2, 3 ]
    console.log(lastElement)//Output: 4
}popUses()

function shiftUses(){
    //shift() method removes the first element from an array  and return that element
    const array= [1, 2, 3, 4]
    const firstElement = array.shift();
    console.log(array) //Output: [ 2, 3, 4 ]
    console.log(firstElement)//Output: 1
}shiftUses()
function unshiftUses(){
    //unshift() method adds one or more elements to the begining of an array and returns the new length of the array
    const array =[1, 2, 3]
    const newLength= array.unshift(0)
    console.log(array) //Output: [ 0, 1, 2, 3 ]
    console.log(newLength)//Output: 4
}unshiftUses();

function outPut(){
    const x=(a,b=2)=>a+b,y=x(5);
    console.log("Output method:")
    console.log(typeof y,y===7);
}outPut();