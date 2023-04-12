#!/usr/bin/node
/* a script that prints x times "C is fun" */
const count = math.floor(Number(process.argv[2]));
if (isNaN(count)) {
  console.log('missing number of occurrences');
} else {
  for (let i = 0; i < count; i++) {
     console.log('C is fun');
  }
}
