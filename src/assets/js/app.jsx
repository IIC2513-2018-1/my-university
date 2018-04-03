import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const reactAppContainer = document.getElementById('react-app');

if (reactAppContainer) {
  const render = function render(Component) {
    ReactDOM.render(
      <Component />,
      document.getElementById('react-app'),
    );
  };

  render(App);
}
