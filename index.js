function lowerCaseDrivers(array) {
  return array.map(function(driver) {
    return driver.toLowerCase();
  });
}


function nameToAttributes(array) {
  return array.map(function(driver) {
    const driverFirstName = driver.split(' ')[0];
    const driverLastName = driver.split(' ')[1];
    
    return { firstName: driverFirstName, lastName: driverLastName };
  });
}



function attributesToPhrase(array) {
  return array.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}




