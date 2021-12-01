// const sentence = "hello there from lighthouse labs";
// let delay = 0;

// for (let char of sentence) {
//   setTimeout(() => process.stdout.write(char), delay);
//   delay += 50;
// }

// setTimeout(() => {
//   // print the char here
//   console.log("\n");
// }, delay); // <= 1s delay to make it noticeable. Can dial it down later.

const sentence = "Test One Two Three" + "\n";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char, delay++);
  }, (delay = delay + 50));
}
