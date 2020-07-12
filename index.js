#!/usr/bin/env node

const path = require('path');
const { spawn } = require('child_process');

let file = path.join(__dirname, "bin/effective-spork-public");
const child = spawn(file, process.argv.slice(2));

child.stdout.on('data', (data) => {
  console.log(`${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`${data}`);
});

child.on('close', (code) => {
  process.exit(code)
});
