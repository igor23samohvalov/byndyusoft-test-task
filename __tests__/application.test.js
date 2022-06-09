/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import renderSum from '../src/renderSum.js';

test('renders result', async () => {

  document.body.innerHTML = `
    <form>
      <input type="text" data-testid="input">
      <h5 class="card-title" data-testid="output"><h5>
      <button type="submit" data-testid="submit">Submit</button>
    </form>
  `;
  screen.queryByTestId('submit').addEventListener('click', (e) => (
    renderSum(e, screen.queryByTestId('output'), screen.queryByTestId('input'))
  ));

  await userEvent.type(screen.queryByTestId('input'), '15,   22,   3 , 10  , 10,  -5');
  await userEvent.click(screen.queryByTestId('submit'));

  expect(await screen.findByText(/-2/i)).toBeInTheDocument();
})