// setup.js

'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIRECOLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireBall = document.querySelector('.setup-fireball-wrap');


var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards.push({
    name: WIZARD_NAMES[window.getRandomValues(0, WIZARD_NAMES.length)] + '\n' + WIZARD_LASTNAMES[window.getRandomValues(0, WIZARD_NAMES.length)],
    coatColor: WIZARD_COATCOLORS[window.getRandomValues(0, WIZARD_NAMES.length)],
    eyesColor: WIZARD_EYESCOLORS[window.getRandomValues(0, WIZARD_NAMES.length)],
    fireColor: WIZARD_FIRECOLORS[window.getRandomValues(0, WIZARD_FIRECOLORS.length)]
  });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));

}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = wizards[window.getRandomValues(0, 3)].coatColor;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = wizards[window.getRandomValues(0, 3)].eyesColor;
});

wizardFireBall.addEventListener('click', function () {
  wizardFireBall.style.backgroundColor = wizards[window.getRandomValues(0, 3)].fireColor;
});
