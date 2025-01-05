/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/

// const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here

// const numsSquared = nums.map((num) => {
//     return num * num;
// });

// console.log(numsSquared);


/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

// const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

// const namesCapitalised = names.map((name) => {
//     return name[0].toUpperCase() + name.substring(1, name.length);
// })
// console.log(namesCapitalised);

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemons = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const pokemonParagraphs = pokemons.map(pokemon => `<p>${pokemon}</p>`);

console.log(pokemonParagraphs);
