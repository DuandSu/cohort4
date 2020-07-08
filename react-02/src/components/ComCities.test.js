import React from 'react';
import { fireEvent, render, screen, act, getAllByText } from '@testing-library/react';
import ComsCities from './ComsCities';

test('Test ComCities render', () => {

  // const mockOnclkCreateCity = jest.fn();
  // const mockOnclkCancelCity = jest.fn();

  const messageArea = "Call Application comscities";
  const appKey = "comscities";

  const { getByText } = render(
    <ComsCities 
      sMessageArea={messageArea} 
      key={appKey}
    />
  );

  let cCitiesElement = getByText(/welcome to the community and city/i);
  expect(cCitiesElement).toBeInTheDocument();
  screen.getByText(/welcome to the community and city/i);

  cCitiesElement = getByText(/city name/i);
  expect(cCitiesElement).toBeInTheDocument();
  screen.getByText(/city name/i);
  
  cCitiesElement = getByText(/population:/i);
  expect(cCitiesElement).toBeInTheDocument();
  screen.getByText(/population:/i);

  // cCitiesElement = getAllByText(/add new city/i);
  // expect(cCitiesElement).toBeInTheDocument();
  screen.getAllByText(/add new city/i);

  cCitiesElement = getByText(/delete/i);
  expect(cCitiesElement).toBeInTheDocument();
  screen.getByText(/delete/i);

  cCitiesElement = getByText(/moved in/i);
  expect(cCitiesElement).toBeInTheDocument();
  screen.getByText(/moved in/i);

  cCitiesElement = getByText(/moved out/i);
  expect(cCitiesElement).toBeInTheDocument();
  screen.getByText(/moved out/i);

  cCitiesElement = getByText(/community: not entered yet/i);
  expect(cCitiesElement).toBeInTheDocument();
  screen.getByText(/community: not entered yet/i);

});

/*
    utility functions to save tons of code
*/
function getValueByID(name) {
  return document.getElementById(`${name}`).value;
}

function updateValueID(name, value) {
  document.getElementById(`${name}`).value = value;
}

function click (txt) {
  fireEvent.click(
      screen.getByText(txt)
  );
}
