const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
);

let mixedHeroes = [
    {
        name: "Batman",
        isVillain: false,
    },
    {
        name: "Bane",
        isVillain: true,
    },
    {
        name: "Donski",
        isVillain: true,
    },
];

let randomPeople = [
    {
        name: "Gil",
        isVillain: false,
    },
    {
        name: "Goody",
        isVillain: true,
    },
];

const filterHeroes = (arr1, arr2) => [...arr1, ...arr2].filter((person) => !person.isVillain);

console.log(filterHeroes(mixedHeroes, randomPeople));

//create an arrow function that merges two arrays at the top, and returns only the heroes.
