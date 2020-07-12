#!/usr/bin/env node

const path = require('path');
const { spawn } = require('child_process');

let platform = process.platform;
let command = findCommand(platform);

if (!command) {
  console.error(`The ${platform} platform isn't currently supported.`);
  process.exit(1)
}

const child = spawn(command, process.argv.slice(2));

child.stdout.on('data', (data) => {
  console.log(`${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`${data}`);
});

child.on('close', (code) => {
  process.exit(code)
});

function findCommand(platform) {
  switch(platform) {
  case 'win32':
    return path.join(__dirname, "publish", "win-x64", "effective-spork-public");
  case 'linux':
    return path.join(__dirname, "publish", "linux-x64", "effective-spork-public");
  case 'darwin':
    return path.join(__dirname, "publish", "osx-x64", "effective-spork-public");
  }
}
