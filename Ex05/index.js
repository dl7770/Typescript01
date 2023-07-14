"use strict";
let person_name = "\tDua\n\tLatif";
console.log(person_name);
let name_without_linebreak = person_name.replaceAll('\n', '');
let name_without_space = name_without_linebreak.replaceAll('\t', '');
//console.log(name_without_linebreak);
console.log(name_without_space);
