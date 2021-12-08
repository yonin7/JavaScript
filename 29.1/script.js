const getIDs = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });
};

async function getIDsAlter() {
  let x = await getIDs();
  console.log(x);
}

getIDsAlter();
getIDs().then((res) => console.log(res));

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: 'Fresh tomato pasta',
          publisher: 'Pinchas Hodadad',
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};

async function getRecipeAlter() {
  let x = await getRecipe(12);
  console.log(x);
}
getRecipeAlter();

async function consumRecipe() {
  try {
    let ids = await getIDs();
    console.log(ids);
    let recipe = await getRecipe(ids[2]);
    console.log(recipe);
  } catch (error) {
    console.log('It is an error!');
  }
}

consumRecipe();
