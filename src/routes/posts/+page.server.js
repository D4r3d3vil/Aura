import fs from 'fs'

function getDirectoryContents(dir) {
  // An array to store the results
  let results = [];

  // A function that reads a directory and pushes its contents to the results array
  // It also calls itself recursively for each subdirectory
  function readDirectory(path) {
    // Get the files and folders in the current path
    let items = fs.readdirSync(path);

    // Loop over each item
    for (let item of items) {
      // Get the full path of the item
      let fullPath = path + '/' + item;

      // Get the stats of the item
      let stats = fs.statSync(fullPath);

      // Create an object to store the item information
      let obj = {
        name: item,
        path: fullPath,
        type: null,
        contents: []
      };

      // Check if the item is a file or a folder
      if (stats.isFile()) {
        // Set the type to file
        obj.type = 'file';
      } else if (stats.isDirectory()) {
        // Set the type to folder
        obj.type = 'folder';

        // Call the function recursively for the subdirectory
        readDirectory(fullPath);

        // Get the subfiles and subfolders from the results array
        // Filter by the parent path and remove them from the results array
        obj.contents = results.filter(r => r.path.startsWith(fullPath));
        results = results.filter(r => !r.path.startsWith(fullPath));
      }

      // Push the object to the results array
      results.push(obj);
    }
  }

  // Call the function for the given directory
  readDirectory(dir);

  // Return the results array
  return results;
}
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return {uploads: getDirectoryContents('./src/uploads/pages')}
}