
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import User from './User';

@Entity('contacts')
export default class Contact {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  contact: string;

  @Column()
  number: string;

  // @ManyToOne(() => User, user => user.contact)
  // @JoinColumn({ name: 'users_id' })
  // user: User;

}