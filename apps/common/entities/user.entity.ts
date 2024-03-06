import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserBody } from './user-body.entity';
import { ApiProperty } from '@nestjs/swagger';

export enum LoginType {
  kakao = 'KAKAO',
  google = 'GOOGLE',
  naver = 'NAVER'
}

export enum Role {
  user = 'USER',
  admin = 'ADMIN'
}

export enum Gender {
  male = 'MALE',
  female = 'FEMALE'
}

// define user entity
@Entity()
export class User {
  /**
   * User PK
   */
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: '유저 고유 식별자'
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * 로그인 타입
   */
  @ApiProperty({
    example: 'KAKAO',
    description: '소셜 로그인 타입'
  })
  @Column({
    type: 'enum',
    enum: LoginType,
    nullable: false
  })
  socalLoginType: LoginType;

  /**
   * 휴대폰 번호
   */
  @ApiProperty({
    example: '01012345678',
    description: '휴대폰 번호'
  })
  @Column({
    nullable: false,
    type: 'varchar'
  })
  phoneNumber: string;

  /**
   * 광고 수신 여부
   */
  @ApiProperty({
    example: false,
    description: '광고 수신 여부',
    default: false
  })
  @Column({
    nullable: false,
    type: 'boolean'
  })
  isReceivedAdvertisement: boolean;

  /**
   * 생년월일
   */
  @ApiProperty({
    example: '2020-01-01',
    description: '생년월일'
  })
  @Column({
    nullable: false,
    type: 'date'
  })
  bod: Date;

  /**
   * 이름
   */
  @ApiProperty({
    example: '홍길동',
    description: '이름'
  })
  @Column({
    nullable: false,
    type: 'varchar'
  })
  name: string;

  /**
   * 성별
   */
  @ApiProperty({
    example: 'FEMALE',
    description: '성별'
  })
  @Column({
    nullable: false,
    type: 'enum',
    enum: Gender
  })
  gender: Gender;

  /**
   * 유저권한
   */
  @ApiProperty({
    example: 'USER',
    description: '유저 권한'
  })
  @Column({
    nullable: false,
    type: 'enum',
    enum: Role
  })
  role: Role;

  /**
   * 생성일
   */
  @ApiProperty({
    example: '2020-01-01',
    description: '생성일'
  })
  @Column({
    nullable: false,
    type: 'date'
  })
  createdAt: Date;

  /**
   * 유저의 신체정보
   */
  @OneToMany(() => UserBody, userBody => userBody.user)
  bodies: UserBody[];
}
