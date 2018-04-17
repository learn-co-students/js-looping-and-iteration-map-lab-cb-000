// Code your solution in this file.
function lowerCaseDrivers(list) {
  return list.map(function(element) {return element.toLowerCase()})
}

function nameToAttributes(list) {
  return list.map(function(name) {
    let nameArray = name.split(" ")
    return {firstName: nameArray[0], lastName: nameArray[1]};
  })
}

function attributesToPhrase(list) {
 return list.map(function(driver){
   return `${driver["name"]} is from ${driver["hometown"]}`
 })
}
