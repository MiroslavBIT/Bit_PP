/*1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”. */

var day = 3;

switch (day) {

    case 1:
        console.log("Monday")

        break;

    case 2:
        console.log("Thusday")

        break;

    case 3:
        console.log("Wendsday")

        break;

    case 4:
        console.log("Thursday")

        break;

    case 5:
        console.log("Friday")

        break;

    case 6:
        console.log("Suterday")

        break;

    case 7:
        console.log("Sunday")

        break;
}




/* 2. Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.*/




var day = 10;

switch (day) {

    case 1:
        console.log("Monday")

        break;

    case 2:
        console.log("Thusday")

        break;

    case 3:
        console.log("Wendsday")

        break;

    case 4:
        console.log("Thursday")

        break;

    case 5:
        console.log("Friday")

        break;

    case 6:
        console.log("Suterday")

        break;

    case 7:
        console.log("Sunday")

        break;

    default:
        console.log("Input must be a number between 1 and 7");

}

/*3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”. */


var day = 8;
var result = "";

switch (day) {

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = "It’s weekday"
        break;

    case 6:
    case 7:
        result = "It's weekend"
        break;

    default:
        result = "Input must be number between 1 and 7";
        break;

} console.log(result);


/*4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”. */


var month = 1

var result = ""

switch (month) {


    case 1:
        console.log("January")
        break;

    case 2:
        console.log("February")
        break;

    case 3:
        console.log("March")
        break;

    case 4:
        console.log("April")
        break;

    case 5:
        console.log("May")
        break;

    case 6:
        console.log("Jun")
        break;

    case 7:
        console.log("July")
        break;








}





