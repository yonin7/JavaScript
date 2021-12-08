const inputsEl = document.querySelector('.inputs');
const inputNameEl = document.querySelector('.inputName');
const searchBtnEl = document.querySelector('.inputBtn');
const posterEl = document.querySelector('.moviePoster');
const TitleEl = document.querySelector('.movieTitle');
const GenerEl = document.querySelector('.movieGener');
const YearEl = document.querySelector('.movieYear');
const PlotEl = document.querySelector('.moviePlot');
const DirectorEl = document.querySelector('.movieDirector');
const ActorsEl = document.querySelector('.movieActors');
const RatingsEl = document.querySelector('.movieRatings');
const imdbEl = document.querySelector('.imdb');
const tomatoesEl = document.querySelector('.tomatoes');
const metacriticEl = document.querySelector('.metacritic');

searchBtnEl.addEventListener('click', movieDescription);

async function movieDescription(e) {
  e.preventDefault();
  try {
    const githubUserData = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=bec056a6&t=${inputNameEl.value}`
    );
    if (!githubUserData.ok) throw new Error('not found');
    const githubUserJson = await githubUserData.json();
    console.log(githubUserJson);
    let ratings = {};
    githubUserJson.Ratings.forEach((element) => {
      ratings[element['Source']] = element['Value'];
    });
    if (
      ratings['Rotten Tomatoes'] &&
      ratings['Metacritic'] &&
      githubUserJson.imdbRating
    ) {
      TitleEl.innerText = githubUserJson.Title;
      posterEl.src = githubUserJson.Poster;
      GenerEl.innerText = githubUserJson.Genre;
      YearEl.innerText = githubUserJson.Year;
      PlotEl.innerText = githubUserJson.Plot;
      DirectorEl.innerText = githubUserJson.Director;
      ActorsEl.innerText = githubUserJson.Actors;
      imdbEl.innerText = `imdb:${githubUserJson.imdbRating}`;
      tomatoesEl.innerText = `Rotten Tomatoes:${ratings['Rotten Tomatoes']}`;
      metacriticEl.innerText = `Metacritic:${ratings['Metacritic']}`;
    }

    console.log(githubUserJson);
  } catch {
    console.log('User not found!');
  }
}
