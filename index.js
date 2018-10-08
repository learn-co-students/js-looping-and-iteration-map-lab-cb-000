// Code your solution in this file.
function lowerCaseDrivers(collection){
  return collection.map(function (item) {
    return item.toLowerCase();
  });
}

//Seperation of Concerns for next function
function splitName(fullname){
  return fullname.split(" ")
}

function nameToAttributes(collection){
  return collection.map(function (item) {
    const itemFirst = splitName(item)[0];
    const itemLast = splitName(item)[1];

    return Object.assign({}, { firstName: itemFirst}, { lastName: itemLast });
  });
}

function attributesToPhrase(collection){
  return collection.map(function (item) {
    return `${item.name} is from ${item.hometown}`;
  });
}
