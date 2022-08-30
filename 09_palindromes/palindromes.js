// set up function to accept a string as a parameter
// remove punctuation and spaces as they are not counted in palindromes (used regex here)
// make the string lowercase to normalize it
// turn the string into an array to manipulate it to its reversed using unshift().
// join the reversed array back into a string.
// if reversed string === statement, return true, else return false
// This could have been done using the .reverse() method for arrays which i didn't know about at the time.

const palindromes = function (statement) {
    let removed = statement.replace(/[.,\/#!$%\^&\*;" ":{}=\-_`~()]/g , "")
    let lowerCase = removed.toLowerCase() 
    let reversed = [];
    statementArray = lowerCase.split("");
    for (const element of statementArray){
        reversed.unshift(String(element));
    }
    let reversedString = reversed.join("");

    if (lowerCase === reversedString){
        return true;
    } else {
        return false;
    }
}




// Do not edit below this line
module.exports = palindromes;
