import React, { useState, FormEvent } from 'react';

import Sidebar from '../components/Sidebar';

import '../assets/styles/pages/create-account.css';

function User() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');

  async function handleUpdate(event: FormEvent) {
    event.preventDefault();
    console.log('Entrei na Função');
  }

  return (
    <div className="page-create-user">
      <Sidebar />
      <main>
        <form onSubmit={handleUpdate} className="create-account-form">
          <fieldset>
            <legend>Atualizar Dados</legend>

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
          <button className="confirm-button" type="submit">Atualizar</button>
        </form>
      </main>
    </div>
  );
}

export default User;