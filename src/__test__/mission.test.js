import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Missions from '../components/Missions';
import Header from '../components/Header';
import store from '../redux/configureStore';

test('Unit Test Check For Mission Component', () => {
  render(<Provider store={store}><Missions /></Provider>);
  const tableElement = screen.getByText(/Missions/);
  expect(tableElement).toBeInTheDocument();
});

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

describe('Test Missions component', () => {
  it('Test Mission Component Renders Correctly', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});

test('Unit Test Check For Mission Component', () => {
  render(<Provider store={store}><Missions /></Provider>);
  const tableElement = screen.getByText(/Description/);
  expect(tableElement).toBeInTheDocument();
});

test('Unit Test Check For Mission Component', () => {
  render(<Provider store={store}><Missions /></Provider>);
  const tableElement = screen.getByText(/Status/);
  expect(tableElement).toBeInTheDocument();
});
