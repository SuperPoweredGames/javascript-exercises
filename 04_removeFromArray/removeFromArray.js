const removeFromArray = function(arrayOfNumbers, ...numbersToRemove) {
    
let matches = 0;
let newArray = [];

    for(i = 0; i < arrayOfNumbers.length; i++) {
            
        matches = 0;

        for(j = 0; j < numbersToRemove.length; j++) {

            if(arrayOfNumbers[i] === numbersToRemove[j]) {
                matches++;                
            }
        }

        if(matches === 0) {
            newArray.push(arrayOfNumbers[i]);
        }
    }
    

    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
