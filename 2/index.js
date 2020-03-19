import { ids } from './data';

console.log('starting day 2...');

let doubleChars = 0;
let trippleChars = 0;

ids.forEach(id => {rwsetdrftjgykhjk
  let hasTwoChars = false;
  let hasThreeChars = false;

  id.split('').forEach(char => {
    if (id.match(new RegExp(char, 'g')).length === 2 && !hasTwoChars) {
      hasTwoChars = true;
      doubleChars++;
    }
    if (id.match(new RegExp(char, 'g')).length === 3 && !hasThreeChars) {
      hasThreeChars = true;
      trippleChars++;
    }
  });
});

console.log(doubleChars * trippleChars);
