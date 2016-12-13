const m = require('mithril')
const R = require('ramda')
const store = require('./store')

const Home = require('./components/Home')

document.addEventListener('DOMContentLoaded', function () {
	console.loge('START')

	const appContainer = document.createElement('div')

	document.body.appendChild(appContainer)

	m.route.mode = 'pathname'

	m.route(appContainer, '/', {
		'/': Home
	})

})
