function introduction(name) {
    console.log(`Hi, my name is ${name}.`);
  }
function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }
function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
function introductionWithLanguageOptional(name, language = "Python") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
introduction("Aki");
introduction("Samip");
introduction("Gracie");
introductionWithLanguage("Aki", "Ember.js");
introductionWithLanguage("Samip", "React");
introductionWithLanguageOptional("Gracie", "JavaScript");
introductionWithLanguageOptional("Gracie", "Python");