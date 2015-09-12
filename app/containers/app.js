import React from 'react-native'
import ExampleApp from './example'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux/native'
import appReducers from '../reducers/index'
import thunk from 'redux-thunk'

// // Enables your middleware:
let composers = [ applyMiddleware(thunk) ]

// include devtools and persiststate if enabled
// if (__DEVTOOLS__) {
//   composers.push(
//     devTools(),
//     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//   )
// }

const finalCreateStore = compose(...composers)(createStore)

let store = finalCreateStore(appReducers)
// if (module.hot) {
//   // Enable Webpack hot module replacement for reducers
//   module.hot.accept('./reducers/example', () => {
//     const nextRootReducer = require('./reducers/example')
//     store.replaceReducer(nextRootReducer)
//   })
// }


export default class react_native_starter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <ExampleApp />}
      </Provider>
    )
  }
}
