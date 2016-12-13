const R = require('ramda')
const m = require('mithril')
const types = require('../types')
const setupReducer = require('../util').setupReducer

const setMessage = R.set(R.lensProp('message'))

const message = setupReducer()
	.on(types.EDIT_MESSAGE, function (action, oldState) {

		return setMessage(action.newMessage)
	})

module.exports = message.create()
