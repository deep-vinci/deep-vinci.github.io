/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const getRepoData = async () => {\r\n    // in future this could be removed to bring the github actions\r\n\r\n    let response = await fetch(\"https://api.github.com/users/deep-vinci/repos\");\r\n    let data = await response.json()\r\n\r\n    return data\r\n}\r\n\r\nconst printRepoData = async () => {\r\n    let data = await getRepoData(); // one liner before importing the data to any function\r\n\r\n    // console.log(data[0])\r\n    \r\n    data.forEach(repository => {\r\n        // console.log(repository)\r\n        console.log(`${repository.language} ${repository.stargazers_count} ${repository.name} ${repository.description == null ? \"\" : \"/ \" + repository.description}`)\r\n    });\r\n}\r\n\r\nlet searchRepoData = async (searchTerm) => {\r\n    let repoData = await getRepoData();\r\n    let searchTermRegex = new RegExp(`^${searchTerm}`, 'i'); // Creating RegExp dynamically\r\n    const searchedRepoOutput = repoData.filter(repo => searchTermRegex.test(repo.name))\r\n    \r\n    console.log(searchedRepoOutput)\r\n    // repoData.forEach(repo => {\r\n    //     console.log(`${searchTermRegex.test(repo.name) == true ? 1 : 0} ${repo.name}`)\r\n    // })\r\n}\r\n\r\n\r\nsearchRepoData(\"tic\")\r\n// printRepoData()\n\n//# sourceURL=webpack://deep-vinci.github.io/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;