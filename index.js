// Code your solution in this file.

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function lowerCaseDrivers(array){
   return array.map(function(driver){
     return driver.toLowerCase();
   })
}


// const equippedEngineers = newEngineers.map(function(eng) {
//     return Object.assign({}, eng, { equipment: 'Laptop' });
// });


function nameToAttributes(array){
   return array.map(function(driver){
     return Object.assign({}, { firstName: driver.split(" ")[0], lastName: driver.split(" ")[1] }); //driver.toLowerCase();
   })
}

function attributesToPhrase(array){
   return array.map(function(driver){
     return `${driver.name} is from ${driver.hometown}`
   })
}
