const R = require('ramda')

exports.setupReducer = function setupReducer (handlers) {
	return {
		on: function (actionType, handler) {
			if (!actionType) throw new TypeError('actionType must be valid')

			return setupReducer(
				R.set(
					R.lensProp(actionType),
					handler,
					(handlers || {})
				)
			)
		},
		create: function (initialState) {
			return function (action, oldState) {
				if (handlers && handlers[action.type]) {
					return handlers[action.type](action, oldState || initialState)
				}
				return oldState
			}
		}
	}
}
