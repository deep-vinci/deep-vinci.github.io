import "./style.css"

{/* <div class="repository" id="repo-1">
<div class="info">
    <div class="svg-div">
        <svg fill="rgb(141, 150, 160)" aria-hidden="true" height="18" viewBox="0 0 18 18" version="1.1"
            width="18" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
            <path
                d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z">
            </path>
        </svg>
    </div>
    <div class="repository-name"><a href="#">tictactoe</a></div>
    <div class="public">Public</div>
</div>

<p class="info-2">
    <span class="language-stats">
        <span class="language-color" style="background-color: #f1e05a"></span>
        <span itemprop="language">JavaScript</span>
    </span>

    <a href="/deep-vinci/tictactoe/stargazers" class="stargazers">
        <svg fill="rgb(141, 150, 160)" aria-label="stars" role="img" height="18" viewBox="0 0 15 15" version="1.1" width="18"
            data-view-component="true" class="octicon octicon-star">
            <path
                d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z">
            </path>
        </svg>
        3
    </a>
</p>
</div> */}

const repositoryContainer = document.querySelector(".repositories");


const createRepoDiv = (repository) => {
    const languageColors = {
        javascript: "#f1e05a",
        html: "#e34c26",
        css: "#563d7c",
        markdown: "#083fa1",
    }
    
    
    const SVG = {
        repositoryIcon: `<svg fill="rgb(141, 150, 160)" aria-hidden="true" height="18" viewBox="0 0 18 18" version="1.1"
                            width="18" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                            <path
                                d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z">
                            </path>
                        </svg>`,
        starGazersIcon: `<svg fill="rgb(141, 150, 160)" aria-label="stars" role="img" height="18" viewBox="0 0 15 15" version="1.1" width="18"
                            data-view-component="true" class="octicon octicon-star">
                            <path
                                d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z">
                            </path>
                        </svg>`
    }

    const repoName = repository.name;
    const language = repository.language;
    const starGazersCount = repository.stargazers_count;
    const publicText = "public"


    let repositoryDiv = document.createElement("div");
    let infoDiv = document.createElement("div");
    let svgDiv = document.createElement("div");
    let repositoryNameDiv = document.createElement("div");
    let publicDiv = document.createElement("div");

    let info2Div = document.createElement("p");
    let languageStatsSpan = document.createElement("span");
    let languageColorSpan = document.createElement("span");
    let languageSpan = document.createElement("span");
    let starGazers = document.createElement("a");

    // adding necessary classes to element

    repositoryDiv.classList.add("repository");
    infoDiv.classList.add("info");
    svgDiv.classList.add("svg-div");
    repositoryNameDiv.classList.add("repository-name");
    publicDiv.classList.add("public");

    info2Div.classList.add("info-2");
    languageStatsSpan.classList.add("language-stats");
    languageColorSpan.classList.add("language-color");
    languageSpan.classList.add("language");
    starGazers.classList.add("stargazers");

    // adding the necessary attr to element

    repositoryNameDiv.textContent = repoName;
    svgDiv.innerHTML = SVG.repositoryIcon;
    publicDiv.textContent = publicText;

    languageSpan.textContent = language;
    // console.log(language, repoName)
    languageColorSpan.style.backgroundColor = languageColors[language === null ? null : language.toLowerCase() ];
    starGazers.innerHTML = SVG.starGazersIcon + starGazersCount;
    // starGazers.textContent = starGazersCount;
    // appending the nodes

    repositoryContainer.appendChild(repositoryDiv);
    repositoryDiv.appendChild(infoDiv);
    infoDiv.appendChild(svgDiv);
    infoDiv.appendChild(repositoryNameDiv);
    infoDiv.appendChild(publicDiv);

    repositoryDiv.appendChild(info2Div);
    info2Div.appendChild(languageStatsSpan);
    languageStatsSpan.appendChild(languageColorSpan);
    languageStatsSpan.appendChild(languageSpan);
    info2Div.appendChild(starGazers);

}

const getRepoData = async () => {
    // in future this could be removed to bring the github actions

    let response = await fetch("https://api.github.com/users/deep-vinci/repos");
    let data = await response.json()

    return data
}

const printRepoData = async () => {
    let data = await getRepoData(); // one liner before importing the data to any function

    // console.log(data[0])
    
    data.forEach(repository => {
        // console.log(repository)
        console.log(`${repository.language} ${repository.stargazers_count} ${repository.name} ${repository.description == null ? "" : "/ " + repository.description}`)
        createRepoDiv(repository)

    });
}

let searchRepoData = async (searchTerm) => {
    let repoData = await getRepoData();
    let searchTermRegex = new RegExp(`^${searchTerm}`, 'i'); // Creating RegExp dynamically
    const searchedRepoOutput = repoData.filter(repo => searchTermRegex.test(repo.name))
    
    console.log(searchedRepoOutput)
    // repoData.forEach(repo => {
    //     console.log(`${searchTermRegex.test(repo.name) == true ? 1 : 0} ${repo.name}`)
    // })
}


searchRepoData("tic")
printRepoData()
