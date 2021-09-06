
import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers';

const alwaysReturnHelloMiddleware = (storeAPI:any) => (next:any) => (action:any) => {
    console.log('dispatching', action)
    const originalResult = next(action);
    console.log('next state', storeAPI.getState())
    return originalResult
  }
const composedEnhancer = composeWithDevTools(  
    applyMiddleware(alwaysReturnHelloMiddleware)
)

const store = createStore(reducer, composedEnhancer);

export default store;