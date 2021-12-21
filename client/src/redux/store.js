import { createStore, applyMiddleware } from 'redux'
import { userReducer } from './reducers/LoginReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const middleware = [thunk]


export const store = createStore(userReducer, composeWithDevTools(applyMiddleware(...middleware)))