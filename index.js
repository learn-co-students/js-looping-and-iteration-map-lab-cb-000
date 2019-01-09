function lowerCaseDrivers(driverArray) {
  return driverArray.map(function(driver) {
    return driver.toLowerCase();
  });
}

// Assumes an array of full names of drivers,
// with first and last name separated by a space
function nameToAttributes(driverArray) {
  return driverArray.map( function(driver) {
    const splitName = driver.split(' ');
    const firstName = splitName[0];
    const lastName = splitName[1];

    return { firstName: firstName,
             lastName: lastName };
  });
}

function attributesToPhrase(arrayOfDriverObjects) {
  return arrayOfDriverObjects.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
}
