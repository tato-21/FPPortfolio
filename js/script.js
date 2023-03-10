// retrieve the element
element = document.getElementById('js-typing-animation');

// reset the transition by...
element.addEventListener(
	'click',
	function (e) {
		e.preventDefault;

		// -> removing the class
		element.classList.remove('hero-header-animation');

		// -> triggering reflow /* The actual magic */
		// without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
		// Oops! This won't work in strict mode. Thanks Felis Phasma!
		// element.offsetWidth = element.offsetWidth;
		// Do this instead:
		void element.offsetWidth;

		// -> and re-adding the class
		element.classList.add('hero-header-animation');
	},
	false
);
