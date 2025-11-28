// src/data/userStore.js
const USERS_KEY = "usuariosPasteleria";
const CURRENT_USER_KEY = "usuarioActual";

export function loadUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
  catch { return []; }
}
export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}
export function setCurrentUser(user) {
  sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}
export function getCurrentUser() {
  try { return JSON.parse(sessionStorage.getItem(CURRENT_USER_KEY)) || null; }
  catch { return null; }
}
export function logout() {
  sessionStorage.removeItem(CURRENT_USER_KEY);
}

export function registerUser(payload) {
  const users = loadUsers();
  const correo = (payload.correo || "").toLowerCase();
  if (users.some(u => u.correo.toLowerCase() === correo)) {
    throw new Error("El correo ya está registrado.");
  }
  const newUser = { ...payload, correo };
  users.push(newUser);
  saveUsers(users);
  setCurrentUser({ correo: newUser.correo, nombres: newUser.nombres, tipoUsuario: newUser.tipoUsuario });
  return newUser;
}

export function loginUser(correo, password) {
  const users = loadUsers();
  const user = users.find(u => u.correo.toLowerCase() === (correo || "").toLowerCase());
  if (!user) throw new Error("Usuario no encontrado.");
  if (user.password !== password) throw new Error("Contraseña incorrecta.");
  setCurrentUser({ correo: user.correo, nombres: user.nombres, tipoUsuario: user.tipoUsuario });
  return user;
}
