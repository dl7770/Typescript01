
let magicians: string[] = ["Magician 1", "Magician 2", "Magician 3"];


function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  show_magicians(magicians);
  


  function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (let magician of magicians) {
      let greatMagicians = magician + " the Great";
      
      console.log(greatMagicians)
    }
  
    return greatMagicians;
  }  
make_great(magicians);

const magician: string[] = ["Magician 1", "Magician 2", "Magician 3"];
const unchangedMagicians = make_great(magicians.slice());
show_magicians(magicians);
show_magicians(unchangedMagicians);