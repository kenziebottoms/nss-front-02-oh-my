"use strict";

module.exports.loadAnimals = (callback, filename, divId) => {
    const loader = new XMLHttpRequest();
    
    loader.addEventListener("load", function() {
        let animals = JSON.parse(this.responseText);
        callback(animals, divId);
    });

    loader.open("GET", `/assets/json/${filename}`, true);
    loader.send();
};