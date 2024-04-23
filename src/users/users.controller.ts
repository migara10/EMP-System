import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
  } from '@nestjs/common';
  import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user.dto';
  
  @Controller('users')
  export class UsersController {
    constructor(private readonly userService: UsersService) {}
  
    @Get() // Get all users /users or /users?role=ADMIN
    findAll(@Query('role') role?:  'INTERN' | 'ENGINEER' | 'ADMIN') {
      return this.userService.findAll(role);
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.userService.findOne(id);
    }
  
    @Post() //POST /users
    create(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }
  
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto)
    }
  
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
      return this.userService.delete(id);
    }
  }
  