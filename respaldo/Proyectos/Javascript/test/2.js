/*
2. Crear una función que reciba 4 parámetros: nombre, cédula, teléfono y email. 
    A) La función debe validar que el nombre esté compuesto por al menos tres palabras y que cada una 
    empieza en mayúscula. 
    B) La cédula debe ser mayor a 1000000000. 
    C) El teléfono debe iniciar por 3 y debe tener una longitud de 10 dígitos. 
    D) El email debe ser válido.
La función retornará el resultado de la validación en formato JSON.
*/
function user(nombre, cedula, telefono, email) {
  let resultado = {
    mensaje: "error",
    datos: {},
  };
  let validacion_nombre = nombre.split(" ").length < 3;
  let validacion_cedula =
    cedula.trim().search(/([0-9])\w+/) < 0 || cedula.trim().length < 10;
  let validacion_telefono =
    telefono.trim()[0] !== "3" || telefono.trim().length !== 10;
  let validacion_email =
    email.trim().search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) !== 0;

  console.log(
    validacion_nombre + ": nombre",
    validacion_cedula + ": cedula",
    validacion_telefono + ": telefono",
    validacion_email + "; email"
  );

  if (validacion_nombre) {
    resultado.datos.nombre = `El nombre ${nombre} debe estar compuesto por 3 palabras`;
  }
  if (validacion_cedula) {
    resultado.datos.cedula = `La cedula ${cedula} debe contener almenos 10 caracteres`;
  }
  if (validacion_telefono) {
    resultado.datos.telefono = `El numero ${telefono} es incorrecto, debe empezar en 3 y contener almenos 10 caracteres`;
  }

  if (validacion_email) {
    resultado.datos.email = `${email} correcto incorrecto`;
  }
  if (
    !validacion_nombre &&
    !validacion_cedula &&
    !validacion_telefono &&
    !validacion_email
  ) {
    resultado.mensaje = "Ok!";
    resultado.datos = "Datos correctos!";
  }
  return resultado;
}

console.log(
  user("Juan Garcia Marquez", "1000000000", "1023318866", "juan@gmail.com")
);
