let personName: string = "Dua";
let lowercaseName: string = personName.toLowerCase();
let uppercaseName: string = personName.toUpperCase();
let titlecaseName: string = personName.replace(/\b\w/g, (c: string) => c.toUpperCase());

console.log("Lowercase name:", lowercaseName);
console.log("Uppercase name:", uppercaseName);
console.log("Titlecase name:", titlecaseName);