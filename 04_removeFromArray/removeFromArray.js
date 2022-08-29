// set up function to remove "removal" from an array "array". Removal can be any number of items.
// if "removal" is multiple arguments, cycle through each one
// remove each item from the original array.


const removeFromArray = function(array, ...removal) {
    for (const item of removal){
        let index = array.indexOf(item);
        if (index !== -1){
            array.splice(index,1);
        }
    }
    return array;
};
/*const removeFromArray = function(array, removal) {
    let index = array.indexOf(removal);
    if (index !== -1){
        array.splice(index,1);
        return array;
    } 
};
*/
// Do not edit below this line
module.exports = removeFromArray;
