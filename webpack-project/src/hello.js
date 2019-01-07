// hello.js
let hello = () => {
  let div = document.createElement('div');
  div.innerHTML = 'Lone time no see!';
  document.body.appendChild(div);
};

export default hello;