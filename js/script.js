"use strict"
//1
console.log(5 * 2 < 12);
console.log(55 > 22);
console.log(16 / 4 == 4);
console.log(8 + 2 <= 128);
console.log(32 * 8 != 255);
//2
var veckodag = "Tisdag";
var mat = "Hamburgare";
var citat = "I'll be back";

console.log(veckodag.substring(0, 3));
console.log(mat.substring(3, 10))
console.log(citat.substring(5, 12))
//3
var s = "It's Learning JavaScript: The Good Parts";

console.log(s.substring(0, 14).toUpperCase());
console.log(s.substring(30, 42).toLowerCase());
//4
var numbers = [128, 256, 512, 1024, 2048];
var sumOfNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
}

var avgNumber = sumOfNumbers/numbers.length;

console.log(sumOfNumbers);
console.log(avgNumber)

numbers.push(sumOfNumbers);
console.log(numbers);
//5
var countries = ["Sweden", "Denmark", "Finland", "Norway"];
var antalBokstäver = 0;

for (let i = 0; i < countries.length; i++) {
    antalBokstäver += countries[i].length;
}

console.log(countries[1].substring(0, 3));
console.log(antalBokstäver);
//6
var values = [3, 5, "Jane", true, 144, false];
var reversed = values.reverse();
console.log(reversed);
//7
var names = ["Jane", "Joe", "Eliza"];
var ages = [21, 34, 22];
var hasPet = [true, false, true];
var multipleArrays = names.concat(ages.concat(hasPet));
console.log(multipleArrays);
//8
var actors = ["Sherlock", "Watson", "Bo"];

console.log(actors[0] + " - " + actors[1] + " - " + actors[2]);
//9
var amount = Math.random(0, 100);
if (amount < 50) {
    console.log("Less than 50!");
}
else if(amount >= 50 && amount <65){
    console.log("Optimal range for amount!");
}
else{
    console.log("Too much!");
}
//10
var hashtag = "";

for (let i = 0; i < 8; i++) {
    hashtag += "#";
    console.log(hashtag);
}
//