const removeFromArray = function(array, ...moreElements) {

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < moreElements.length; j++) {
            if (array[i] === moreElements[j]) {
                array.splice(i, 1);
                i = 0;
            }
    }
}

return array;

};

// Do not edit below this line
module.exports = removeFromArray;
