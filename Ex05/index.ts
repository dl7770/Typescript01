let person_name : string = "\tDua\n\tLatif";
console.log(person_name);
let name_without_linebreak : string = person_name.replaceAll('\n', '')
let name_without_space : string = name_without_linebreak.replaceAll('\t', '');
//console.log(name_without_linebreak);
console.log(name_without_space);

