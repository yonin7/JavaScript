function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function () {
  if (this.a == this.b && this.a == this.c && this.a == this.d) return true;
  else return false;
};

const sq = new Square(5, 6, 5, 5);
const sq2 = new Square(5, 5, 5, 5);

console.log(sq.isSquare());
console.log(sq2.isSquare());
