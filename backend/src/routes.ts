import { Router } from 'express';

import authMiddlware from './middlewares/authMiddleware';
import ContactController from './controllers/ContactController';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';

const routes = Router();


// Rota de Login
routes.get('/auth', SessionController.authenticate);

// Rotas do Usuário
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.edit);
routes.get('/users',  UserController.index, authMiddlware);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.delete);

// Rotas de Cadastro
routes.post('/create', ContactController.create);
routes.get('/list', ContactController.index);
routes.delete('/remove/:id', ContactController.delete);


export default routes;