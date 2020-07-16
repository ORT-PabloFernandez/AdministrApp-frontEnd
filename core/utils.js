// validaciones usuario

export const nameValidator = name => {
  if (!name || name.length < 2) return 'El nombre no puede tener menos de 2 caracteres.';
  return '';
};

export const surnameValidator = surname => {
  if (!surname || surname.length < 2) return 'El apellido no puede tener menos de 2 caracteres.';
  return '';
};

export const usernameValidator = username => {
  if (!username || username.length < 6) return 'El nombre de usuario no puede tener menos de 6 caracteres.';
  return '';
};

export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;
  if (!email || email.length <= 0) return 'El email no puede estar vacio';
  if (!re.test(email)) return 'Por favor introduzca un mail valido';
  return '';
};

export const phoneValidator = phone => {
  const re = /^\d{10}$/;
  if (!phone || phone.length <= 0) return 'El telefono no puede estar vacio';
  if (!re.test(phone)) return 'Por favor introduzca un telefono valido (10 numeros)';
  return '';
};

export const passwordValidator = password => {
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!password || password.length <= 0) return 'El password no puede estar vacio.';
  if (!re.test(password)) return 'Verifique que su password tenga minimo 8 caracteres, con al menos una letra y un numero';
  return '';
};

export const cuitValidator = cuit => {
  const re = /^\d{11}$/;
  if (!cuit || cuit.length <= 0) return 'El CUIT no puede estar vacio';
  if (!re.test(cuit)) return 'Por favor introduzca un CUIT valido (11 numeros)';
  return '';
};

export const typeValidator = type => {
  if (!type || type.length <= 0) return 'El tipo de usuario no puede estar vacio';
  if (type != 'administracion' && type != 'propietario' && type != 'inquilino' && type != 'encargado' ) return 'El tipo de usuario debe ser administracion, propietario, inquilino o encargado';
  return '';
};

export const tituloValidator = titulo => {
  if (!titulo || titulo.length < 5) return 'El titulo no puede tener menos de 5 caracteres';
  return '';
};

export const descripcionValidator = descripcion => {
  if (!descripcion || descripcion.length < 5) return 'La descripcion no puede tener menos de 5 caracteres';
  return '';
};

export const montoValidator = monto => {
  const re = /^(\d+(?:[\.]\d{2})?)$/;
  if (!re.test(monto)) return 'El monto solo debe contener numeros y un punto';
  return '';
};