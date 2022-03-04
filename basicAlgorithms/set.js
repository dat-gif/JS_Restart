// Sets
function mySet() {
  var collection = [];
  //Check exist in Sets
  this.has = function (elements) {
    return collection.indexOf(elements) !== -1;
  };

  this.values = function () {
    return collection;
  };

  //Adding elements
  this.add = function (elements) {
    if (!this.has(elements)) {
      collection.push(elements);
      return true;
    }
    return false;
  };

  //Removing elements
  this.remove = function (elements) {
    if (this.has(elements)) {
      let index = collection.indexOf(elements);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  //Get size
  this.size = function () {
    return collection.length;
  };
  // Unions two set without duplicate
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach((element) => {
      unionSet.add(element); //Add element already contain check,(look out "this.add")
    });
    secondSet.forEach((element) => {
      unionSet.add(element);
    });
    return unionSet;
  };

  //Return intersection (mean only if element exist in both set) of two set as new set
  this.intersection = function (otherSet) {
    var intersection = new mySet();
    var firstSet = this.values();
    firstSet.forEach((element) => {
      if (otherSet.has(element)) intersection.add(element);
    });
    return intersection;
  };

  //Return difference between two sets
  this.difference = function (otherSet) {
    var difference = new mySet();
    var firstSet = this.values();
    firstSet.forEach((element) => {
      if (!otherSet.has(element)) difference.add(element);
    });
    return difference;
  };

  // Check if set is a subset of difference set
  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every((element) => {
      return otherSet.has(element);
    });
  };
}

var aSet = new mySet();
var bSet = new mySet();
aSet.add("q");
aSet.add("q");
aSet.add("1");
aSet.add("2");
aSet.add("3");
aSet.add("4");
bSet.add("3");
bSet.add("4");
bSet.add("5");
console.log(aSet.subset(bSet));
console.log(aSet.intersection(bSet).values());
console.log(aSet.difference(bSet).values());
