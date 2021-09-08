import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import {ActionInterface} from './interfaces/interfaces'
import reducer from './reducers';


const logResultoMiddleware = (storeAPI:any) => (next:any) => (action:ActionInterface) => {
    console.log('dispatching', action)
    const originalResult = next(action);
    console.log('next state', storeAPI.getState())
    return originalResult
  }

const composedEnhancer = composeWithDevTools(  
    applyMiddleware(logResultoMiddleware)
)



const rootReducer = combineReducers({
  reducer
})


const store = createStore(rootReducer, composedEnhancer);



export default store;