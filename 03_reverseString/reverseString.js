const reverseString = function(string) {
    let text = string;
    let firstPart = '';
    let lastPart = text.slice(string.length -1);
    let reverseText = '';

    for(let i = 0; i < string.length; i++) {
        firstPart = text.slice(0, text.length);
        lastPart = firstPart.slice(firstPart.length -1);
        reverseText += lastPart;
        text = text.slice(0, text.length -1);
    }
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
