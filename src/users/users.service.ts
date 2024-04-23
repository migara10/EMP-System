import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'INTERN' },
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'ADMIN' },
    { id: 5, name: 'Eva', email: 'eva@example.com', role: 'ADMIN' },
    { id: 4, name: 'David', email: 'david@example.com', role: 'ENGINEER' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'ENGINEER' },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.filter((user) => user.id === id)
  }

  create(createUserDto:CreateUserDto){
    const userSortbyId = this.users.sort((a,b) => b.id - a.id)
    
    const newUser = {
        id: userSortbyId[0].id + 1,
        ...createUserDto
    }

    this.users.push(newUser);

    return newUser
  }

  update(id: number, updateUserDto: UpdateUserDto){
    this.users = this.users.map(user => {
        if(user.id === id){
            return {...user, ...updateUserDto}
        }
        return user
    })
    return this.findOne(id)
  }

  delete(id: number){
    const deletedUser = this.findOne(id)
    this.users = this.users.filter(user => user.id !== id)
    return deletedUser;
  }
}
