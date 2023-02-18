//Write a JavaScript program to capitalize the first letter of each word of a given string.
const word = "sharad yuvraj patil";
const words = word.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
var capitalSentence = words.join(" ");
console.log(capitalSentence);