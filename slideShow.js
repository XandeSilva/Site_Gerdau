const images = [
       { 'id': '1', 'url':'./img/s1.png'},
       { 'id': '2', 'url':'./img/p2.jpg'},
       { 'id': '3', 'url':'./img/p3.jpg'},
       { 'id': '4', 'url':'./img/p4.jpg'},
]

const containe = document.querySelector('.container-items');
      for (const image of images){
       containe.innerHTML += `
       <div class='item'>
              <img src='${image.url}'
       </div>
       `
      }

let items = document.querySelectorAll('.item');

document.querySelector('#next').addEventListener('click',()=>{
    containe.appendChild(items[0]);
    items = document.querySelectorAll('.item');
});


document.querySelector('#previous').addEventListener('click',() => {
const lastItem = items[items.length - 1];
containe.insertBefore(lastItem, items[0]);
items = document.querySelectorAll('.item');
});