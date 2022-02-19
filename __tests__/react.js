import React from 'React';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom"
import regeneratorRuntime from 'regenerator-runtime';

import App from '../client/App';

describe('Unit testing React components', () => {
  describe('App', () => {
    let app;

    beforeAll(() => {
      app = render(<App />);
      // console.log(text);
    });

    test('App has a h1 with text "Test"', () => {
      // console.log((text.getByText('Mega:')));
      expect(app.getByRole('heading')).toHaveTextContent('Test');
      // expect(text.getByText('Mega:')).toHaveStyle('font-weight: bold');
    });
  });

  describe('App2', () => {
    let app;

    beforeEach(async () => {
      let app = await render(<App />);
      // console.log(text);
    });  

    test('App has a h1 with text "Test"', () => {
      // console.log((text.getByText('Mega:')));
      expect(screen.getByRole('heading')).toHaveTextContent('Test');
      // expect(text.getByText('Mega:')).toHaveStyle('font-weight: bold');
    });

  })

});