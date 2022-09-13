
   document.addEventListener('DOMContentLoaded', () => {

      let checkbox = document.querySelector('#burger-checkbox')
      let body = document.querySelector('body')
      let navBtn = document.querySelector('.btn_nav')
      // убираем прокрутку страницы при вызове меню
      checkbox.addEventListener('input', () => {
         body.classList.toggle('hidden')
      })
   })




   // --------------

