// TODO: Create a multiline string using template literals

console.log(`
  ==============================================================================
  ToDo 1: multiline string
  Create a multiline string using template literals
  ==============================================================================
  `)

const funfact = 
`A chicken once lived 
for 18 months without 
a head, surviving due 
to intact brainstem and 
jugular vein functions`;

console.log("Did you know",funfact)

// TODO: Create a function that uses template literals for HTML generation

console.log(`
  ==============================================================================
  ToDo 2: HTML generation
  Create a function that uses template literals for HTML generation
  ==============================================================================
  `)

function personalSite(name, age, fewords, hobby) {
 
  const html = `
    <div class="user-card">
      <h2>${name}</h2>
      <p>${fewords}</p>
      <p>Age: ${age}</p>
      <p>Favorite Hobby: ${hobby}</p>
    </div>
  `;
  
  return html;
}

const cardinfo = personalSite("Alice", 28, "Hello this is my i like to introduce myself and go on by telling you about myself", "Painting");
console.log(cardinfo);

// TODO: Convert regular functions to arrow functions

console.log(`
  ==============================================================================
  ToDo 3: arrow functions
  Convert regular functions to arrow functions
  ==============================================================================
  `)

let myfunction = (x,y) => x - y;

console.log("This is the sum of my function",myfunction(5,6))

// TODO: Use arrow functions with array methods

console.log(`
  ==============================================================================
  ToDo 4: array methods
   Use arrow functions with array methods
  ==============================================================================
  `)

const users = [
  { name: "Alice", age: 28, hobby: "Painting" },
  { name: "Bob", age: 34, hobby: "Cycling" },
  { name: "Charlie", age: 22, hobby: "Gaming" }
];

const createUserCards = (userArray) => {

  const htmlCards = userArray.map(
    (user) => `
      <div class="user-card">
        <h2>${user.name}</h2>
        <p>Age: ${user.age}</p>
        <p>Hobby: ${user.hobby}</p>
      </div>
    `
  );

  return htmlCards.join('');
};

const userCardsHTML = createUserCards(users);
console.log(userCardsHTML);
