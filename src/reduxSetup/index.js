import { combineReducers } from 'redux'
import { firstName, lastName } from './reducers'

const rootReducer = combineReducers({
firstName, lastName
})

export default rootReducer;