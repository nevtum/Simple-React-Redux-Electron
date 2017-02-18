import React from 'react';
import { render } from 'react-dom';

function CreateRootComponent() {
    return <h1>Hey there</h1>;
}

window.onload = function(){
  render(CreateRootComponent(), document.getElementById('root'));
}