"use strict";

function loadAnimals(callback, filename) {
    const loader = new XMLHttpRequest();
    
    loader.addEventListener("load", function() {
        let animals = JSON.parse(this.responseText);
        callback(animals);
    });

    loader.open("GET", `/assets/json/${filename}`, true);
    loader.send();
}

function loadCarnivores(callback) {
    const loader = new XMLHttpRequest();

    loader.addEventListener("load", function() {
        let carnivores = JSON.parse(this.responseText);
        callback(carnivores);
    });

    loader.open("GET", "/assets/json/carnivores.json", true);
    loader.send();
}

function loadHerbivores(callback) {
    const loader = new XMLHttpRequest();

    loader.addEventListener("load", function() {
        let herbivores = JSON.parse(this.responseText);
        callback(herbivores);
    });

    loader.open("GET", "/assets/json/herbivores.json", true);
    loader.send();
}

module.exports = {loadCarnivores, loadHerbivores, loadAnimals};