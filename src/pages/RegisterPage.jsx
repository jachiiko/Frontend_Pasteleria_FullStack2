import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/Input.jsx';
import Select from '../atoms/Select.jsx';
import Button from '../atoms/Button.jsx';
import Card from '../atoms/Card.jsx';
import { regiones } from '../data/regions.js';
import { registerUser } from '../data/userStore.js';

// Dominios permitidos para el correo
const ALLOWED_DOMAINS = ['duoc.cl', 'admin.cl'];

export default function RegisterPage() {
  const navigate = useNavigate();

  const [run, setRun] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [direccion, setDireccion] = useState('');
  const [region, setRegion] = useState(regiones[0].nombre);
  const [comuna, setComuna] = useState(regiones[0].comunas[0]);
  const [tipoUsuario, setTipoUsuario] = useState('Cliente');

  // Verifica dominio del correo
  const emailDomainValid = (email) => {
    const match = email.toLowerCase().match(/@([^@]+)$/);
    return match ? ALLOWED_DOMAINS.includes(match[1]) : false;
  };

  // Cambio de región → actualiza comunas
  const handleRegionChange = (e) => {
    const nuevaRegion = e.target.value;
    setRegion(nuevaRegion);
    const regionObj = regiones.find((r) => r.nombre === nuevaRegion);
    setComuna(regionObj?.comunas?.[0] || '');
  };

  // Registro
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailDomainValid(correo)) {
      alert(`El correo debe pertenecer a: ${ALLOWED_DOMAINS.join(', ')}`);
      return;
    }
    if (!password || password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      // Guarda el usuario y abre sesión
      const nuevo = registerUser({
        run,
        nombres,
        apellidos,
        correo,
        password,
        direccion,
        region,
        comuna,
        tipoUsuario: correo.endsWith('@admin.cl') ? 'Administrador' : 'Cliente',
      });

      // Redirección según tipo
      if (nuevo.tipoUsuario === 'Administrador') navigate('/admin');
      else navigate('/');

      // Limpia formulario
      setRun(''); 
      setNombres(''); 
      setApellidos('');
      setCorreo(''); 
      setPassword(''); 
      setDireccion('');
      setRegion(regiones[0].nombre); 
      setComuna(regiones[0].comunas[0]);
      setTipoUsuario('Cliente');
    } catch (err) {
      alert(err.message || 'No se pudo registrar.');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <Card style={{ maxWidth: '500px' }}>
        <form onSubmit={handleSubmit}>
          <Input label="RUN (sin puntos ni guion)" type="text" value={run} onChange={(e) => setRun(e.target.value)} required />
          <Input label="Nombres" type="text" value={nombres} onChange={(e) => setNombres(e.target.value)} required />
          <Input label="Apellidos" type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} required />
          <Input label="Correo (solo @duoc.cl o @admin.cl)" type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="usuario@duoc.cl" required />
          <Input label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mínimo 6 caracteres" required />
          <Input label="Dirección" type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />

          <Select
            label="Región"
            options={regiones.map((r) => ({ value: r.nombre, label: r.nombre }))}
            value={region}
            onChange={handleRegionChange}
          />

          <Select
            label="Comuna"
            options={(regiones.find((r) => r.nombre === region)?.comunas || []).map((c) => ({ value: c, label: c }))}
            value={comuna}
            onChange={(e) => setComuna(e.target.value)}
          />

          <Select
            label="Tipo de usuario"
            options={[
              { value: 'Cliente', label: 'Cliente' },
              { value: 'Administrador', label: 'Administrador' },
            ]}
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
          />

          <Button type="submit" style={{ width: '100%' }}>
            Registrarme
          </Button>
        </form>
      </Card>
    </div>
  );
}
