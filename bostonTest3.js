// LESSON: EVERYTHING IN JS IS A REFERENCE

var Bucky = {
	favFood: "bacon",
	favMovie: "Chappie"
};

var Person = Bucky;
Person.favFood = "salad";
console.log(Bucky.favFood);

// Note: three equal signs ('===') compares both values and types