import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

function App(props) {
  return <div>Hello to React World, {props.studentName}!</div>;
}

App.propTypes = {
  studentName: PropTypes.string,
};

App.defaultProps = {
  studentName: 'IIC2513',
};

export default hot(module)(App);
