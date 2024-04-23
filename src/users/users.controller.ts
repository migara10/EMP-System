import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get() // Get all users /users
    findAll(){
        return 'migara'
    }


}
