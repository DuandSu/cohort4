import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import AddCity from './AddCity';

test('Test AddCity render', () => {

  const mockOnclkCreateCity = jest.fn();
  const mockOnclkCancelCity = jest.fn();

  const { getByText } = render(
    <AddCity 
      onclkCreateCity={mockOnclkCreateCity}
      onclkCancelCity={mockOnclkCancelCity}
    />
  );

  let aCityElement = getByText(/enter new city/i);
  expect(aCityElement).toBeInTheDocument();
  screen.getByText(/enter new city/i);

  aCityElement = getByText(/enter population/i);
  expect(aCityElement).toBeInTheDocument();
  screen.getByText(/enter population/i);

  aCityElement = getByText(/enter latitude/i);
  expect(aCityElement).toBeInTheDocument();
  screen.getByText(/enter latitude/i);

  aCityElement = getByText(/enter longitude/i);
  expect(aCityElement).toBeInTheDocument();
  screen.getByText(/enter longitude/i);

  aCityElement = getByText(/create/i);
  expect(aCityElement).toBeInTheDocument();
  screen.getByText(/create/i);
  
  aCityElement = getByText(/cancel/i);
  expect(aCityElement).toBeInTheDocument();
  screen.getByText(/cancel/i);

  updateValueID('inputNewCity', 'Calgary');
  updateValueID('inputNewPop', 1547484);
  updateValueID('inputNewLat', 51.0447);
  updateValueID('inputNewLong', -114.0719);

  click('Create');

  expect(mockOnclkCreateCity.mock.calls.length).toBe(1);
  expect(getValueByID('inputNewCity')).toBe("Calgary");
  expect(getValueByID('inputNewPop')).toBe("1547484");
  expect(getValueByID('inputNewLat')).toBe("51.0447");
  expect(getValueByID('inputNewLong')).toBe("-114.0719");
  
  click('Cancel');
  expect(mockOnclkCancelCity.mock.calls.length).toBe(1);

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
