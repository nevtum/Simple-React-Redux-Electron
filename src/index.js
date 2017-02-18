import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';

window.onload = function(){
  render(<Root />, document.getElementById('root'));
}