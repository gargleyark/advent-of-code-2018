import { ids } from './data';

console.log('starting day 2 part 2...');

ids.forEach((thisId, thisIndex) => {
  ids.forEach((id, index) => {
    let matches = 0;
    let invalidChar = '';
    thisId.split('').forEach((char, index) => {
      if (id[index] === char) {
        matches++;
      } else {
        invalidChar = char;
      }
    });

    if (matches === thisId.length - 1) {
      console.log(thisId.replace(invalidChar, ''));
    }
  });
});
