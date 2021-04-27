const fs = require("fs");

let cheerio = require("cheerio");

let htmlKaData = fs.readFileSync("./index.html");
// console.log(htmlKaData);
// console.log(htmlKaData.toString());

let ch = cheerio.load(htmlKaData);
// console.log(ch);

// <h1>Heading 1</h1> => object form !!
// let liKaObject = ch("li");
// console.log(liKaObject);

let h1KaData = ch("h1").text();
console.log(h1KaData);
