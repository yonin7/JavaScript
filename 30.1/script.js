const btn = document.querySelector('#btnSearch');
const input = document.querySelector('#userinput');
const body = document.querySelector('body');
var usersNames = [];

async function addUserData(e) {
  e.preventDefault();
  try {
    if (!usersNames.includes(input.value)) {
      const githubUserData = await fetch(
        `https://api.github.com/users/${input.value}`
      );
      if (!githubUserData.ok) throw new Error('not found');
      const githubUserJson = await githubUserData.json();
      usersNames.push(input.value);
      let cardEl = document.createElement('div');
      let imgEl = document.createElement('img');
      let nameEl = document.createElement('h2');
      let repEl = document.createElement('h4');
      imgEl.src = githubUserJson.avatar_url;
      nameEl.innerText = githubUserJson.name;
      repEl.innerText = githubUserJson.public_repos;
      body.appendChild(cardEl);
      cardEl.appendChild(imgEl);
      cardEl.appendChild(nameEl);
      cardEl.appendChild(repEl);
      console.log(githubUserJson);
    }
  } catch {
    console.log('User not found!');
  }
}

btn.addEventListener('click', addUserData);
