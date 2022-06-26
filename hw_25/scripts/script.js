document.addEventListener( 'DOMContentLoaded', function() {
  let heroSplide = new Splide ('#hero-splide', {
  type: 'loop',
  cover: true,
	perPage: 1,
	perMove: 1,
	autoplay: true,
	interval: 3000,
	arrows: false,
	rewind: true,
});

let arivalsSplide = new Splide ('#arivals-splide', {
  type: 'loop',
	perPage: 5,
	perMove: 1,
	pagination: false,
  autoplay: true,
	interval: 5000,
	rewind: true,
  gap: '20px',
  breakpoints: {
		768: {
			perPage: 1,
			arrows: false,
			pagination: true,
		},
		1320: {
			perPage: 3,
			gap: '15px',
		},
	},
});

let partnersSplide = new Splide ('#partners-splide', {
	type: 'loop',
	perPage: 9,
	perMove: 1,
	autoplay: true,
	interval: 3000,
	gap: '20px',
	pagination: false,
	rewind: true,
	breakpoints: {
		768: {
			perPage: 2,
			gap: '20px',
			arrows: false,
			pagination: true,
		},
		1320: {
			perPage: 6,
			gap: '10px',
		},
	},
})

partnersSplide.mount();
arivalsSplide.mount();
heroSplide.mount();
});


