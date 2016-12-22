function closeForm() {
	var X = document.getElementById('X')
	var form = document.getElementById('form')
	var estimate = document.getElementById('estimate')

	form.className = 'animated bounceOutRight'
	estimate.className = 'animated bounceInRight estimate'
}

// var contact = document.getElementById('contact')

// contact.addEventListener('click', formOpen)

function formOpen() {
	var X = document.getElementById('X')
	var form = document.getElementById('form')
	var estimate = document.getElementById('estimate')

	form.className = 'animated bounceInRight'
	estimate.className = 'animated bounceOutRight estimate'
}
