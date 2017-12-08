"use strict";

let carnivores = [];

function loadCarnivores(callback) {
    const loader = new XMLHttpRequest();

    loader.addEventListener("load", function() {
        carnivores = JSON.parse(this.responseText);
        callback(carnivores);
    });

    loader.open("GET", "/assets/json/carnivores.json", true);
    loader.send();
}

module.exports = {loadCarnivores};