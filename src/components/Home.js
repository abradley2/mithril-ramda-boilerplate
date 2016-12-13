const m = require('mithril')
const R = require('ramda')
const StyleSheet = require('aphrodite').StyleSheet
const css = require('aphrodite').css
const types = require('../types')
const store = require('../store')

const actions = {
	editMessage: function (newMessage) {
		store.dispatchAction({
			type: types.EDIT_MESSAGE,
			message: newMessage
		})
	}
}

const styles = StyleSheet.create({
	somePadding: {
		padding: '15px'
	}
})

function Home (ctrl, args) {
	const message = R.defaultTo(
		'Hello World!',
		store.getState().message
	)

	console.log('arRW', store.getState())

	return m('div' + css(styles.somePadding), [
		m('input', {
			value: message,
			onchange: function (e) {
				console.log(e.target.value)
				actions.editMessage(e.target.value)
			}
		}),
		m('h3', message)
	])
}

module.exports = {view: Home}
