var React = require('react'),
  ReactDOM = require('react-dom');

document.addEventListener('DOMContentLoaded', function(){
  React.render(
    <div>
      Hello, world!
      {React.createElement('div', {}, 'Hello World 2!!')} //Alternate syntax
    </div>,
      document.body
    );
});
