// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }

  //return the count of numbers in data
  count(data) {
    if (this.data === 0) return 1;
    return this.data;
  }

  //print the numbers in data
  printNumbers(data) {
    this.data.forEach((str, index) => {
      console.log(`Number ${str}, Index: ${index}`);
    });
  }

  //return the odd numbers in data
  odds(data) {
    this.data.forEach((str) => {
      if (str % 2 !== 0) {
        console.log(str);
      }
    });
  }

  //return the even numbers in data
  evens(data) {
    this.data.forEach((str) => {
      if (str % 2 === 0) {
        console.log(str);
      }
    });
  }

  //return the sum of the numbers
  sum(data) {
    const sum = this.data.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    console.log(sum);
  }

  //return the product of the numbers
  product(data) {
    const product = this.data.reduce((accumulator, currentValue) => {
      return accumulator * currentValue;
    }, 1);
    console.log(product);
  }

  //return the numbers greater than the target
  greaterThan(target) {
    for (let i = 0; i, target.length; i++) {
      if (target[i] > target) {
        target.push(target[i]);
      }
    }
    return target;
  }

  //return the count of a given number
  howMany(target) {
    const targetNumber = 9;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === targetNumber) {
        count++;
      }
    }
    console.log(targetNumber);
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
