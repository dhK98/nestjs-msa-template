import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Body } from './body.entity';

@Entity()
export class UserBody {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.bodies)
  user: User;

  @ManyToOne(() => Body, body => body.users)
  body: Body;
}
