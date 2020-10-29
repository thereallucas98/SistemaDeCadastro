import React, { useState, FormEvent, useEffect } from 'react';
import { FiArrowLeft, FiUser, FiPlus, FiEdit, FiDelete, FiPhoneCall, FiX } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import '../assets/styles/pages/sidebar-menu.css';
import '../assets/styles/pages/modais.css';
import api from '../services/api';

interface Contact {
  id: number;
  contact: string;
  number: string;
}

function Menu() {
  const history = useHistory();
  const { goBack } = useHistory();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(()=> {
    api.get('/list').then(response => {
      setContacts(response.data);
    });
  }, []);

  async function handleAdd(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      number
    }
    console.log(data);

    await api.post('create-contact', data);

    alert('Conta criada! Realize seu Login!')

    history.push('/menu');

  }

  return (
    <>
      <div className="menu-container">
        <div className="app-sidebar-menu">
          <footer>
            <button type="button" onClick={goBack}>
              <FiArrowLeft size={24} color="#fff" />
            </button>
            <button type="button" >
              <Link to="/user">
                <FiUser size={24} color="#fff" /></Link>
            </button>
            <button type="button" onClick={() => setModalIsOpen(true)}>
              <FiPlus size={24} color="#fff" />
            </button>
          </footer>
        </div>
        <main>
          <table className="table-contact">
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Número do Telefone</th>
              <th>Opções</th>
            </tr>
            {contacts.map(contact => (
              <tr className="onOver" key={contact.id}>
              <td>{contact.id}#</td>
              <td>{contact.contact}</td>
              <td>{contact.number}</td>
              <td className="button-options">
                <button type="button" onClick={() => { }}>
                  <FiPhoneCall size={24} color="#fff" />
                </button>
                <button type="button">
                  <FiEdit size={24} color="#fff" />
                </button>
                <button type="button" onClick={() => { }}>
                  <FiDelete size={24} color="#fff" />
                </button>
              </td>
            </tr>
            ))}
          </table>
        </main>
      </div>

      <Modal

        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'transparent',

          },
          content: {
            position: 'absolute',
            top: '60px',
            left: '100px',
            right: '100px',
            bottom: '60px',
            border: '1px solid #ccc',
            background: 'rgb(0, 0, 0, 0.8)',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          },

        }}
      // shouldCloseOnOverlayClick={false}
      >
        <header className="modal-header-newcontact">
          <span></span>
          <h2>Adicionar Novo Contato</h2>
          <div>
            <button onClick={() => setModalIsOpen(false)}>
              <FiX size={24} color="#fff" />
            </button>
          </div>
        </header>
        <main>
          <form className="create-account-form">
            <fieldset>
              <legend>Inserir as Informações</legend>

              <div className="input-block">
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  value={name}
                  onChange={event => setName(event.target.value)}
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
            <button className="confirm-button" type="submit" onClick={handleAdd}>Criar</button>
          </form>
        </main>
      </Modal>
    </>
  );
}

export default Menu;