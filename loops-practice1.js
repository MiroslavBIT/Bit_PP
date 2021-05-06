/* Write a program that will iterate from 0 to 10 and display squares of numbers. 

var i = 0
for (var i = 0; i < 10; i++) {
    console.log(i * i)
}


/* 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.

var i = 1
var sum = ""


for (var i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log('even')
    } else {
        (i % 2 === 1)
        console.log('odd')

    }
}

/* 2. Write a program to sum the multiples of 3 and 5 under 1000. 


var sum = 0

for (var i = 0; i < 1000; i++) {
    if (i % 15 === 0) {
        sum += i
    }
}
console.log(sum)

/*3. Write a program to compute the sum and product of an array of integers. 

var array = [1, 2, 45, 55, 36]
var sum = 0
var product = 1

for (var i = 0; i < array.length; i++) {

    sum += array[i]

    product *= array[i]
}
console.log(sum)
console.log(product)

4. Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined] */

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined]

var result = ''

for (var i = 0; i < x.length; i++) {
    result += x[i]
} console.log(result)










