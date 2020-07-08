import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {

  const onPushMe = jest.fn();

  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  let tempText = "Edit src/App.js and save to reload.";
  screen.getByText(/Edit src/);

  // fireEvent.click(document.getElementsByClassName("App-svg1"));
  // expect(onPushMe.mock.calls.length).toBe(1);
  // `${linkElement}`
});
