import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../atoms/Input.jsx";
import Button from "../atoms/Button.jsx";
import Card from "../atoms/Card.jsx";
import { loginUser } from "../data/userStore.js";

export default function LoginPage() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
  e.preventDefault();
  try {
    const u = loginUser(correo, password);
    if (u.tipoUsuario === 'Administrador' || u.correo.endsWith('@admin.cl')) {
      window.location.href = '/admin';
    } else {
      window.location.href = '/';
    }
  } catch (err) {
    alert(err.message);
  }
};

  return (
    <div>
      <h2>Login</h2>
      <Card style={{ maxWidth: "420px" }}>
        <form onSubmit={onSubmit}>
          <Input
            label="Correo"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="usuario@duoc.cl o admin@admin.cl"
            required
          />
          <Input
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" style={{ width: "100%" }}>Entrar</Button>
        </form>
      </Card>
    </div>
  );
}
