// Part 1
/*
PART 1
In your terminal, navigate to the directory you house your bootcamp repositories, and then 
create one for this lab: mkdir Lab.NodeBasics && cd "$_"

Note: $_ is a special parameter that holds the last argument of the previous command. The 
quotation marks around $_ make sure it works even if the folder name contains spaces. Neat, huh?
Execute the following command from your command line to create two files in your project 
directory: touch fileA.js fileB.js

Copy the following code into fileA.js:
*/


// const exportsFromFileB = require('./fileB') // note the relative file path
// console.log(exportsFromFileB);


/*
now execute node fileA.js

There should only be an empty object displayed. By default, all modules export an empty object.

Also note that in order to get to fileB, we needed to include the relative
path to fileB from fileA. For files that we write, we must include the path
to the file so that Node knows where to find it. This is not the case when
we're dealing with built-in node modules (like fs and http - Node recognizes
them as its own), nor with modules that we install like chalk (Node will
automatically search inside our node_modules folder for them).
*/

// const exportsFromFileB = require('./fileB');
// exportsFromFileB();

// The number 5 should be displayed when you execute node fileA.js. 
// Functions that you export from a module have closure over any 
// variables they use.

// Part 4
// require('./fileB'); 
// require('./fileB'); // not a typo - actually require it twice!

// Bonus: Quiz
/*
For each of the following code snippets, create a new .js file, 
copy the contents of the snippet into that file, require that file 
into your fileA.js, and console.log the result. What will you get 
each time? Make a guess, then execute your code to test it out. 
Check the hint at the end for an explanation.
*/
const pets = require('./pets');
console.log(pets.dogs);
console.log(pets.cats);