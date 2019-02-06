import {createStore, combineReducers,applyMiddleware} from 'redux'
import app from '../common/reducers/app'
import members from '../common/reducers/members'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
const reducers = combineReducers({
    app:app,
    members, //boleh langsung ditulis jika key-nya sama
})

const middlewares = applyMiddleware(
    logger,
    thunk
)

export default createStore(reducers,middlewares)