import { data } from './data';

console.log('starting day 6...');

const commandMaps = {};
const commandOrder = [];

const CommandMap = class {
  constructor(command) {
    this.command = command;
    this.done = false;
    this.requiredCommands = [];
  }
};

const createRequiredCommandMap = commandString => {
  const requirement = commandString.match(/\s\w\s/g)[0].trim();
  const command = commandString.match(/\s\w\s/g)[1].trim();

  commandMaps[command] = commandMaps[command] || new CommandMap(command);

  commandMaps[requirement] =
    commandMaps[requirement] || new CommandMap(requirement);

  commandMaps[command].requiredCommands.push(requirement);
};

const runCommandIfRequiredCommandsDone = (command, i) => {
  let canRunCommand = true;

  command.requiredCommands.forEach(requirement => {
    if (commandMaps[requirement].done === false) {
      canRunCommand = false;
    }
  });

  if (canRunCommand) {
    commandOrder.push(command.command);
    command.done = true;
    return true;
  }

  return false;
};

data.forEach(createRequiredCommandMap);

const commandsMapsKeys = Object.keys(commandMaps);

commandsMapsKeys.sort();

while (commandOrder.length < commandsMapsKeys.length) {
  let commandRunThisTime = false;
  commandsMapsKeys.forEach(command => {
    if (!commandMaps[command].done && !commandRunThisTime) {
      commandRunThisTime = runCommandIfRequiredCommandsDone(
        commandMaps[command]
      );
    }
  });
}

console.log(commandOrder.join(''));
