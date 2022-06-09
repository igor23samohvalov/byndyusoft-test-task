import 'bootstrap/dist/css/bootstrap.min.css';
import renderSum from './renderSum.js';

const output = document.querySelector('.card-title');
const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => renderSum(e, output, input));
