In the browser, when we execute a JavaScript file, any variables or functions that aren't declared within the scope of another function are added to the global context (that is, they become key-value pairs on the window object). This means that if a file ("fileB") wants to use a function that was declared in another file ("fileA"), then "fileA" must be loaded first, and then "fileB" will find that function on the global context.


This is fortunately not the case in Node!
==In Node, each file represents a module.

==Each module has its own "global" object called "module" (similar to window in the browser, except each module has its own unique module).

==The "module" object has a property called "exports" (module.exports). By default, module.exports is an empty object.

==Other modules can then "import" that module's module.exports using a special function called require


Both require and module.exports are built into the Node runtime environment - as long as you execute that JavaScript file using Node (i.e. by executing node theFile.js), they will be available.

In the following exercise, we will learn how to use them.