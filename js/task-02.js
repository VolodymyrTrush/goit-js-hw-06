const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const getIngridientList = document.querySelector('#ingredients');

const listEl = ingredients.map(element => {
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  itemEl.classList.add('item');
  
  return itemEl;
});

getIngridientList.append(...listEl);

console.log(getIngridientList);





