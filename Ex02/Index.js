"use strict";
let personName = "Dua";
let lowercaseName = personName.toLowerCase();
let uppercaseName = personName.toUpperCase();
let titlecaseName = personName.replace(/\b\w/g, (c) => c.toUpperCase());
console.log("Lowercase name:", lowercaseName);
console.log("Uppercase name:", uppercaseName);
console.log("Titlecase name:", titlecaseName);
