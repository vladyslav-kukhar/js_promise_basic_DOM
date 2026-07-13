'use strict';

// write your code here
const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', resolve);
});

const body = document.querySelector('body');

promise1.then((resolve) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';

  body.append(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.catch((reject) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.textContent = 'Promise was rejected!';

  body.append(div);
});
