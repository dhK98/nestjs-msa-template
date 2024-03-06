import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Membership {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: '멤버십 고유 식별자'
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: '플렉스 1개월',
    description: '멤버십 이름'
  })
  @Column({
    nullable: false,
    type: 'varchar'
  })
  name: string;

  @ApiProperty({
    example: 10000,
    description: '멤버십 가격'
  })
  @Column({
    nullable: false,
    type: 'int'
  })
  price: number;

  @ApiProperty({
    example: '플렉스 1개월',
    description: '멤버십 설명'
  })
  @Column({
    nullable: false,
    type: 'varchar'
  })
  description: string;

  @ApiProperty({
    example: '2020-01-01',
    description: '멤버십 시작일'
  })
  @Column({
    nullable: false,
    type: 'date'
  })
  updatedAt: Date;

  @ApiProperty({
    example: '5',
    description: '루틴 제한'
  })
  @Column({
    nullable: false,
    type: 'int'
  })
  count: number;
}
