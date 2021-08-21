/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 

It should have properties for 

- title (a string), 
- servings (a number), and 
- ingredients (an array of strings)

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

You should write and log at least 5 recipes

**/

let recipes = [ 
    { title: "Pasta", 
      servings: 4,
    ingredients : [ "500 grams of Pasta", "Collection of Vegetables" , "sauce"]
},
{ title: "Rice", 
      servings: 3,
    ingredients : [ "1/2 cup of Rice", "hot water" , "Salt"]
},
{
    title: "Grilled Chicked", 
    servings: 2,
  ingredients : [ " One Breat", "Vegetables" , "Salt"]
}
];


console.log(recipes[0].title);
console.log(recipes[0].servings);
console.log(recipes[0].ingredients[0]);
console.log(recipes[0].ingredients[1]);
console.log (recipes[0].ingredients[2]);
