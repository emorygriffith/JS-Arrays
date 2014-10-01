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

console.log("The average is" + " " + avg.toFixed(2));

// ----------------------------------------------------------------------------//

// //Question 2

//Filter the items and return objects whose price is between 14 and 18.
//Set variable Adam equal to that function.
//Console.log Adam.


var Adam = items.filter(function(i) {
  return i.price > 14 && i.price < 18;

});

console.log(Adam);

//------------------------------------------------------------------------------//

// //Question 3

//Filter the items and return objects with the currecy code "GBP."
//Set it to a varable "GBP".
//Call the object GBP and then ran it with a map function to reurn the title and price.

 var GBP = items.filter(function(j) {
   return j.currency_code === 'GBP';
 });

 console.log(GBP);

var values = GBP.map.call(GBP, function(obj) {
  console.log (obj.title + " $" + obj.price);

});


 //----------------------------------------------------------------------------//

// //Q4

//Classic case of the .forEach inside a .forEach here.
//Run the function for materials === "wood" inside the function looking for materials.

items.forEach(function(a){
    a.materials.forEach(function(b){
        if(b === "wood"){
            console.log(a.title);
        };
    });
});

//-----------------------------------------------------------------------------//

// //Q5

//Filtered the items and pulled out the objects who's material array has more than 8.
//Ran it through a map function and console.log'd the title and materials.

var we = items.filter(function(r){
  return r.materials.length > 8;

});

var Bill = we.map.call(we, function(e) {
  console.log (e.title, e.materials);
});

//-----------------------------------------------------------------------------//
