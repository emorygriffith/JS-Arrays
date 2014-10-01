// //Question 1

//Create an array out of the prices by pushing the values into a black array.

var priceArray = [];

var push = items.forEach( function(x){
  priceArray.push(x.price);
});

console.log(priceArray);

//Sum up the values by running a reduce function. Create variable "total".

var total = priceArray.reduce(function(a, b) {
  return a + b;
});

console.log(total);

//Divide "total" by the numer of array items.

var avg = total / priceArray.length;

console.log(avg);

//Shorten the number to 2 decimal places.

console.log(avg.toFixed(2));
