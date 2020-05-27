/* function lowerCaseDrivers (drivers) {
  let lowers = drivers.map(function(driver) {
    return driver.toLowerCase();
  });
  return lowers;
} */

/* function lowerCaseDrivers (drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
} */

function lowerCaseDrivers (drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes (drivers) {
  return drivers.map(function(driver) {
    let names = driver.split(' ');
    return { firstName: names[0], lastName: names[1] };
  });
}

function attributesToPhrase (drivers) {
  return drivers.map(function (driver) {
    return `${driver['name']} is from ${driver['hometown']}`;
  });
}
