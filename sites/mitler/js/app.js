document.addEventListener('DOMContentLoaded', () => {

	const checkbox = document.getElementById('burger-checkbox'),
			mask     = document.querySelector('.page__mask'),
			html     = document.querySelector('Html');

	checkbox.addEventListener('click', () => {
	if(checkbox.checked) {
		html.classList.add('no-scroll')
		mask.style.display = 'block'
	}	else {
		html.classList.remove('no-scroll')
		setTimeout(() =>{
			mask.style.display = 'none'
		}, 300)
	}
	});

// слайдер
	const servicesCarousel = new Swiper('.services', {
		loop: true,
		slidesPerView: 3,
		autoplay: {
			delay: 5000,
		 },
		breakpoints: {
			993: {
				slidesPerView: 3
			},
			0: {
				slidesPerView: 2,
			},
		}
	})

	const slides = document.querySelectorAll('.services-item')

	slides.forEach(slide => {
		if (screen.width < 992) return
		if (slide.dataset.swiperSlideIndex % 2 !== 0) {
			slide.classList.add('services-item_reverse')
		}
	}) 

// фоторама
	const fotorama = new Swiper('#fotorama', {
		speed: 500,
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true,
			dynamicMainBullets: 1,
			renderBullet: function (index, className) {
			  return `<div class = '${className} thumb' style = 'background-image:  url(images/dist/photos/thumbs/foto-${index}.jpg)'></div>`;
			}
		}
	})

	const review = new Swiper('#review', {
		loop: true,
		grabCursor: true,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		 }
	})
// --

// форма обратной связи
const callback = document.querySelector('#form-callback');
const dropdown = document.querySelector('#dropdown');

dropdown.addEventListener('click', (event) => {
	dropdown.classList.toggle('open')
	if (event.target.tagName.toLowerCase() === 'li') {
		dropdown.querySelector('.callback__label').textContent = event.target.textContent
	}
})

callback.addEventListener('click', (event) => {
	let success = callback.querySelector('.success')
	if (event.target.tagName.toLowerCase() === 'button') {
		event.preventDefault()
		success.classList.add('active')
	}
})
// --
})





