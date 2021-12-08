
export function renderWhereFromFunction(whereData) {
    const div = document.createElement('div');
    const paragraph = document.createElement('p');
    // const p = document.createElement('p');

    div.classList.add('whereFrom');

// for (const homeTown of whereArr) {
//   console.log(homeTown.whereFrom);
//   p.textContent = 
// }
    paragraph.textContent = `My name is ${whereData.name} and I live in ${whereData.livesIn}, originally From ${whereData.whereFrom.city},${whereData.whereFrom.state}`;
    div.append(paragraph);
    return div;
}