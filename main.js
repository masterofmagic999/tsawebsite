var quill = new Quill('#editor-container', {
  theme: 'snow'
});

var form = document.getElementById('post-form');
var hiddenInput = document.getElementById('hidden-message');

form.onsubmit = function() {
  hiddenInput.value = quill.root.innerHTML;
};