var isAvailable;

function foo(x) {
  if (x > 10) {
    isAvailable = true;
  } else {
    isAvailable = false;
  }
  return isAvailable;
}

console.log(foo(8));