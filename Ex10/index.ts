let location01 = [
    "Italy", "Duabi", "France", "Germany", "Japan"
]; 
console.log( 'Orginal location : ',  location01);
///sort
let location02 = location01.slice().sort();
console.log("Alphabetical order:", location02);
console.log( 'Orginal location : ' , location01);

//reverse
let location03 = location01.slice().reverse();

    console.log("Reverse order:", location03);
console.log( 'Orginal location : ' ,  location01);

//reverse orginal order
location01.reverse();
console.log( 'Orginal location which is reverse: ' ,  location01);

location01.reverse();
console.log( 'Orginal location which is 2 time reverse: ' ,  location01);

location01.sort();
console.log( 'Orginal location which sorted: ' ,  location01);

location01.sort((a, b) => b.localeCompare(a));
console.log( 'Orginal location which is Reverse sorted: ' ,  location01);
location01.sort().reverse();
console.log( 'Orginal location which is Reverse sorted: ' ,  location01);
