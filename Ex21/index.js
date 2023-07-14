"use strict";
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
;
describe_city("karachi");
describe_city("lahore");
describe_city("Milan", "Italy");
function city_country(city01, country01) {
    return `${city01}, ${country01}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Milan", "Italy"));
console.log(city_country("Seoul", "South Korea"));
