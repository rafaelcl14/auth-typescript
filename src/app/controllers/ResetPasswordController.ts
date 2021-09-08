import { Request, Response } from 'express';
import {getRepository} from 'typeorm';
import User from '../models/User';


class ResetPasswordController {

index(req: Request, res: Response){
    const email = req.body;
}
 
async store( req: Request, res: Response){
  const repository = getRepository(User);

  const {nome, email,password} = req.body;

  const userExists = await repository.findOne({where: {email}});
    
  if(userExists){
    return res.sendStatus(409)
  }

  const user = repository.create({nome, email,password});
  await repository.save(user);

  return res.json(user);

  }

}


export default new ResetPasswordController();