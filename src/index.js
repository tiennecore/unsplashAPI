import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
REDUX => npm i react-redux redux redux-devtools-extension redux-thunk

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  ,
  document.getElementById('root')
);
*/


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

