import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './configureStore';

function ReduxComponent(rootComponent) {
    const store = configureStore();
    return (
        <Provider store={store}>
            { rootComponent }
        </Provider>
    );
}

window.onload = function(){
  render(ReduxComponent(<h1>Hey there</h1>), document.getElementById('root'));
}