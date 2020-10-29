import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';
import Contact from '../models/Contact';

export default {
  async index(request: Request, response: Response) {
    console.log('Chamei a função!');
    const contactsRepository = getRepository(Contact);
    

    const contact = await contactsRepository.find();
    console.log(contact)
    return response.json(contact);
  },
  async create(request: Request, response: Response) {
    const {
      contact,
      number,
    } = request.body;

    const usersRepository = getRepository(User);
    const contactsRepository = getRepository(Contact);

    const contactExists = await contactsRepository.findOne({ where: { number } });
    
    if(contactExists) {
      return response.sendStatus(409);
    }

    const conctact = contactsRepository.create({
      contact,
      number
    });

    await contactsRepository.save(conctact);

    return response.status(201).json(conctact);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    
    const updateData = getRepository(Contact).delete(id);

    return response.status(200).json({ message: 'Ok' });

  }
}
