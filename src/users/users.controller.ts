import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
  } from '@nestjs/common';
  import { UsersService } from './users.service';
  
  @Controller('users')
  export class UsersController {
    constructor(private readonly userService: UsersService) {}
  
    @Get() // Get all users /users or /users?role=ADMIN
    findAll(@Query('role') role?:  'INTERN' | 'ENGINEER' | 'ADMIN') {
      return this.userService.findAll(role);
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.userService.findOne(+id);
    }
  
    @Post() //POST /users
    create(@Body() user: {email: string, name:string, role:'INTERN' | 'ENGINEER' | 'ADMIN'}) {
      return this.userService.create(user);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate: {name: string, email: string, role:'INTERN' | 'ENGINEER' | 'ADMIN'}) {
        return this.userService.update(+id, userUpdate)
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.userService.delete(+id);
    }
  }
  