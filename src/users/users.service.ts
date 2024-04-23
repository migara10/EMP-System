import { Injectable } from '@nestjs/common';

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

  create(user: {name: string, email: string, role:'INTERN' | 'ENGINEER' | 'ADMIN' }){
    const userSortbyId = this.users.sort((a,b) => b.id - a.id)
    
    const newUser = {
        id: userSortbyId[0].id + 1,
        ...user
    }

    return newUser
  }

  update(id: number, updateUser: {name?: string, email?: string, role?:'INTERN' | 'ENGINEER' | 'ADMIN'}){
    this.users = this.users.map(user => {
        if(user.id === id){
            return {...user, ...updateUser}
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
