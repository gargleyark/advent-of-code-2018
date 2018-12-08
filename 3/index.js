import { templates } from './data';

console.log('starting day 3...');

const cloth = {};
let spaceTaken = 0;

templates.forEach(template => {
  const id = parseInt(template.match(/#(\d+)/)[1]);
  const left = parseInt(template.match(/(\d+),/)[1]);
  const top = parseInt(template.match(/,(\d+)/)[1]);
  let width = parseInt(template.match(/(\d+)x/)[1]);
  let height = parseInt(template.match(/x(\d+)/)[1]);

  while (width > 0) {
    while (height > 0) {
      if (cloth[width + left] === undefined) {
        cloth[width + left] = {};
      }

      if (cloth[width + left][height + top] === undefined) {
        cloth[width + left][height + top] = id;
      } else if (cloth[width + left][height + top] !== '#') {
        cloth[width + left][height + top] = '#';
      }
      height--;
    }
    width--;
  }
});

const columns = Object.keys(cloth);

columns.forEach(column => {
  const rows = Object.keys(cloth[column]);
  rows.forEach(row => cloth[column][row] === '#' && spaceTaken++);
});

console.log(spaceTaken);
