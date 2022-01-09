const sumAll = function(int1, int2) {
    let n = int1;
    let x = 0;
    if (int1 < 0) {
        return "ERROR"
    } else if (int2 < 0) {
        return "ERROR"
    }
    if (typeof int1 !== 'number') {
        return "ERROR"
    } else if (typeof int2 !== 'number') {
        return "ERROR"
    }
 
    if (int1 > int2) {
        for (; n >= int2; n--){
            x += n
        }
    } else {
        for (; n <= int2; n++){
            x += n
        }
        
    }
    return x
};

// Do not edit below this line
module.exports = sumAll;
