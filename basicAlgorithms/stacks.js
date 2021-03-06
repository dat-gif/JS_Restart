// main functions: push, pop, peek, length
//Demo with array
var letter = [];
var word = "testtest";
var rWord = "";
for (var i = 0; i < word.length; i++) {
  letter.push(word[i]);
}

for (i = 0; i < word.length; i++) {
  rWord += letter.pop();
}

console.log(word);
console.log(rWord);
console.log(word.length);

// Stack class (for leaning)
var Stack = function () {
  this.count = 0; //count number elements in stack
  this.storage = {};
  //push
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //pop
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  // get size
  this.size = function () {
    return this.count;
  };
  //peek
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};
