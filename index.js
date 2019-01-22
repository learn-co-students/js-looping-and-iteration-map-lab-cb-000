function lowerCaseDrivers(collection) {
  return collection.map(item => item.toLowerCase());
}

function nameToAttributes(collection) {

  return collection.map(item => Object.assign({},{'firstName': item.split(" ")[0]},{'lastName': item.split(" ")[1]}));
}

function attributesToPhrase(collection) {
  return collection.map(item => `${item.name} is from ${item.hometown}`);
}
