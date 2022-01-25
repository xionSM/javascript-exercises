const findTheOldest = (obj) => {
    let oldest = obj.sort((a, b) => {
        let aYearOfD = a.yearOfDeath || new Date().getFullYear();
        let bYearOfD = b.yearOfDeath || new Date().getFullYear();
        let aAge = aYearOfD - a.yearOfBirth;
        let bAge = bYearOfD - b.yearOfBirth;
        return bAge - aAge
    }) 
    console.log(oldest)
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
