import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import bcrypt from 'bcryptjs';
// import Contact from './Contact';


@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  @Column()
  number: string;

  // @OneToMany(() => Contact, contact => contact.user, {
  //   cascade: ['insert', 'update', 'remove']
  // })
  // @JoinColumn({ name: 'users_id' })
  // contact: Contact[];
}