const repositoryContainer = document.querySelector(".repositories");
const userSearch = document.querySelector(".user-search");
export const createRepoDiv = (repository) => {

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
    let linkOfRepo = document.createElement("a");
    let publicDiv = document.createElement("div");

    let aboutLinkOfRepo = document.createElement("a");

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

    aboutLinkOfRepo.classList.add("about-link-of-repo");

    info2Div.classList.add("info-2");
    languageStatsSpan.classList.add("language-stats");
    languageColorSpan.classList.add("language-color");
    languageSpan.classList.add("language");
    starGazers.classList.add("stargazers");

    // adding the necessary attr to element

    userSearch.placeholder = repository.owner.login;
    linkOfRepo.textContent = repoName;
    linkOfRepo.href = repository.svn_url;
    linkOfRepo.setAttribute('target', '_blank');
    svgDiv.innerHTML = SVG.repositoryIcon;
    publicDiv.textContent = publicText;

    aboutLinkOfRepo.textContent = repository.homepage;
    aboutLinkOfRepo.href = repository.homepage;
    aboutLinkOfRepo.setAttribute('target', '_blank');

    languageSpan.textContent = language == null ? "no lang" : language;
    languageColorSpan.style.backgroundColor = languageColors[language === null ? null : language.toLowerCase()] == null ? "gray" : languageColors[language === null ? null : language.toLowerCase()];
    starGazers.innerHTML = starGazersCount == 0 ? "" : SVG.starGazersIcon + starGazersCount;

    // appending the nodes

    repositoryContainer.appendChild(repositoryDiv);
    repositoryDiv.appendChild(infoDiv);
    infoDiv.appendChild(svgDiv);
    infoDiv.appendChild(repositoryNameDiv);
    repositoryNameDiv.appendChild(linkOfRepo);
    infoDiv.appendChild(publicDiv);

    repositoryDiv.append(aboutLinkOfRepo);

    repositoryDiv.appendChild(info2Div);
    info2Div.appendChild(languageStatsSpan);
    languageStatsSpan.appendChild(languageColorSpan);
    languageStatsSpan.appendChild(languageSpan);
    info2Div.appendChild(starGazers);


}
