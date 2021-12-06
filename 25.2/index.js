const hero = {
  name: 'Yoni',

  printName: function () {
    console.log(this.name);
  },
  printName2: function () {
    setTimeout(this.printName.bind(hero), 1000);
  },
};

hero.printName();
hero.printName2();
