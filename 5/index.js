import { data } from './data';

console.log('starting day 5...');

const dataArray = data.split('');
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

while (matches) {
  matches = false;
  dataArray.forEach(reduceComponents);
}

console.log(dataArray.length);
