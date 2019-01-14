var languagesArrayCreation = function () {
 return [ 'Html', 'CSS', 'Java', 'PHP' ];
}

var numbersArrayCreation = function () {
return [ 0, 1, 2, 3, 4, 5 ];//nbre pas besoin de mettre de guillemets(quotes)
}

var ElementReplacement = function (languages) {
languages.[2] = "Javascript"; //ou languages.splice(2,1, "Javascript")
return languages;
}

var AddElementToLanguagesArray = function (languages) {
languages.push('Ruby', 'Python')
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
numbers.unshift(-2, -1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
languages.pop();// pop utiliser pour supprimer
  return languages;
}

var stringToArray = function (socialMediaInString) {
socialMedia = ['Facebook', 'Twitter', 'Google +', 'Viadeo', 'LinkedIn']
  return socialMedia;
}

var arrayToString = function (languages) {
languages= 'CSS,Javascript,PHP,Ruby';
return languages;
}

var arraySort = function (socialMedia) {
  return socialMedia.sort();//trier c'est ranger le tableau dans l'ordre alphabétique.
}

var arrayInvert = function (languages){
  return languages.reverse();
}
