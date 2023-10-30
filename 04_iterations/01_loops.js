// for of

const arr = [1 ,2 ,3 ,4 ,5]

for (const num of arr) {
  //  console.log(num);
}

// Maps --> unique values , same order

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
//console.log(map);

// for of loop on map

for (const key of map) {
   // console.log(key)
}

// for of loop on object - don't work so we will use forin loop

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const key in myObject) {
    console.log(`${key} is ${myObject[key]}`);
}

// forin loop for arrays

const programming = ["js" , "rb" , "py" , "java" , "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// for each loop

const coding = ["js" , "rb" , "py" , "java" , "cpp"]

coding.forEach( function (val) {
    console.log(val);
} )

const myCoding = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )

// filter

const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 10]

const newNums = myNums.filter( (num) => num > 4) // condition
console.log(newNums);

// map

const myNumers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const newNumss = myNumers.map( (num) => num + 10)  // will automatically return value

console.log(newNumss);

// Chainning --> to use 2,3 methods thogether

const myNumerss = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const new1Nums = myNumerss.map().map()

// reduce

const myNumsss = [1,2,3]

const myTotal = myNumsss.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);