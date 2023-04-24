// Part 2
// module.exports.foo = 'hello world';
// module.exports.bar = 'goodbye world';

// now execute node fileA.js in the terminal
/*
The exportsFromFileB should be an object with a key-value
pair for foo and bar. module.exports is just an object -
you can attach key-value pairs to it, and they will become
available on the object that's returned by require
*/

// Part 3
// You can also reassign module.exports to be anything you want. 
// The value of module.exports will be what gets returned when 
// you require that module. To demonstrate this, edit fileB.js 
// so that it exports a function. View these example code blocks:

// let number = 5;
// module.exports = () => {
//     console.log(number);
// }

// then go to fileA.js to write 
// const exportsFromFileB = require('./fileB') 
// exportsFromFileB()

// Part 4
/*

This next part will be tricky! Replace the contents of fileB.js 
and fileA.js with the following code: fileB.js

console.log('fileB is being run!')
fileA.js

require('./fileB') 
require('./fileB') // not a typo - actually require it twice!
*/

// console.log('fileB is being run!');

/*
Now execute node fileA.js again.
You might be surprised - it only displays one time, even though
we require the file twice!

This is because Node only ever executes a file that's being required 
once. The first time a module is required, the file will be executed
as normal and the value of module.exports will be calculated. That 
value is cached (that is, stored and put aside) by Node. That value 
is then returned from the call to require. Any subsequent time the 
same module is required, the file will not be executed again - 
instead, the cached value will be returned right away!
*/

