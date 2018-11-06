let raceNumber = Math.floor(Math.random() * 1000);

let early = 'true';
let age = '18';

if (early && age > 18) { 
  console.log(raceNumber += 1000);
}

if (early && age > 18) { 
  console.log(`congrats old person your run will start at 9:30am your number is ${raceNumber}`);
} else if (!early && age > 18) {
  console.log(`you start at 11 racenumber is ${raceNumber}`);
} else if (age < 18) {
  console.log(`youn peeps start at 1230 your racenumber is ${raceNumber}`);
} else {
  console.log('see reg desk plz');
}
