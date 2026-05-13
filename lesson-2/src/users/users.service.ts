import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id: 1,
            name: 'Mohamed Arshath',
            email: 'arshath.m2003@gmail.com',
            role: 'SOFTWARE ENGINEER'
        },
        {
            id: 2,
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            role: 'INTERN'
        },
        {
            id: 3,
            name: 'Abrar',
            email: 'abrar@gmail.com',
            role: 'SYSTEM ENGINEER'
        },
        {
            id: 4,
            name: 'Aafiya',
            email: 'aafiya@gmail.com',
            role: 'SOCIAL MEDIA MANAGER'
        },
        {
            id: 5,
            name: 'Ismail',
            email: 'ismail@gmail.com',
            role: 'MANAGER'
        },
    ]
    
    findAll(role?: 'MANAGER' | 'SOFTWARE ENGINEER' | 'SYSTEM ENGINEER' | 'SOCIAL MEDIA MANAGER' | 'INTERN') {
        if(role){
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findone(id: number){
        const user = this.users.find(user => user.id === id)
        return user
    }

    create(user: {name: string, email: string, role: 'MANAGER' | 'SOFTWARE ENGINEER' | 'SYSTEM ENGINEER' | 'SOCIAL MEDIA MANAGER' | 'INTERN'}) {
        const userByHighestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }
    update(id: number, updateUser:  {name?: string, email?: string, role?: 'MANAGER' | 'SOFTWARE ENGINEER' | 'SYSTEM ENGINEER' | 'SOCIAL MEDIA MANAGER' | 'INTERN'}){
        this.users = this.users.map(user => {
            if(user.id === id){
                return {...user, ...updateUser}
            }
            return user
        })
        return this.findone(id)
    }
    delete(id: number){
        const removeUser = this.findone(id)
        this.users = this.users.filter(user => user.id !== id)
        return removeUser
    }

}
