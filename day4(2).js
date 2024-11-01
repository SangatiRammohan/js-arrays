//snippet that adds an element to the end of an array, then removes the first element.
let car=['swift','mahendra','benz','banelo','kia']
car.push('nano')
car.shift()
console.log(car)

//reverse an array and then join the elements into a string
let fruits=["mango","apple","grapes","watermelon","guava"]
fruits.reverse()
fruits.push("gradenfruits")
console.log(fruits)

//a code that first sorts an array in ascending order, then removes the last element.
let numbers = ['1', '3', '6', '9', '0', '4'];
numbers.sort();
console.log(numbers);
numbers.pop();
console.log(numbers);

//add two elements at the beginning of an array, then remove the first element and find the length of the array
let mobiles =['iphone','samsung','oneplus','realme']
mobiles.unshift('redmi','oppo')
mobiles.shift()
console.log(mobiles.length)

//combine two arrays, sort the combined array, and then remove the last element
let boys=['karthik','ram','diwakar','rasheed','sushwanth']
let girls=['Anuhya','priya','sushma','devi','sahithi','swetha']
let students=boys.concat(girls)
students.sort()
console.log(students)


