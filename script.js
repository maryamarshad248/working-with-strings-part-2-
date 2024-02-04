'use strict';

const airLine = 'Tap Air Portugal';
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

const maryamArshad = 'Noman Ejaz';
console.log(maryamArshad.toLowerCase());
console.log(maryamArshad.toUpperCase());

// fox capitalization in name
const mine = 'nOmAN';
const mineLower = mine.toLowerCase();
console.log(mineLower);

const mine2 = mineLower[0].toUpperCase() + mineLower.slice(1);
console.log(mine2);

// comparing email

const email = 'hello@maryam.io';
const loginEmail = '  Hello@Maryam.Io ';
const emailCorrect = loginEmail.toLowerCase();
console.log(emailCorrect);
const trimmedEmail = emailCorrect.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing

const priceCurrency = '243,26#';
const UScurrency = priceCurrency.replace('#', '$').replace(',', '.');
console.log(UScurrency);

const announcement =
  'all passengers come to boarding door 23. boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
// or global method
console.log(announcement.replace(/door/g, 'gate'));

const plane = 'AirBus A3029neo';
console.log(plane.includes('A3029'));
console.log(plane.includes('AirBus'));
console.log(plane.includes('air'));
console.log(plane.includes('ArB'));
console.log(plane.startsWith('AirB'));

if (plane.startsWith('AirBus') && plane.endsWith('neo')) {
  console.log('Part of the Family Bus');
}

// example

const checkLuggage = function (items) {
  const luggage = items.toLowerCase();
  if (luggage.includes('knife') || luggage.includes('gun')) {
    console.log('You are not allowed to go Abroad');
  } else {
    console.log('You are Allowed');
  }
};

checkLuggage('have some Food , Toys and  a Knife');
checkLuggage('get some Snacks and Laptop');
checkLuggage('i have Camera and a Gun');
