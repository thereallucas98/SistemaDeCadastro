import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import api from '../services/api';

import '../assets/styles/pages/create-account.css';

function CreateAccount() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');

   async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    
    const data = {
      name,
      email,
      password,
      number
    }
     console.log(data)

    await api.post('users', data);
    
    alert('Conta criada! Realize seu Login!')
    
    history.push('/');
  }

  return (
    <div className="page-create-user">
      <Sidebar />
      <main>
        <form onSubmit={handleSubmit} className="create-account-form">
          <fieldset>
            <legend>Dados</legend>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
              id="name"
              value={name}
              onChange={event => setName(event.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="password">Senha</label>
              <input
              id="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="number">Número</label>
              <input
              id="number"
              value={number}
              onChange={event => setNumber(event.target.value)}
              />
            </div>
          </fieldset>
          <button className="confirm-button" type="submit">Cadastrar</button>
        </form>
      </main>
    </div>
  );
}

export default CreateAccount;