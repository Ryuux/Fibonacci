const readlineSync = require('readline-sync');
const figlet = require('figlet');
const { Table } = require('console-table-printer');

function getFibonacciSequence() {
  let n;
  do {
    const input = readlineSync.question('\x1b[36mEnter the number of terms of the Fibonacci sequence you want to generate: \x1b[0m');
    n = parseInt(input);
    if (Number.isNaN(n) || n <= 0) {
      console.log('\x1b[31mInvalid input. Please enter a positive integer.\x1b[0m');
    }
  } while (Number.isNaN(n) || n <= 0);

  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i-1] + fib[i-2]);
  }
  return fib;
}

function printFibonacciSequence(fib) {
  if (fib.length === 0) {
    return;
  }

  const table = new Table();
  table.addColumns([
    { name: '#', alignment: 'left' },
    { name: 'Value', alignment: 'right' }
  ]);
  for (const [i, term] of fib.entries()) {
    table.addRow({ '#': i+1, 'Value': term });
  }

  console.log(`\x1b[32mThe first ${fib.length} terms of the Fibonacci sequence are:\x1b[0m`);
  table.printTable();
}

function main() {
  console.log('\x1b[35m' + figlet.textSync('Fibonacci') + '\x1b[0m');
  const fib = getFibonacciSequence();
  printFibonacciSequence(fib);
}

main();
