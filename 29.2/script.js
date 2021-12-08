async function getData() {
  let data = await fetch('https://api.jokes.one/jod');
  data = await data.json();
  console.log(data.contents.jokes[0].joke.title);
  console.log(data.contents.jokes[0].joke.text);
}
getData();
