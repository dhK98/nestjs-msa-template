import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserMembership {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: string;
}
