// let count = 0;

// const counter = (amount) => {
//   count = count + amount;
//   return count;
// };

// console.log(counter(5));
// console.log(counter(3));

// We don't follow this approach that much.

// we can create a clouser instead. but we will not use this too much as well.

// const createCouner = () => {
//   let count = 0;

//   return (amount) => {
//     count = count + amount;
//     return count;
//   };
// };

// const counter = createCouner();

// console.log(counter(5));
// console.log(counter(8));

// Finally we will follow this approach, because everyone follow this. and everyone is well aligned with this approach.

class Counter {
  constructor(count) {
    this.count = count;
  }

  add(amount) {
    this.count = this.count + amount;
  }
  print() {
    console.log(this.count);
  }
}

const counter1 = new Counter(10);
counter1.add(3);
counter1.add(5);
counter1.print();

const counter2 = new Counter(50);
counter2.add(5);
counter2.add(9);
counter2.print();
