// Stateless vs stateful

// Example of stateless (function)
// const counter = (amount) => {
//   let count = 0;

//   count = count + amount;
//   return count;
// };

// console.log(counter(5));
// console.log(counter(3));

// Example of statefull. (we can do it by clouser in javascript but our mentor showed us in an another way.)

const counter = {
  count: 0,
  add(amount) {
    this.count = this.count + amount;
  },

  print() {
    console.log(this.count);
  },
};

counter.add(2);
counter.add(3);

counter.print();
