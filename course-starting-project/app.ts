const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string]; // tuple
} = {
	name: 'Bryan',
	age: 32,
	hobbies: ['Sports', 'Cooking'],
	role: [2, 'author'],
};

person.role.push('admin'); // Strnage that this works, but push is an exception
// person.role[1] = 10; // error
// person.role = [0, 'admin', 'user']; // This works though because length is 3


let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
	// console.log(hobby.map()); // Error
}

// const person: {
// 	name: string;
// 	age: number;
// } = {
// 	name: 'Bryan',
// 	age: 32,
// };
// console.log(person.name);

// const person: object = {
// 	name: 'Bryan',
// 	age: 32,
// };
// console.log(person.name);
