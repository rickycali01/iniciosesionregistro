const registerLink = document.getElementById('registerLink');
const registerForm = document.getElementById('registerForm');
const backToLoginLink = document.getElementById('backToLoginLink');

registerLink.addEventListener('click', () => {
  registerForm.style.display = 'block';
  loginForm.style.display = 'none';
});

backToLoginLink.addEventListener('click', () => {
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

const registerUserForm = document.getElementById('registerUserForm');
const registerUsername = document.getElementById('registerUsername');
const registerPassword = document.getElementById('registerPassword');
const confirmPassword = document.getElementById('confirmPassword');

registerUserForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (registerUsername.value === '') {
    alert('Ingrese un nombre de usuario');
    return;
  }

  if (registerPassword.value === '') {
    alert('Ingrese una contraseña');
    return;
  }

  if (confirmPassword.value !== registerPassword.value) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Simulate successful registration (replace with your actual logic)
  alert('Usuario registrado con éxito');
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});