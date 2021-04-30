const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})

/* 
Tao trang thai css active
dung cac medthod classList remove add toggle de tuy chon
*/