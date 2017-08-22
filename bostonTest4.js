// bostonTest4


// 'this' is a reference to whatever object is calling it
var Bucky = {
	printFirstName: function(){
		console.log("My name is Bucky");
		console.log(this === Bucky);
	}
};
Bucky.printFirstName();


// the default calling context is global
// (if the function belongs to no object, it's global)
function doSomethingWorthless(){
	console.log("\n I am worthless");
	console.log(this === global);
}
doSomethingWorthless();