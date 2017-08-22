function isEven(val) {
    if (!isNaN(val)) {
        return val % 2 === 0;
    }
    return true;
}

function isOdd(val) {
    return val % 2 !== 0;
}
