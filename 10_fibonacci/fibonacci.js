// fib sequence = (1, 1, 2, 3, 5, 8, 13, 21);
// parameter is the number of the sequence to return. convert to number, and test to make sure its a positive value.
// how do i append numbers to the end of an array? .push()
// loop through the numbers up to the amount of times of the argument provided (start i = 2 because we already know 1 and 2 both return 1)
// add sum of the previous two values to a temporary variable. (temp variable is unnecessary in execution if you push the sum of the two )
// .push() the temporary variable to the array 
// remove the previous "first" value in the addition after each loop using .shift()
// return the most recent value from the array

const fibonacci = function(member) {
    let num = Number(member);
    let fibSequence = [1, 1];
    if (num < 0){
        return "OOPS";
    }
    for (let i = 2; i < num; i++){
        //let tempValue = fibSequence[0] + fibSequence[1];
        //fibSequence.push(tempValue);
        fibSequence.push(fibSequence[0] + fibSequence[1]);
        fibSequence.shift();
    }
    return fibSequence[1];
}

// Do not edit below this line
module.exports = fibonacci;
