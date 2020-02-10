import { combineReducers } from 'redux'
import { nameReducer, lastNameReducer } from './reducers'

const rootReducer = combineReducers({
	nameReducer,
	lastnameReducer
})

export default rootReducer;