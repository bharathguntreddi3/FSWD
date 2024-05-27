function isEven(n){
    return n%2 == 0;
}

function isPositive(n) {
    return n >= 0;
}

// below are the properties we are able to export from this module
exports.isEven = isEven;
exports.isPositive = isPositive;
exports.SIZE = 10;  // we can export variables too


// export makes it available to other modules