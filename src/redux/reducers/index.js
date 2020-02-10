import { actions } from './actions'

const initialState = {}

const nameReducer = (state = initialState, action) => {
	switch(action.type) {
		case actions.CLEAR_NAME:
			return Object.assign({}, state, {
				name: action.payload
			})

		case actions.SAVE_NAME:
					return Object.assign({}, state, {
				name: action.payload
			})
		default:
			return state;
	}
}

const lastNameReducer = (state = initialState,  action) => {
	switch(action.type){
		case actions.CLEAR_LASTNMAE:
			return Object.assign({}, state, {
				lastName: action.payload
			})
		case actions.SAVE_LASTNAME: 
			return Object.assign({}, state, {
				lastName: action.payload
			})
		default:
			return state;
	}
}

export { nameReducer, lastNameReducer };