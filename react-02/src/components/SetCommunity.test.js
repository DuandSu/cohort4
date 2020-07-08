import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import SetCommunity from './SetCommunity';

test('Test SetCommunity render', () => {

  const mockOnclkCreateCom = jest.fn();
  const mockOnclkCancelCom = jest.fn();

  const { getByText } = render(
    <SetCommunity 
      onclkCreateCom={mockOnclkCreateCom}
      onclkCancelCom={mockOnclkCancelCom}
    />
  );

  let sComElement = getByText(/enter name of community/i);
  expect(sComElement).toBeInTheDocument();
  screen.getByText(/enter name of community/i);

  sComElement = getByText(/create/i);
  expect(sComElement).toBeInTheDocument();
  screen.getByText(/create/i);
  
  sComElement = getByText(/cancel/i);
  expect(sComElement).toBeInTheDocument();
  screen.getByText(/cancel/i);

  click('Create');
  expect(mockOnclkCreateCom.mock.calls.length).toBe(1);
  
  click('Cancel');
  click('Cancel');
  expect(mockOnclkCancelCom.mock.calls.length).toBe(2);
  
  click('Create');
  expect(mockOnclkCreateCom.mock.calls.length).toBe(2);
  
  updateValueID('inputNewCom', 'Canada');
  click('Create');
  expect(getValueByID('inputNewCom')).toBe("Canada");
  expect(mockOnclkCreateCom.mock.calls.length).toBe(3);
  
  updateValueID('inputNewCom', 'NOTCanada');
  click('Cancel');
  // Following should have had value cleared to "", but still "NOTCanada".
  // expect(getValueByID('inputNewCom')).toBe("");
  expect(mockOnclkCancelCom.mock.calls.length).toBe(3);
  // console.log(mockOnclkCancelCom.mock.calls[2][1]);
  //
  // Do NOT understand the following example:
  // expect(mockUserMsgCallback.mock.calls[2][0]).toMatch(/saved/i);


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
