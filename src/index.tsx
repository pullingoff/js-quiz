import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 리덕스를 위한 코드
import {createStore} from "redux"
import {Provider} from "react-redux"
import rootReducer from './modules';

// chrome redux devtools 쓰기 위함
// const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>    
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
