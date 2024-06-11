const fibonacci = function(num) {

    num = parseInt(num);

    if(num < 0) return "OOPS";
    if(num === 0) return 0;

    let fib = [1,1];
   

    for(i = 2; i < num; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }

    return fib[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
