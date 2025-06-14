import "./style.css";

import { createRepoDiv } from "./component/createRepoDiv.js";

const me = "deep-vinci";

const searchInput = document.querySelector("#search");

let globalRepoData = "";
let seeYourAcc = document.querySelector(".see-your-acc");
let userSearch = document.querySelector(".user-search");
let userImage = document.querySelector(".user-image");

const getRepoData = async (user) => {
    if (user == me) {
        let response = await fetch(
            `https://raw.githubusercontent.com/deep-vinci/deep-vinci.github.io/refs/heads/main/prefetch-data.json`
        );
        let data = await response.json();
        if (data.status == 404) {
            console.log("error");
        }
        globalRepoData = data;
        return globalRepoData;
    } else {
        let response = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=100`
        );
        let data = await response.json();

        if (data.status == 404) {
            console.log("error");
        }
        globalRepoData = data;
        return globalRepoData;
    }
};

const clearRepositoriesContainer = () => {
    let repoDivs = document.querySelectorAll(".repository");

    repoDivs.forEach((elem) => {
        elem.remove();
    });
};

const printRepoData = async (data) => {
    clearRepositoriesContainer();
    if (globalRepoData.status == 404) {
        return;
    }

    console.log(globalRepoData);
    console.log(data[0].owner.avatar_url);
    userImage.style.backgroundImage = `url(${data[0].owner.avatar_url})`;
    data.forEach((repository) => {
        createRepoDiv(repository);
    });
};

userImage.addEventListener("click", () => {
    window.open(`https://github.com/${globalRepoData[0].owner.login}`);
});

let searchRepoData = async (searchTerm, globalRepoData) => {
    if (globalRepoData.status == 404) return;

    let searchTermRegex = new RegExp(`${searchTerm}`, "i"); // Creating RegExp dynamically
    const searchedRepoOutput = globalRepoData.filter((repo) =>
        searchTermRegex.test(repo.name)
    );

    return searchedRepoOutput;
};

seeYourAcc.addEventListener("click", async () => {
    if (userSearch.value.trim() !== "") {
        await getRepoData(userSearch.value);
        printRepoData(await searchRepoData("", globalRepoData));
    }
});

searchInput.addEventListener("input", async (e) => {
    printRepoData(await searchRepoData(e.target.value, globalRepoData));
});

document.addEventListener("readystatechange", async () => {
    await getRepoData(me);
    printRepoData(await searchRepoData("", globalRepoData));
});
