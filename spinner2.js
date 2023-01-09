let time = 100;
let spinner = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];

for (let spin in spinner) {
  setTimeout(() => {
    process.stdout.write(spinner[spin]);
  }, time);
  time += 200;
}