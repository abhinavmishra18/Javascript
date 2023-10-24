// Declare

const myArr = [0 ,1 ,2 ,3,4]; 

// Can also include different types of element

// Arrays in javaScript are resizable

// Arrays elements cannot be accessed using arbitary strings

// When we perform copy operation , it creates a shallow copies ( A shallow copy of an object is a copy whose properties share the same reference point to the same underlying values as those of the source object from which the copy was made)

// Array Methods 

myArr.push(6) // pushes an element in an array

myArr.pop() // pops the last element from an array

myArr.unshift(9) // pushes an element from starting

myArr.shift() // pushes out the first element

const newArr = myArr.join() // binds the array and converts it into string

// slice , splice

// In slice original array is not changed but in splice the original array is changed  and the portion that we splice is removed from the original array

// For Merging two arrays use concat method instead of using push concat returns new array and we can also use spread operator

