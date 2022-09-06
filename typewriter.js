const sentence = "hello there from lighthouse labs";

for (let x = 0; x < sentence.length; x++) {
  function time () {
    setTimeout(() => {
    process.stdout.write(sentence[x])
  },50 * x)}
time(x);
}
setTimeout(() => {
  console.log(`\n`);
}, 2000)
