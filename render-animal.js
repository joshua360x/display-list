
export function renderAnimals(animalData) {
  const div = document.createElement('div')
  const paragraph = document.createElement('p')



  div.classList.add('animal')

  paragraph.textContent = `My name is Mr. ${animalData.animal} and my owner is ${animalData.owner} and my best friends are ${animalData.animalBros}`
  div.append(paragraph)
  return div
}