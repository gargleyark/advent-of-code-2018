import { numbers } from './data';

console.log('starting day 1 part 2...');

const BreakException = {};
const totals = [];
let found = false;
let acc = 0;

while (!found) {
  numbers.forEach((val, i) => {
    const newTotal = acc + val;
    if (totals.indexOf(newTotal) > -1) {
      !found && console.log(acc + val);
      found = true;
    } else {
      totals.push(newTotal);
      acc += val;
    }
  });
}
