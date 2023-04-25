// const dogs = 'I love dogs!';
// const cats = 'I love cats!';

// module.exports.dogs = dogs;
// module.exports.cats = cats;

// Part 2
/*
Once again, an object should be displayed with a dogs 
key-value pair and cats key-value pair. While module.exports 
is an object by default, a common pattern is to reassign 
module.exports to be the object that we want to export, 
rather than simply stick key-value pairs on it directly.
*/

// module.exports = {
//     dogs: dogs,
//     cats: cats
// }

// Part 3
/*
This time the string 'I love cats!'should be displayed. Note 
that exports is just a key-value pair on the module object, 
and whatever it is assigned to after the module is executed, 
will be what gets exported. Because the cats variable is the 
last thing that module.exports is assigned to when we execute 
this module, the string it evaluates to will be the value we 
receive when we require it.
*/
// const dogs = 'I love dogs!';
// const cats = 'I love cats!';

// module.exports = dogs;
// module.exports = cats;