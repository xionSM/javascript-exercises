const removeFromArray = function(array, ...value) {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        
        let shallKeep = true;
        
        for (let x = 0; x < value.length; x++) {
            if (value[x] === array[i]) {
                shallKeep = false
            }
        }
        if (shallKeep) {
            newArray.push(array[i])
        } 

        }
    
    
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
