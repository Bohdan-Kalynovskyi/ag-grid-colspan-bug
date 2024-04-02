import {act, render, screen} from '@testing-library/react';
import App from './App';

describe('colspan with infinite row model', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('colspan follows data change when toggling expand/collapse', () => {
    render(<App/>);
    act(() => jest.advanceTimersByTime(1000));

    const toggleButton = screen.getByText(/toggle expand/i);
    act(() => toggleButton.click());
    act(() => jest.advanceTimersByTime(1000));

    const secondRow = screen.getAllByRole('row')[2]; // row having index of 0 is the grid header
    expect(secondRow).toHaveTextContent('__group_1');
    expect(secondRow).not.toHaveTextContent('Texas');
  });
});
