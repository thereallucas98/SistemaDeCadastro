import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

export default {

  async index(request: Request, response: Response) {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find();

    return response.json(users);
    // console.log(request.userId);
    // return response.send({ userID: request.userId });
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOneOrFail();

    return response.json(user);
  },
  async create(request: Request, response: Response) {
    console.log(request.body);

    const {
      name,
      email,
      password,
      number
    } = request.body;

    const usersRepository = getRepository(User);

    const userExists = await usersRepository.findOne({ where: { email } });

    if (userExists) {
      return response.sendStatus(409);
    }

    const user = usersRepository.create({
      name,
      email,
      password,
      number
    });

    await usersRepository.save(user);

    return response.status(201).json(user);
  },
  async edit(request: Request, response: Response) {
    const { id } = request.params;
    const {
      name,
      email,
      password,
      number
    } = request.body;

    const updateData = getRepository(User);

    await updateData.update(id, request.body)

    const updateUser = await updateData.findOne(id)

    response.send(updateUser);

    return response.status(200).json(updateUser);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const updateData = getRepository(User).delete(id);

    return response.status(200).json({ message: 'Ok' });
  }
}