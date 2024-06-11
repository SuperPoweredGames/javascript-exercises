const repeatString = function(phraseToRepeat, repeatAmount) {
    if (repeatAmount < 0) return "ERROR";
    
    let newPhrase = '';

    for (i = 0; i < repeatAmount; i++){
        newPhrase += phraseToRepeat;
    }

    return newPhrase;
};

// Do not edit below this line
module.exports = repeatString;
