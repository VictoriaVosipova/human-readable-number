module.exports = function toReadable(number) {
  const digits = ['zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',

  ];
  const tens = ['twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (number >= 0 && number <= 9) {
    return digits[number];
  }

  if (number >= 10 && number <= 19) {
    return teens[number - 10];
  }

  if (number >= 20 && number <= 90 && number % 10 === 0) {
    return tens[number / 10 - 2];
  }

  if (number > 20 && number < 100 && number % 10 !== 0) {
    return tens[Math.floor(number / 10) - 2] + ' ' + digits[number % 10];

  }

  if (number >= 100 && number <= 900 && number % 100 === 0) {
    return digits[number / 100] + ' ' + 'hundred';
  }

  if (number >= 100 && number <= 999 && Math.floor(number / 10) % 10 === 0) {
    return digits[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + digits[number % 10];
  }

  if (number > 100 && number <= 999 && Math.floor(number / 10) % 10 === 1) {
    return digits[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + teens[number % 10];
  }

  if (number >= 100 && number <= 999 && number % 10 === 0 && number % 100 !== 0) {
    let tensAmount = number % 100 / 10 - 2;
    return digits[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + tens[tensAmount];
  }

  if (number > 100 && number <= 999 && number % 10 !== 0) {
    let tensAmount = Math.floor((number % 100) / 10) - 2;
    return digits[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + tens[tensAmount] + ' ' + digits[number % 10];
  }




}