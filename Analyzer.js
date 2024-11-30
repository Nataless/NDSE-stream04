#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs');
const path = require('path');

const { argv } = yargs(hideBin(process.argv));

function getStats(file) {
  fs.readFile(file, 'utf-8', (err, result) => {
    if (err) {
      throw new Error(err);
    }

    currentResult = JSON.parse(result);

    let wins = 0;
    let loses = 0;
    for (let i = 0; i < currentResult.length; i++) {
      const el = currentResult[i];
      if (el.result === 'win') {
        wins++;
      } else if (el.result === 'lose') {
        loses++;
      }
    }

    console.log(`Всего сыгранных игр: ${currentResult.length} (${wins} побед, ${loses} поражений)`);
    console.log(`Доля побед: ${wins / currentResult.length * 100}%`);
  });
}

const logFile = path.join(__dirname, argv['_'].length > 0 ? `${argv['_']}.txt` : 'result.txt');

getStats(logFile);