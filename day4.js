// length of an Array
let heros =["kathi", "pawan", "surya","NTR"]
console.log(heros.length) 

// add an element to end of an array
let items=['laptop','mobile','tablet','keypad-phone']
items.push('Desktop','LED-TV')
console.log(items)


// remove the last element from an array
let mobiles =['iphone','samsung','oneplus','realme']
console.log(mobiles.pop())

//add an element to the beginning of an array
let bikes =["pulsar","bullet","bmw","tvs"]
bikes.unshift("beneli")
console.log(bikes)

// remove the first element from an array
let car=['swift','mahendra','benz','banelo','kia']
console.log(car.shift())

//reverse the elements in an array
let comapanies=['microsoft','amazon','tcs','ibm','wipro','google']
console.log(comapanies.reverse())

//find the index of a specific value in an array
let places=['hyderabad','warangal','vizag','tirupati','delhi']
console.log(places.indexOf("vizag"))

// check if a certain value exists in an array
let brands = ['zudio', 'max', 'snitch', 'mufti', 'jack&jones'];
console.log(brands.includes('mufti'));

// sort the elements of an array in ascending order
let numbers=['1','3','6','9','0','4']
console.log(numbers.sort())

//convert an array to a string using commas as separators
let fruits=["mango","apple","grapes","watermelon","guava"]
console.log(fruits.toString())