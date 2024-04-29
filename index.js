#! /usr/bin/env node
var totalMarks = 850;
var obtainMarks = 620;
var percentage = (obtainMarks * 100) / totalMarks;
if (percentage >= 80 && percentage <= 100) {
    console.log("your grade is A1");
}
else if (percentage >= 70 && percentage <= 79) {
    console.log("your grade is A");
}
else if (percentage >= 60 && percentage <= 69) {
    console.log("your grade is B");
}
else if (percentage >= 50 && percentage <= 59) {
    console.log("your grade is C");
}
else if (percentage >= 40 && percentage <= 49) {
    console.log("your grade is D");
}
else if (percentage >= 20 && percentage <= 39) {
    console.log("your grade is Fail");
}
