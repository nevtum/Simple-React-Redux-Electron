import { createStore, applyMiddleware, compose } from 'redux';
import rootreducer from './reducers';
import DevTools from './components/DevTools';

const enhancer = compose(DevTools.instrument());

export default function configureStore(initialState) {
    return createStore(
        rootreducer,
        initialState,
        enhancer
    );
}