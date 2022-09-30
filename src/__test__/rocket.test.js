import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import RocketContainer from '../components/Rockets/RocketContainer';
import Header from '../components/Missions/Header';
import store from '../redux/store';

describe('Test Header Component', () => {
  it('Test Header Component renders correctly', () => {
    const component = TestRenderer.create(
      <Router>
        <Header />
      </Router>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Test Rockets component', () => {
  it('Test Mission Component Renders Correctly', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <RocketContainer />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
