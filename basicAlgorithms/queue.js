class Queue {
  collection = [];
  constructor() {
    this.print = () => {
      console.log(collection);
    };
    // Push a new item onto the queue (in the end of the queue)
    this.enqueue = (elements) => {
      this.collection.push(elements);
    };
    //Return and remove the first item from the queue
    this.dequeue = () => {
      return this.collection.shift();
    };
    //Return (not remove) the first item from the queue
    this.front = () => {
      return this.collection[0];
    };

    this.size = () => {
      return this.collection.length;
    };

    this.isEmpty = () => {
      return this.collection.length === 0;
    };
  }
}

var queue = new Queue();
queue.enqueue("12");
queue.enqueue("12");
queue.enqueue("12");
queue.enqueue("12");

console.log(queue.isEmpty());
console.log(queue.dequeue());

/* PriorityQueue */
//Still bug, fix later

class PriorityQueue {
  collection = [];
  constructor() {
    this.print = () => {
      console.log(collection);
    };
    // Push a new item onto the queue (in the end of the queue)
    this.enqueue = (elements) => {
      if (this.isEmpty()) {
        this.collection.push(elements);
      } else {
        var isAdded = false;
        isAdded = this.collection.forEach((element) => {
          var index = this.collection.indexOf(element);
          console.log(index);
          if (element[1] < this.collection[index][1]) {
            this.collection.splice(index, 0, element);
            isAdded = true;
          }
        });
        if (!isAdded) {
          this.collection.push(elements);
        }
      }
    };
    //Return and remove the first item from the queue
    this.dequeue = () => {
      return this.collection.shift();
    };
    //Return (not remove) the first item from the queue
    this.front = () => {
      return this.collection[0];
    };

    this.size = () => {
      return this.collection.length;
    };

    this.isEmpty = () => {
      return this.collection.length === 0;
    };
  }
}
var pri = new PriorityQueue();
pri.enqueue(["a", 1]);
pri.enqueue(["a", 2]);
pri.enqueue(["a", 3]);
pri.enqueue(["a", 4]);
pri.enqueue(["a", 0]);

console.log("1" > "0");
pri.collection.forEach((element) => console.log(element));
