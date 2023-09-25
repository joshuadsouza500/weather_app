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

eval("\n/*Getting api*/\nconst apikey=\"bef7562028fa0aed688353ceb4bf787a\";\nconst apiurl =\"https://api.openweathermap.org/data/2.5/weather?&units=metric&q=\";\n\nconst searchbar = document.querySelector(\".searchbox input\");\nconst btn = document.querySelector(\".btn\");\nconst pics = document.querySelector(\".pic\");\n\n/* fetching data */\nasync function weathercheck(city){\n  const response = await fetch(apiurl + city + `&appid=${apikey}`);\n var data = await response.json(); \n   \n  printdata(data);\n}\n\nbtn.addEventListener(\"click\",()=> {\n weathercheck(searchbar.value);\n})\nsearchbar.addEventListener(\"keypress\",(e)=> {\n    if (e.key === \"Enter\") {\n       btn.click();\n    }\n  });\n/* displaying data using innerhtml*/\nfunction printdata(data){\n    document.querySelector(\".cityname\").innerHTML = data.name;\n    document.querySelector(\".temp\").innerHTML = Math.round(data.main.temp) + \"°C\";\n    document.querySelector(\".humidity\").innerHTML = \"Humidity :  \"+ data.main.humidity +\"%\";\n    document.querySelector(\".wind\").innerHTML = \"Wind speed :  \"+data.wind.speed +\" Km/hr\";\n    document.querySelector(\".real\").innerHTML = \"Real feel :  \"+data.main.feels_like + \"°C\";\n// to change images//      \n    if(data.weather[0].main === \"Mist\"){\n      pics.src = \"images/mist.png\";\n      document.querySelector(\".descpt\").innerHTML = \"Mist\";\n    }else if(data.weather[0].main ===\"Clouds\"){\n        pics.src = \"images/clouds.png\";\n        document.querySelector(\".descpt\").innerHTML = \"Cloudy\";\n    }else if(data.weather[0].main ===\"Clear\"){\n        pics.src =\"images/clear.png\";\n        document.querySelector(\".descpt\").innerHTML = \"Clear\";\n    }else if(data.weather[0].main ===\"Drizlle\"){\n        pics.src =\"images/drizzle.png\";\n        document.querySelector(\".descpt\").innerHTML = \"Drizzle\";\n    }else if(data.weather[0].main ===\"Snow\"){\n        pics.src =\"images/snow.png\";\n        document.querySelector(\".descpt\").innerHTML = \"Snow\";\n    } else if(data.weather[0].main ===\"Rain\"){\n        pics.src =\"images/rain.png\";\n        document.querySelector(\".descpt\").innerHTML = \"Rain\";\n    }\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

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