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
// printRepoData()