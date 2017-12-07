'use strict';

window.getRandomValues = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
