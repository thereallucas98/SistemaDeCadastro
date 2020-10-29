import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import LogoMq from '../assets/images/logo.png';
import '../assets/styles/pages/logon.css';
// import api from '../services/api';

function Logon() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    const data = {
      email, 
      password
    }
    console.log(`${data.email} - ${data.password}`)
    history.push('/menu');
  }


  return(
    <div className="logon-container">
      <img src={LogoMq} alt="Maq-Larem" />
      <section className="form">
      <form>
        <h1>Faça seu Login</h1>
        <input type="text" name="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Digite a sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className="button" onClick={handleLogin}>Entrar</button>
        <Link className="back-link" to="/create-account">
          <FiLogIn size={16} color="#e02041" />
          Criar uma conta
        </Link>
      </form>
      </section>
      
    </div>
  );
}

export default Logon;
