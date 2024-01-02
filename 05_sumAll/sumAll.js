const sumAll = function(a, b) {
    // Assign the function parameter values to an Array and sort them
    const sortedArray = [a, b];
    sortedArray.sort();

    let sumCounter = 0;

    // Since we do not accept negative numbers in this exercise, check if
    // the smallest sorted value is equal or larger than '0'
    if (sortedArray[0] >= 0 

    // We also only want numbers, so check if both parameters are numbers
    // If they arent we return 'ERROR'
        && typeof sortedArray[0] === "number" 
        && typeof sortedArray[1] === "number") {
    // We initialize from the smallest value in the Array and iterate until
    // we reach the value in the second parameter, adding "1" to the sumCounter
    // variable, declared on line 6, on each iteration
        for (i = sortedArray[0]; i <= sortedArray[1]; i++) {
            sumCounter += i;
        } 
    } else {
        return "ERROR"
    }
    // Finaly the sum is returned below
    return sumCounter;
};

// Do not edit below this line
module.exports = sumAll;
