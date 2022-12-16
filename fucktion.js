let element = document.querySelector('.my-element');

function showClick() {
  console.log('Мы кликнули по элементу');
}

element.addEventListener('click', showClick); //почему ничего не передается 


let element = document.querySelector('.my-element');

element.addEventListener('click', function () {
  console.log('Мы кликнули по элементу');
}); 