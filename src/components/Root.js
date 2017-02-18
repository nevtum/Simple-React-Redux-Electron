import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from '../configureStore';
import DevTools from './DevTools';

const store = configureStore();

function createReduxComponent(rootComponent) {
    return (props) => {
        return (
            <Provider store={store}>
                <div>
                    { rootComponent }
                    <DevTools />
                </div>
            </Provider>
        );
    };
}

import TestApp from './TestApp';
// To use own root component, change rootComponent
// argument passed into createReduxComponent.
export default createReduxComponent(<TestApp />);