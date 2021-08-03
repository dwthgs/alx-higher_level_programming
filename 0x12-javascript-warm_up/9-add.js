#!/Users/dev/.nvm/versions/node/v16.6.0/bin/node
function add (a, b) {
  return +a + +b;
}
console.log(add(process.argv[2], process.argv[3]));
