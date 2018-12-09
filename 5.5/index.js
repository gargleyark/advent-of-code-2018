import { data } from './data';

console.log('starting day 5 part 2...');

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
let matches = true;

const reduceComponents = (item, index, array) => {
  const next = array[index + 1];
  if (!next) {
    return;
  }

  if (areOpposites(item, next)) {
    array.splice(index, 2);
    matches = true;
  }
};

const areOpposites = (a, b) => {
  const charCodeA = a.charCodeAt(0);
  const charCodeB = b.charCodeAt(0);
  return charCodeA - 32 === charCodeB || charCodeA + 32 === charCodeB;
};

const testDataArray = data => {
  matches = true;
  while (matches) {
    matches = false;
    data.forEach(reduceComponents);
  }
  return data.length;
};

let bestTotal;

letters.forEach(letter => {
  const thisTotal = testDataArray(
    data.replace(new RegExp(letter, 'gi'), '').split('')
  );

  if (!bestTotal) {
    bestTotal = thisTotal;
  } else if (thisTotal < bestTotal) {
    bestTotal = thisTotal;
  }
});

console.log(bestTotal);
