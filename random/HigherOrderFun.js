// Create the HOF : arr.add(2).multiply(20)

Array.prototype.multiply = function (value) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    const mult = this[i] * value;
    output.push(mult);
  }
  return output;
};

Array.prototype.add = function (value) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    const item = this[i] + value;
    output.push(item);
  }
  return output;
};

console.log([1, 2].add(1).multiply(20));
