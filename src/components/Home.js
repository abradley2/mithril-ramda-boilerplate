const m = require('mithril')
const StyleSheet = require('aphrodite').StyleSheet
const css = require('aphrodite').css
const types = require('../types')
const store = require('../store')

const styles = StyleSheet.create({
	somePadding: {
		padding: '15px'
	}
})

function Home (ctrl) {
	const messageState = store.getState().message

	return m('div.' + css(styles.somePadding), [
		m('input', {
			value: messageState.text,
			oninput: m.withAttr('value', ctrl.editText)
		}),
		m('h3', messageState.text)
	])
}

module.exports = {
	controller: function () {
		return {
			editText: function (text) {
				store.dispatchAction({
					type: types.EDIT_MESSAGE,
					text: text
				})
			}
		}
	},
	view: Home
}
