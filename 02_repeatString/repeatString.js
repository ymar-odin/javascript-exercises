const repeatString = function(string, num) {
    let added = '';
    if(num >= 0) {
        for(let i = 0; i < num; i++) {
            added += string;
        }
        return added;
    } else {
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = repeatString;