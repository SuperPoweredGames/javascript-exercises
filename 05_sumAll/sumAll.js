const sumAll = function(num1, num2) {

    if(num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if(typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR";
    }

    let result = 0;

    if(num1 > num2) {
        for(i = num2; i < num1 + 1; i++) {
            result += i;
        }
        
    } else if (num2 > num1) {
        for(i = num1; i < num2 + 1; i++) {
            result += i;
        }

    } else {
        return num1;
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
