
export function phoneFunction(phoneData) {
  const div = document.createElement('div');
  const paragraph = document.createElement('p')

  div.classList.add('phone')
  //  paragraph.append(phone)
  paragraph.textContent = phoneData
  // paragraph.textContent = phone
  // console.log(p);
  div.append(paragraph);
  const newDiv = div

  return newDiv

}
