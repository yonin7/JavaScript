const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return 'I am stronger';
  } else return 'You are stronger';
}
whoIsStronger(hero.getStrength.bind(hero));

//1. missing bind at the function calling
//   so 'this refered to window, whitch does
//   not have health or power attributes.
