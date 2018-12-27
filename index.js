// Code your solution in this file.
const lowerCaseDrivers = (drivers) => {
  return drivers.map((driver) => { return driver.toLowerCase(); });
};

const nameToAttributes = (drivers) => {
  return drivers.map((driver) => {
    const nameArray = driver.split(" ");
    return { firstName: nameArray[0], lastName: nameArray[1] };
  });
};

const attributesToPhrase = (drivers) => {
  return drivers.map((driver) => {
    return `${driver.name} is from ${driver.hometown}`;
  });
};
