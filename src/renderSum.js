import getSum from './getSum.js';

export default (e, output, input) => {
  e.preventDefault();

  output.textContent = getSum(input.value);
  input.value = '';
  input.focus();
}