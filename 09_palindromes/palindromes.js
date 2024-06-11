const palindromes = function (sentence) {
    let removePunctuation = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                           .replace(/\s+/g, "").toLowerCase();

    let reversed =  removePunctuation.split("").reverse().join("");
    
    if(reversed === removePunctuation){
        return true;
    } else {
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
