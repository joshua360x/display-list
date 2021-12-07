
export function favFoodFunction(foodData){
  const div = document.createElement('div')
  const paragraph = document.createElement('p')

  div.classList.add('food')
  paragraph.textContent = `${foodData.name} favorite food is ${foodData.favFood}`
  div.append(paragraph)

  return div
}