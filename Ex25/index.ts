function create_car(manufacturer: string, model: string, Color : string, features: string): object {
    const car = {
      manufacturer: manufacturer,
      model: model,
      Color : Color,
      features: features
    };
  
    return car;
  }
  
  const car = create_car("Audi", " Q8 e-tron.", "Black", "GPS & Sunroof");
  console.log(car);
  