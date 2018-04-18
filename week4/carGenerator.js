// Generate cars
let arrayGeneratedCars = generateCars(10);
console.log("Array of Generated cars")
console.log(arrayGeneratedCars);

//check car speed between 30 and 60
let mediumSpeedCars = arrayGeneratedCars.filter(checkSpeed);
console.log("Array of cars speed between 30 and 60 ");
console.log(mediumSpeedCars);

//cars which are not yellow
let notLightYellowCars = [];
arrayGeneratedCars.map(checkLightYellowCar);

console.log("Array of cars which are not yellow");
console.log(notLightYellowCars);

//change car array so that it can be read by danish person
let carsWithDanishInfo = arrayGeneratedCars.map(changeLanguage);
console.log("Cars Array in Danish")
console.log(carsWithDanishInfo);




/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}
function checkSpeed(car){
        return car.speed > 30 && car.speed < 60;
    }
function checkLightYellowCar(car){
    if(car.color !== 'lightyellow'){
        notLightYellowCars.push(car.make);
    }        
}
function changeLanguage(car){
    return {
        maerke: car.make,
        fart: car.speed,
        farve: car.color
    };
}

var requestURL = 'https://api.github.com/orgs/HackYourFuture/repos';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  let retrivedData = JSON.parse(JSON.stringify(request.response)); 
  accessData(retrivedData);
}

function accessData(hyfData){
  let curriculumModules = ['HTML-CSS','Node.js','JavaScript1','Git','CommandLine','Project','databases','curriculum','React','masterclass-react-redux'];
  console.log("Third repositary name is -------->>> " + hyfData[2].name);

  let listUl = document.querySelector('#ul-list');
  let containerProp = document.querySelector("#disp-properties");  

  for(let i = 0; i < hyfData.length; i++){
      let exist = moduleExisted(hyfData[i].name);
      if(exist){
        displayContent(hyfData[i]); 
      }
  }

function moduleExisted(moduleName){
    for(i = 0; i < curriculumModules.length; i++){
        if(moduleName == curriculumModules[i]){
            return true;
        }
    }
}
function displayContent(module){
  let listItem = document.createElement('li');
  listItem.textContent = module.name;
  listUl.appendChild(listItem);
  let moduleProp = document.createElement("p");
  moduleProp.textContent = module.name;
  let displayList = ["watchers","forks","stargazers_count","language"];
 
  for(let i = 0; i < displayList.length; i++){
    let listItem = document.createElement('li');
    listItem.textContent = displayList[i] + " : " + module[displayList[i]];
    moduleProp.appendChild(listItem);    
  }
  containerProp.appendChild(moduleProp);

}
}