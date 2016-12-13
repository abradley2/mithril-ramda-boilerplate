const m = require('mithril')
const Home = require('./components/Home')

document.addEventListener('DOMContentLoaded', function () {
	const appContainer = document.createElement('div')

	document.body.appendChild(appContainer)

	m.route(appContainer, '/', {
		'/': Home
	})
})
