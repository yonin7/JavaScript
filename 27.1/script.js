const myFunc = (num) => {
  return new Promise((resolve, rejecet) => {
    setTimeout(() => {
      if (num > 10) resolve(num);
      else rejecet(num);
    }, 1000);
  });
};

myFunc(9)
  .then((res) => console.log(`${res} grater then 10`))
  .catch((res) => console.log(`${res} smaller then 10`));
