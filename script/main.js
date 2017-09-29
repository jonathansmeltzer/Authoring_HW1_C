(function() {
	var theImages = document.querySelectorAll('.image-holder'),
		theHeading = document.querySelector('.heading'),
		theSubhead = document.querySelector('.main-copy h2'),
		theSeasonText = document.querySelector('.main-copy p'),
		appliedClass;
		// use querySelectorAll for a bunch of items, regular querySelector for one item

		function changeElements() {
			// making sure event handling is working
			//debugger; special function that stops the code when it finds a problem, I think
			let objectIndex = dynamicContent[this.id];
			let subImages = document.querySelector('.subImagesContainer');

			// remove all subimages
			while(subImages.firstChild) {
				subImages.removeChild(subImages.firstChild);
			}

			// add some images at the bottom of the page
			objectIndex.images.forEach(function(image, index) {
				//create a new image element
				let newSubImg = document.createElement('img');
				// add a css class to it
				newSubImg.classList.add('thumb');
				// add a source
				newSubImg.src = "images/" + objectIndex.images[index];
				// add it to the page
				subImages.appendChild(newSubImg);

			});

			// remove the last css class applied
			// this is cool. Before it was just putting a new class overtop, but this switches out the old one with the new so it doens't get stuck
			theSubhead.classList.remove(appliedClass);
			theHeading.classList.remove(appliedClass);

			// change the colour of the text elements
			theSubhead.classList.add(this.id);
			theHeading.classList.add(this.id);

			// change the content on the page
			// firstChild.nodeValue is the same as innerHTML (kind of)
			theSubhead.firstChild.nodeValue = objectIndex.headline;
			theSeasonText.firstChild.nodeValue = objectIndex.text;

			//you need this for the remove css function
			appliedClass = this.id;

		}

		theImages.forEach(function(element, index) {
			// Loop through
			element.addEventListener('click', changeElements, false);
		});

		//theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
		//theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
		//theHeading.classList.add('spring');

		//this is a little bit hack. Trevor doesn't like triggering click events this way
		//document.querySelector('#spring').click();

		//more programmy-type way to do the same thing
		changeElements.call(document.querySelector('#spring'));



		//new tool (forEach)
})();
