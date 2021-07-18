const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  switch: document.getElementById('theme-switch-toggle'),
  body: document.querySelector('body'),
};

// ============ Upload Current THEME ============ //
const uploadCurrentTheme = () => {
  refs.switch.checked = JSON.parse(localStorage.getItem('Checked'));
  //   console.log(refs.switch.checked);

  if (refs.switch.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
  }
  if (!refs.switch.checked) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
  }
};

// ============ Save Current Theme  ============ //
const changeTheme = () => {
  localStorage.setItem('Checked', refs.switch.checked);
  uploadCurrentTheme();
};

// ============ Listeners============ //

document.addEventListener('DOMContentLoaded', uploadCurrentTheme());
refs.switch.addEventListener('change', changeTheme);
