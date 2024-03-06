import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserBody } from './user-body.entity';
import { ApiProperty } from '@nestjs/swagger';

export enum AthleticCareer {
  beginner = 'beginner',
  intermediate = 'intermediate',
  advanced = 'advanced'
}

@Entity()
export class Body {
  /**
   * Body PK
   */
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Body 고유 식별자'
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * 몸무게
   */
  @ApiProperty({
    example: '70.5',
    description: '몸무게'
  })
  @Column({
    nullable: false,
    type: 'double'
  })
  weight: number;

  /**
   * 키
   */
  @ApiProperty({
    example: '170.5',
    description: '키'
  })
  @Column({
    nullable: false,
    type: 'double'
  })
  height: number;
  /**
   * 근골격량
   */
  @ApiProperty({
    example: '70.5',
    description: '근골격량'
  })
  @Column({
    nullable: true,
    type: 'double'
  })
  smm: number;
  /**
   * 체지방량
   */
  @ApiProperty({
    example: '70.5',
    description: '체지방량'
  })
  @Column({
    nullable: true,
    type: 'double'
  })
  bfm: number;

  /**
   * 운동경력
   */
  @ApiProperty({
    example: 'beginner',
    description: '운동경력'
  })
  @Column({
    nullable: false,
    type: 'enum',
    enum: AthleticCareer
  })
  athleticCareer: AthleticCareer;

  @OneToMany(() => UserBody, userBody => userBody.body)
  users: UserBody[];
}
