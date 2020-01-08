let min = 3;
let max = 10;
let number = 5;

if (number > min && number < max) {
  number += 20;
} else if (number < 40) {

} else {
  number -= 5;
}

number = (number > min && number < max) ? number + 20 : number - 5

/* for (let i = 0; i < 10; i += 1) {
  alert(i);
}
 */


const divGame = document.getElementById('game');

divGame.style.width = '300px';
divGame.style.height = '300px';
divGame.style.backgroundColor = 'green';

const olElement = divGame.querySelector('[data-my-list]');

const array = [];

for (let i = 0; i < 10; i += 1) {
  array.push(`<li>${i}</li>`);
}
olElement.innerHTML = array.join('');

/* for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li');
  li.innerHTML = i;
  olElement.appendChild(li);
} */

const liList = olElement.children;


const vdom = [{
  nodeName: "div",
  id: "game",
  children: [
    {
      nodeName: "ul",
      children: [
        {
          nodeName: "li",
          "#text": "0"
        }, {
          nodeName: "li",
          "#text": "1"
        }
      ]
    }
  ]
}];

function makeElement(children) {
  if (!Array.isArray(children)) {
    return '';
  }

  /* const array = [];
  for (let i = 0, ln = children.length; i < ln; i += 1) {
    const nodeName = children[i].nodeName;
    array.push(`
      <${nodeName}>
        ${makeElement(children[i].children)}
      </${nodeName}>
    `)
  } */

  //return array.join('');

  return children
    .map(item => `
      <${item.nodeName}>
        ${makeElement(item.children)}
      </${item.nodeName}>
    `)
    .join('')


}


const tpl = document.createElement('div');
tpl.innerHTML = makeElement(vdom);
document.body.appendChild(tpl)
