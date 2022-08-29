// set up function to accept integer arguments as rest parameter so we can treat it as an array
//           const sumAll = function(...ints)
// develop error testing to make sure items are type integer and are non-negative
//  
// sort the array to make sure the lower number is always first
//           let intsSorted = ints.sort();
// create a variable to hold the final sum and add the two given integers
//           let finalSum = intsSorted[0] + intsSorted[1];
// loop through the numbers between the given integers
//           for (let i = intsSorted[1]-1; i > intsSorted[0]; i--){
// add each integer to finalSum
//           finalSum += i;
// return finalSum



const sumAll = function(...ints) { 
    let intsSorted = ints.sort();
    let finalSum = intsSorted[0] + intsSorted[1];
    for (let i = intsSorted[1]-1; i > intsSorted[0]; i--){
        finalSum += i;
        }
    return finalSum;
}

/*      let intsSorted = ints.sort();
        let finalSum = intsSorted[0] + intsSorted[1];
        for (let i = intsSorted[1]-1; i > intsSorted[0]; i--){
            finalSum += i;
        }
        return finalSum;
        */
// Do not edit below this line
module.exports = sumAll;
