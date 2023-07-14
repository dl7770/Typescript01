function make_sandwich(...items: string[]): void {
    console.log("Sandwich order:");
    for (let item of items) {
      console.log(item);
    }
  }
  
  make_sandwich("Bread", "Cheese", "Tomato", "pepper");
  make_sandwich("Bread", "Chicken", "Mayonnaise");
 
  