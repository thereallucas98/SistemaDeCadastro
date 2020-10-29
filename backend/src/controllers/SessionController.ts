import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

export default {

  async authenticate(request: Request, response: Response) {
    const repository = getRepository(User);
    const { email, password } = request.body;

    const user = await repository.findOne({ where: { email } });

    if (!user) {
      return response.sendStatus(401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return response.sendStatus(401)
    }

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })

    return response.json({
      user,
      token
    });
    
  }

    // async search(request: Request, response: Response) {
    //   const { email, password } = request.body;
    //   const data = { email, password }
    //   const user = getRepository(User);

    //   const isUserExists = await user.findOne(data);

    //   if (!isUserExists) {
    //     return response.status(400).json({ error: 'User do not exists' });
    //   }

    //   return response.json(isUserExists);
}