import "./style.css"

import { createRepoDiv } from "./component/createRepoDiv.js"

const searchInput = document.querySelector("#search")


const getRepoData = async () => {
    // in future this could be removed to bring the github actions
    // Experience-Monks/repositories
    // let response = await fetch("https://api.github.com/users/deep-vinci/repos");
    let response = await fetch("https://api.github.com/users/Experience-Monks/repos");
    let data = await response.json()

    return data
}


let repoData = await getRepoData();


const printRepoData = async (repoObj) => {
    let data = repoData; // one liner before importing the data to any function

    let dataResp = await repoObj === undefined ? data : repoObj;

    dataResp.forEach(repository => {
        createRepoDiv(repository)
    });
}

let searchRepoData = async (searchTerm, repoData) => {
    // let repoData = await getRepoData();
    let searchTermRegex = new RegExp(`${searchTerm}`, 'i'); // Creating RegExp dynamically
    const searchedRepoOutput = repoData.filter(repo => searchTermRegex.test(repo.name))

    return searchedRepoOutput
}


printRepoData()


searchInput.addEventListener('input', async (e) => {
    let repoDivs = document.querySelectorAll(".repository");

    repoDivs.forEach(elem => {
        elem.remove();
    })

    printRepoData(await searchRepoData(e.target.value, repoData))
});

let seeYourAcc = document.querySelector(".see-your-acc");
let userSearch = document.querySelector(".user-search");

seeYourAcc.addEventListener("click", () => {
    if(userSearch.value.trim() !== "") {
        console.log("filled")
    }
})