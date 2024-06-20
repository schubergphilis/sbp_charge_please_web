function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
// let value = params.some_key; // "some_value"

window.addEventListener('DOMContentLoaded', () => {
	if ( params.session ) {
		toggleVisibility("starting")
		toggleVisibility("general")
		setTimeout(function() { window.location = "https://ilovesheep.net/sbpcharge/error.html" }, 250 )
		window.location = "sbpcharge://session/"+params.session;
	}
})
