import { data } from './data';

console.log('starting day 4...');

const orderedData = data.sort((a, b) => {
  const first = parseInt(
    a
      .split(']')[0]
      .match(/\d/g)
      .join('')
  );
  const second = parseInt(
    b
      .split(']')[0]
      .match(/\d/g)
      .join('')
  );

  if (first > second) {
    return 1;
  }

  if (first < second) {
    return -1;
  }

  return 0;
});

const guards = {};
let currentGuard;

orderedData.forEach(event => {
  const newGuard = event.match(/#(\d+)/);
  const minute = event.match(/(\d+)\]/)[1];

  if (newGuard) {
    currentGuard = newGuard[1];
    guards[currentGuard] = guards[currentGuard] || {
      id: currentGuard,
      minutesAsleep: 0,
      individualTimesAsleep: {}
    };
  }

  if (event.match(/asleep/)) {
    const start = (guards[currentGuard].lastFellAsleepAt = parseInt(minute));
  }

  if (event.match(/wakes/)) {
    guards[currentGuard].minutesAsleep =
      guards[currentGuard].minutesAsleep +
      parseInt(minute) -
      guards[currentGuard].lastFellAsleepAt;

    for (let i = guards[currentGuard].lastFellAsleepAt; i < minute; i++) {
      guards[currentGuard].individualTimesAsleep[i] =
        guards[currentGuard].individualTimesAsleep[i] || 0;
      guards[currentGuard].individualTimesAsleep[i]++;
    }
  }
});

let sleepiestGuard;

const guardIds = Object.keys(guards);

guardIds.forEach(guardId => {
  const currentGuard = guards[guardId];

  if (!sleepiestGuard) {
    sleepiestGuard = currentGuard;
  }

  if (currentGuard.minutesAsleep > sleepiestGuard.minutesAsleep) {
    sleepiestGuard = currentGuard;
  }
});

let sleepiestMinute;

const individualTimesAsleep = Object.keys(sleepiestGuard.individualTimesAsleep);

individualTimesAsleep.forEach(minute => {
  if (!sleepiestMinute) {
    sleepiestMinute = minute;
  }
  if (
    sleepiestGuard.individualTimesAsleep[minute] >
    sleepiestGuard.individualTimesAsleep[sleepiestMinute]
  ) {
    sleepiestMinute = minute;
  }
});

console.log(sleepiestGuard.id * sleepiestMinute);
