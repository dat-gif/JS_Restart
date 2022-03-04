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
