// import functions and grab DOM elements
import { phonesArr } from './array-phone.js';
import { foodFavObj } from './array-foodFav.js';
import { animalTimeArr } from './array-animal.js';
import { whereArr } from './array-Where.js';
import { phoneFunction } from './render-phone.js';
import { favFoodFunction } from './render-foodFav.js';
import { renderAnimals } from './render-animal.js';
import { renderWhereFromFunction } from './render-Where.js';

// initialize global state
const phonesEL = document.getElementById('phone-list');
const favFoodEL = document.getElementById('foodFav-list');
const animalEL = document.getElementById('animal-list');
const whereFromEL = document.getElementById('whereFrom-list');

function dataEntry(func, para, el) {
    let newDiv = func(para);
    return el.append(newDiv);
}


// phone array
for (const phone of phonesArr) {
  // console.log(phone);

  // phonesEL.append(div.append(phone))
  // let newDiv = phoneFunction(phone)
  // phonesEL.append(newDiv)
    dataEntry(phoneFunction, phone, phonesEL);
}

// food array
for (const food of foodFavObj) {
  // let foodDiv = favFoodFunction(food)
  // favFoodEL.append(foodDiv)
    dataEntry(favFoodFunction, food, favFoodEL);
}

// animal array
for (const animal of animalTimeArr) {

  // let animalDiv = renderAnimals(animal)
  // animalEL.append(animalDiv)
    dataEntry(renderAnimals, animal, animalEL);
}

for (const where of whereArr) {
    dataEntry(renderWhereFromFunction, where, whereFromEL);
    // whereFromEL.append(div);

}


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
