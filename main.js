let quill = new Quill('#editor-container', {
  theme: 'snow'
});

let form = document.getElementById('post-form');
let hiddenInput = document.getElementById('hidden-message');

form.onsubmit = function() {
  hiddenInput.value = quill.root.innerHTML;
  }

