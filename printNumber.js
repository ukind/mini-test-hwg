const sampleNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printNumber = (numbers = []) => {
  numbers.forEach((number) => {
    if (number % 15 == 0) console.log('TigaLima');
    else if (number % 3 == 0) console.log('Tiga');
    else if (number % 5 == 0) console.log('Lima');
    else console.log(number);
  });
};

printNumber(sampleNumber);
