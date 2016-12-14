const R = require('ramda')
const types = require('../types')
const setupReducer = require('../util').setupReducer

const setMessage = R.set(R.lensProp('message'))

const initialState = {
	text: 'Hello World!'
}

const message = setupReducer()
	.on(types.__INIT__, function () {
		console.log('initialize the message store')
		return setMessage(initialState)
	})
	.on(types.EDIT_MESSAGE, function (action, oldState) {
		const newState = R.set(
			R.lensProp('text'),
			action.text,
			oldState.message
		)

		return setMessage(newState)
	})

module.exports = message.create()
