// Arry implimention.

class Queue {
  constructor() {
    this.items = [];
  }

  //   O(1)
  enqueue(value) {
    this.items.push(value);
  }

  //   O(n)
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  //   O(1)
  pick() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  //   o(1)
  isEmpty() {
    return this.items.length === 0;
  }

  //   O(n)
  print() {
    console.log("STart -> ", this.items.join(" -> "), "End");
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.pick());

queue.print();

queue.dequeue();
queue.print();
