/* Wheel Styling: User upload image */
function displayImage(event) {
    var image = document.getElementById('uploaded-image');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';
}

/* Wheel Styling: Apply wheel */
function applyWheel() {
    var wheel = document.getElementById('wheel-selection').value;
    var image = document.getElementById('uploaded-image');
    switch(wheel) {
        case 'wheel-stock':
            image.src = 'Supporting Files/wheel-stock.jpg';
            break;
        case 'wheel-enkei':
            image.src = 'Supporting Files/wheel-enkei.jpeg';
            break;
        case 'wheel-bbs':
            image.src = 'Supporting Files/wheel-bbs.jpg';
            break;
    }
}

/* Bodykit Styling: Swap image */
function imageClick(image) {
	document.getElementById("bodykit-styling-original").src = image.src;
}

/* Toggle display of text */
function toggle_display(paragraph) {
	var element = document.getElementById(paragraph)
	element.classList.toggle("hidden-text")
}

/* Hide text */
function hide_element(paragraph) {
	var element = document.getElementById(paragraph)
	element.classList.add("hidden-text")
}