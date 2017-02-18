import { createStore, applyMiddleware, compose } from 'redux';
import rootreducer from './reducers';

const enhancer = compose(); // to be changed in future

export default function configureStore(initialState) {
    return createStore(
        rootreducer,
        initialState,
        enhancer
    );
}