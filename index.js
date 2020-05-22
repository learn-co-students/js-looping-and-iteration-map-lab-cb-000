// Code your solution in this file.

function lowerCaseDrivers(array) {
  return array.map(function(driver) {
    return driver.toLowercase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const fn = driver.split(' ')[0];
    const ln = driver.split(' ')[1];
    return { firstName: fn, lastName: ln }
  })
}

function attributesToPhrase(array) {
  return array.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}