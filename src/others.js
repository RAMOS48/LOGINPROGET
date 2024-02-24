function ziza(a, b) {
  var c;
  c = a;
  a = b;
  b = c;
}

let a = 3,
  b = 2;
ziza(a, b);
console.log(a, b);
