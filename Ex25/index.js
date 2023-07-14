"use strict";
function create_car(manufacturer, model, Color, features) {
    const car = {
        manufacturer: manufacturer,
        model: model,
        Color: Color,
        features: features
    };
    return car;
}
const car = create_car("Audi", " Q8 e-tron.", "Black", "GPS & Sunroof");
console.log(car);
