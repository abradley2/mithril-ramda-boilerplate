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
			newMessage: newMessage
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

	return m('div.' + css(styles.somePadding), [
		m('input', {
			value: message,
			oninput: function (e) {
				actions.editMessage(e.target.value)
			}
		}),
		m('h3', message)
	])
}

module.exports = {view: Home}
