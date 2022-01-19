const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");

const readForm = (e) => {
  e.preventDefault();
  const nombreValue = nombre.value;
  const apellidoValue = apellido.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const user = {
    nombre: nombreValue,
    apellido: apellidoValue,
    email: emailValue,
    password: passwordValue,
  };

  //valida el formulario
  if (Object.values(user).some((valor) => valor === "")) {
    alert("Todos los campos son obligatorios");
  }
  console.log(user);
};

btnLogin.addEventListener("click", readForm);
