// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(d => d.toLowerCase())
}

function nameToAttributes(drivers){
  arr = drivers.map(function(d){
    nameArray = d.split(" ");
    obj = Object.assign({},{firstName: nameArray[0], lastName: nameArray[1]})
    return obj;
  });
    return arr;
}

function attributesToPhrase(drivers){
  return drivers.map(d => `${d.name} is from ${d.hometown}`)
}
