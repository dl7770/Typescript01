let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
 const number = numbers[i];
 let ordinalEnding: string;

  if (number === 1 || number === 2 || number === 3) {
    switch (number) {
      case 1:
        ordinalEnding = "st";
        break;
      case 2:
        ordinalEnding = "nd";
        break;
      case 3:
        ordinalEnding = "rd";
        break;
    }
  } else {
    ordinalEnding = "th";
  }

  console.log(`${number}${ordinalEnding}`);
}
