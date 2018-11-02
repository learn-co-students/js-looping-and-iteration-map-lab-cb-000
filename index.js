// Code your solution in this file.

function lowerCaseDrivers(oldNames){
  const lowNames = oldNames.map(function(name){
    return name.toLowerCase();
  });
  return lowNames;
}


function nameToAttributes(oldNames) {
  const propNames = oldNames.map(function(name){
    const nameSplit = name.split(' ');
    return Object.assign({}, {firstName: nameSplit[0], lastName: nameSplit[1]});
  });
  return propNames;
}


function attributesToPhrase(hometownDrivers){
  const hometownPhrase = hometownDrivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
  return hometownPhrase;
}
