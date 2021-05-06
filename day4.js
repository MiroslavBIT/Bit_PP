var b = 33;
var a = b > 0 ? "b is positive" : "b is negative"

// console.log(a)


//
var a = 11;
var result = "";

if (typeof a === "number") {
    if (a % 2 === 0) {
        result = "10 / 2= 5"
    } else {
        result = 'X'
    }
}
console.log(result)

//
var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a > b && a > c && a > d && a > e) {
    console.log(a)
} else if (b > a && b > c && b > d && b > e) {
    console.log(b)
} else if (c > a && c > b && c > d && c > e) {
    console.log(c)
} else if (d > a && d > b && d > c && d > e) {
    console.log(d)
} else {
    console.log(e)
}


//
var a = 0;
var b = -1;
var c = 4;

if (a > b && a > c) {
    if (b > c) {
        console.log(a, b, c)
    } else {
        console.log(a, c, b)
    }

} else if (b < a && b > c) {
    if (a > c) {
        console.log(b, a, c)
    } else {
        console.log(b, c, a)
    }
} else {
    if (b > c) {
        console.log(c, b, a)
    } else {
        console.log(c, a, b)
    }
}

//
var temperature = 60;
var unit = "c";
var result;

if (unit === "c") {
    result = (9 * temperature / 5) + 32
} else {
    result = ((temperature - 32) / 9) * 5
}
console.log(result)

//

var a = 13;










