const storm = {
  superPower: 'flying',
  superpower: printSuperPower,
};

function printSuperPower() {
  console.log('my superpower is ' + this.superPower);
}
storm.superpower();
