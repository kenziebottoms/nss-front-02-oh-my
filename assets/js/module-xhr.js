"use strict";

const zoo = require("./animals");

function showCarnivores(carnivores) {
    let animals = carnivores.animals;
    let carnDiv = document.getElementById("carnivores");
    animals.forEach(animal => {
        let card = document.createElement("div");
        card.classList = "card";
        let cardBody = document.createElement("div");
        cardBody.classList = "card-body";
        let title = document.createElement("h4");
        title.innerText = animal.common_name;
        title.classList = "card-title";
        let subtitle = document.createElement("h6");
        subtitle.innerText = animal.scientific_name;
        subtitle.classList = "card-subtitle mb-2 text-muted";
        let summary = document.createElement("p");
        summary.innerText = animal.summary;
        summary.classList = "mt-3 mb-0";
        cardBody.appendChild(title);
        cardBody.appendChild(subtitle);
        cardBody.appendChild(summary);
        card.appendChild(cardBody); 
        carnDiv.appendChild(card);
    });
}

function showHerbivores() {}

function populatePage() {
    zoo.loadCarnivores(showCarnivores);
}

module.exports = {populatePage};