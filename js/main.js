/* Arrays are variables that can hold more than one piece of data. Each piece of data in an array is referred to as an element. */
var myArray = [3, 4, 63, 21, 90, 37282, 72];

/* Instead of one variable, holding one piece of data, you create arrays to hold multiple pieces of data. */
var myVariable = 56;
var mySecondArray = [56, 21, 483];

/* When you should use an array:
- If you need list.
- If you have variables that are related to one another.
- If you need to group related variables together.*/
var store = 'Publix';
var groceryList = ['Oranges', 'Cereal', 'Grapes', 'Bread'];

/* Arrays in Javascript, can hold different data types. In other words, a single array can hold numbers, strings, booleans, and even other arrays. */
var mixedArray = ['Boat', 53, '4563', false, 2829];

/* Arrays that hold other arrays inside of them, are called multidimensional arrays. */
var multiArray = [
		[23, 'Alan'],
		[54, 'George'],
		[29, 'Amber'],
		[42, 'Emily']
	];

/* Each element is assigned an index number in an array. To access the element, you would reference its index number. We call this, 'accessing an array'. */
var partyGuests = ['Jeff', 'Carrie', 'Brad', 'Joey'];
document.write('<br>' + partyGuests[1]);

/* Javascript and most other programming languages begin counting at 0 instead of 1. Therefore, if an element in an array is in third place, its index number would actually be 2. */
document.write('<br>' + partyGuests[3]);

/* Multidimensional arrays are assigned to hold as many arrays as you want. However, it is advisible to keep the level of 'abstraction' to no more than 3. */
var luckyNumbers = [
	[59, 32, 90],
	[21, 89, 24],
	[87, 34, 77]
];
/* In order to access elements in an multidimensional array, you have to reference the index number of the array itself, then of the element inside of that array. */
document.write('<br>' + luckyNumbers[1][1]); // the array, the element

// write to the document, the number 90 and the number 87 using the array accessing method.
document.write('<br>' + luckyNumbers[0][2] + '<br>' + luckyNumbers[2][0]);

/* You can modify variables after they have been declared by declaring the same variable again with the same name but a different value. */
var rainbow = 'unicorn';
document.write('<br>' + rainbow);
var rainbow = 'fairy';
document.write('<br>' + rainbow);

/* Elements inside of an array can also be changed. They can be manipulated, shifted, deleted, you can even add elements to an array using code. */
var changedArray = ['Milk', 'Honey', 'Tea'];
document.write('<br>' + changedArray);
changedArray[2] = 'Sugar';
document.write('<br>' + changedArray);

/* Arrays come with their own methods. Some of the more popular methods include push(), pop(), shift() and unshift(). These were made to manipulate and change arrays. */

// push() is used to add elements to the end of an array.
var cookieRecipe = ['Flour', 'Baking Soda', 'Sugar'];
document.write('<br>' + cookieRecipe);
cookieRecipe.push('Butter', 'Eggs', 'Vanilla');
document.write('<br>' + cookieRecipe);

// pop() is used to remove the last element from an array.
var soup = ['Water', 'Salt', 'Carrots', 'Seasonings'];
document.write('<br>' + soup);
soup.pop();
document.write('<br>' + soup);

// shift() is used to remove the first element in array.
var burgerRecipe = ['Bun', 'Lettuce', 'Patty', ' Onions', 'Ketchup'];
document.write('<br>' + burgerRecipe);
burgerRecipe.shift();
document.write('<br>' + burgerRecipe);

// unshift() is used to add elements to the beginning an array.
var pizza = ['Dough', 'Sauce', 'Pepperoni', 'Cheese'];
document.write('<br>' + pizza);
pizza.unshift('Olives');
document.write('<br>' + pizza);

/* Create a single array, that populates itself using push() or unshift() based upon a user prompt. Populate your array with at least three elements. */

var hotdogs = [];
var question1 = prompt ('what is your favourite color');
var question2 = prompt ('what is your favourite time of the day');
var question3 = prompt ('what is your favourite number between 1 and 25');

hotdogs.push(question1 + question2 + question3);
document.write(hotdogs);


// using for loop

var groceries = [];

for (var i = 0; i < 3; i++) {
	var items = prompt('enter a grocery item');
	groceries.push(items);
}

document.write('<br> groceries List' + groceries);


























