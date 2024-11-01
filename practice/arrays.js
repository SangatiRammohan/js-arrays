/*Q1: Given the string "I love coding", split the string, reverse the order, join it back into a string, 
add the word "JavaScript" to the end, and then remove the last element. Finally, return the length of the resulting array. */
 var str1="I love coding"
 var str2=str1.split(" ").reverse().join(" ")
 var str3="JavaScript"
 var str4=str2.split(" ")
 var str5=str4.concat(str3)
 console.log(str5)

 /*  Q2: Given the arrays arr1 = [10, 20, 30] and arr2 = [40, 50], remove the first element from arr1, 
 add 100 to the beginning, concatenate arr1 with arr2, find the index of 50, and slice the array from index 2 to the end. 
 What is the resulting sliced array?*/
 var arr1=[10,20,30]
 var arr2=[40,50]
 arr1.shift()
 arr1.unshift(100)
 var arr3=arr1.concat(arr2)
 console.log(arr3.indexOf(50))
 console.log(arr3.slice(2))

 /* Q3: Given the array arr = [1, 2, 3, 4, 5], add the number 10 to the end, remove the last element, reverse the array, 
 check if the number 3 is in the reversed array, and find the index of 3. What is the final index of 3?*/ 

var arr=[1,2,3,4,5]
arr.push(10)
arr.pop()
var array=arr.reverse()
console.log(array.includes(3))
console.log(array.indexOf(3))

/* Q4: Given the string "learning is fun", split the string into an array of words, reverse the array, 
join the array back into a string, add the word "indeed" to the beginning, and return the length of the modified array.*/

var a="learning is fun"
var b=a.split(" ")
var c=b.reverse()
var d=c.join(" ")
var e=d.split(" ")
e.unshift("Indeed")
console.log(e)
console.log(e.length)


/* Q5: Given the arrays arr1 = [5, 10] and arr2 = [15, 20, 25], concatenate both arrays, add 30 to the end, 
remove the first element, check if the number 15 is included, and slice the array starting from the second element. 
What is the resulting array?*/
var aa=[5,10]
var bb=[15,20,25]
var cc=aa.concat(bb)
cc.push(30)
cc.shift()
console.log(cc.includes(15))
console.log(cc.shiftlice(1))

/*Q6: Given the array arr = ['apple', 'banana', 'mango', 'orange'], add "grape" to the end, remove the last element, 
slice the array from index 1 to 3, check if "banana" is included, and join the array into a single string. What is the final string? */
let aaa=['apple','banana','mango','orange']
aaa.push("grape")
aaa.pop()
console.log(aaa.slice(1,3))
console.log(aaa.includes('banana'))
let bbb=aaa.toString() // aaa.join()
console.log(bbb)

/* Q7: Given the array arr = [3, 6, 9, 12], add 0 to the beginning, remove the first element,
 reverse the array, concatenate it with [15, 18], and find the index of 9. What is the final index of 9?*/

 var ccc=[3,6,9,12]
 ccc.unshift(0)
 ccc.shift()
 ccc.reverse()
 var ddd=[15,18]
 var eee= ccc.concat(ddd)
 console.log(eee.indexOf(9))

 /*Q8: Given the string "welcome to the world", split it into an array of words, reverse the array, 
 join it back into a string, add the word "adventure" to the end, and check if the word "to" is included. What is the final array?*/

 var string="welcome to the world"
 var string1=string.split(" ")
 var string2=string1.reverse()
 var string3=string2.join(" ")
 var word=" adventure"
 console.log(string3.includes("to"))
  console.log(string3.concat(word))

  // or

  var string="welcome to the world"
 var string1=string.split(" ")
 var string2=string1.reverse()
 var string3=string2.join(" ")
 var strig4=string3.split(" ")
 var word=" adventure"
 strig4.push(word)
console.log(string3.includes("to"))
 console.log(strig4)

 /* Q9: Given two arrays arr1 = [4, 8, 12] and arr2 = [16, 20, 24], add 28 to arr2, concatenate both arrays,
slice the array from the 3rd to 7th element, reverse the sliced array, and find the index of 16. What is the final index of 16?*/

var ram=[4,8,12]
var mohan=[16,20,24]
mohan.unshift(28) //mohan.push(28)
var san=ram.concat(mohan)
var batch=san.slice(2,8)
batch.reverse()
console.log(batch.indexOf(16))

//or

var ram=[4,8,12]
var mohan=[16,20,24]
mohan.push(28)
var san=ram.concat(mohan)
var batch=san.slice(2,8)
batch.reverse()
console.log(batch.indexOf(16))
console.log(batch)

/* Q10: Given the array arr = ['dog', 'cat', 'fish', 'bird'], add "rabbit" to the beginning, remove the last element, 
join the array into a string with "-" as the separator, check if "cat" is included, and slice the array from index 1 to 3. 
What is the resulting array?*/
var room=['dog','cat','fish','bird']
room.unshift('rabbit')
room.pop()
var room1=room.join("-") 
console.log(room1.includes('cat'))
console.log(room1.slice(1,3)) 