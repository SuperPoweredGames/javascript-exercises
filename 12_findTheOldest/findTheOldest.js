const findTheOldest = function(people) {

  return people.reduce((oldest, next) => {
      let oldestAge = getCurrentAge(oldest);
      let nextPersonAge = getCurrentAge(next);
      return oldestAge > nextPersonAge ? oldest : next;
  })
}

function getCurrentAge (person) {
   if(!person.yearOfDeath) {
    person.yearOfDeath = new Date().getFullYear();
   }


    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
