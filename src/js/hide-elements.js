// --- For minim buttons ---
document.querySelectorAll('[minim-button-id]').forEach(button => {
  const id = button.getAttribute('minim-button-id');
  const content = document.querySelector(`[minim-content-id="${id}"]`);

  if (!content) return; // skip if the target doesn't exist

  content.classList.add('hidable');

  button.addEventListener('click', () => {
    content.classList.toggle('hidden');
  });
});

// --- For hide buttons ---
document.querySelectorAll('[hide-button-id]').forEach(button => {
  const id = button.getAttribute('hide-button-id');
  const content = document.querySelector(`[hide-content-id="${id}"]`);
  const saidButton = document.querySelector(`[button-toggle-id="${id}"]`);

  if (!content) return; // skip if the target doesn't exist

  button.addEventListener('click', () => {
    content.classList.toggle('gone');
    if (saidButton) saidButton.classList.toggle('toggled');
  });
});
