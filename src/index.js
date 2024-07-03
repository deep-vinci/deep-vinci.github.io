import "./style.css"

import { createRepoDiv } from "./component/createRepoDiv.js"

const searchInput = document.querySelector("#search")

let globalRepoData = "";
let seeYourAcc = document.querySelector(".see-your-acc");
let userSearch = document.querySelector(".user-search");

const getRepoData = async () => {
    let response = await fetch("https://api.github.com/users/deep-vinci/repos");
    // let response = await fetch("https://api.github.com/users/Experience-Monks/repos");
    globalRepoData = await response.json()

    return globalRepoData
}

const clearRepositoriesContainer = () => {
    let repoDivs = document.querySelectorAll(".repository");

    repoDivs.forEach(elem => {
        elem.remove();
    })

}

const printRepoData = async (data) => {
    clearRepositoriesContainer();

    data.forEach(repository => {
        createRepoDiv(repository)
    });
}

let searchRepoData = async (searchTerm, globalRepoData) => {
    let searchTermRegex = new RegExp(`${searchTerm}`, 'i'); // Creating RegExp dynamically
    const searchedRepoOutput = globalRepoData.filter(repo => searchTermRegex.test(repo.name))

    return searchedRepoOutput
}

seeYourAcc.addEventListener("click", () => {
    if (userSearch.value.trim() !== "") {
        console.log("filled")
    }
})

searchInput.addEventListener('input', async (e) => {
    printRepoData(await searchRepoData(e.target.value, globalRepoData))
});

document.addEventListener("readystatechange", async () => {
    await getRepoData();
    printRepoData(await searchRepoData("", globalRepoData))
});
