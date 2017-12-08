"use strict";

const zoo = require("./animals");

function showCarnivores(carnivores) {
    let animals = carnivores.animals;
    let carnDiv = document.getElementById("carnivores");
    animals.forEach(animal => {
        let card = getCard(animal);
        carnDiv.appendChild(card);
    });
}
function showHerbivores(herbivores) {
    let animals = herbivores.animals;
    let herbDiv = document.getElementById("herbivores");
    animals.forEach(animal => {
        let card = getCard(animal);
        herbDiv.appendChild(card);
    });
}

function getCard(animal) {
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
    return card;
}

function populatePage() {
    zoo.loadCarnivores(showCarnivores);
    zoo.loadHerbivores(showHerbivores);
}

module.exports = {populatePage};