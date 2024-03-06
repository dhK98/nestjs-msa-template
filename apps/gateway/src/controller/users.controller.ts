import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // user 조회
  @Get()
  getUsers() {
    return 'users';
  }

  @Post()
  postUsers() {
    return 'post users';
  }

  @Put()
  putUsers() {
    return 'put users';
  }

  @Delete()
  deleteUsers() {
    return 'delete users';
  }
}
