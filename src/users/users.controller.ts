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

@Controller('users')
export class UsersController {
  @Get() // Get all users /users or /users?role=ADMIN
  findAll(@Query('role') role?: string) {
    return role;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() //POST /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  delete(@Param('id') id: String) {
    return { id };
  }
}
