import { Request, Response } from 'express';
import {getRepository} from 'typeorm';
import User from '../models/User';

import nodemailer from 'nodemailer'



class UserController {

  index(req: Request, res: Response){
    return res.send({userID: req.userId});
  }
 
async store( req: Request, res: Response){
  const repository = getRepository(User);

  const {email, telefone, email_verificado ,password} = req.body;

  const userExists = await repository.findOne({where: {email}});
    
  if(userExists){
    return res.sendStatus(409)
  }

  const user = repository.create({email, telefone, email_verificado ,password});
  await repository.save(user);

  return res.status(201).json(
    {
      success: "Verifique seu email para usar a plataforma",
    }
  );

  }

}


export default new UserController();