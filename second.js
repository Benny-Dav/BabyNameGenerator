const postUrl = 'https://jsonplaceholder.typicode.com/posts';

const url="www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const response = fetch(postUrl);
const cocktail = response.then((data) => console.log(data.json()));
console.log(cocktail);
