function indexOfUses(){
    //indexOf() method is used to returns the index of the first occurence of the specified element in the array, or -1 if it is not found
    const fruits= ['apple', 'banana', 'cherry']
    const index= fruits.indexOf('banana')
    console.log(index)//1
}indexOfUses()

function fillUses(){
    //fill method fills the elements in an array with a static value and returns the modified array
    const array = [1, 2, 3, 4]
    array.fill(1)
    console.log(array)// Output: [ 1, 1, 1, 1 ] 
}fillUses()

function sliceUses(){
    //slice()  method returns a new array with specified start to end elements
    const fruits =['apple','banana','cherry','date']
    const sliced= fruits.slice(1, 3)
    console.log(sliced); //Output: [ 'banana', 'cherry' ]
} sliceUses()

function reverseUses(){
    //reverse() method reverse an array in place. Element at last index will be first  and element at 0 index will be last
    const array = [1, 2, 3, 4]
    array.reverse()
    console.log(array); //Output: [ 4, 3, 2, 1 ]
}reverseUses()