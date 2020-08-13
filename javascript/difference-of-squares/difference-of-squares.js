//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(n) {
    this.n = n;
  }

  get sumOfSquares() {
    let sum = 0;
    let i = 1;
    while (i <= this.n) {
      sum = sum + (i*i);
      i++;
    }
    return sum;
  }

  get squareOfSum() {
    let i = 0;
    let sum = 0;
    let squaredSum;
    while (i <= this.n) {
      sum = sum + i;
      i++;
    }
    squaredSum = sum * sum;
    return squaredSum
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
