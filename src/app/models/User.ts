import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate} from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('users')
class User {

  @PrimaryGeneratedColumn('increment')
  id_user: String;

  @Column()
  nome : string;

  @Column()
  email : string;

  @Column()
  telefone : string;

  @Column()
  email_verificado : boolean;
  
  @Column()
  password : string;

  
  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
    this.password = bcrypt.hashSync(this.password, 8);
  }

}

export default User;
