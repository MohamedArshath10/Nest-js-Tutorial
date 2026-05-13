import { Injectable, NotFoundException } from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto'
import {UpdateUserDto} from './dto/update-user.dto'


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
            const rolesArray = this.users.filter(user => user.role === role)
            if(rolesArray.length === 0) throw new NotFoundException('No User Found with the role ' + role)
                
            return rolesArray
        }
        return this.users
    }

    findOne(id: number){
        const user = this.users.find(user => user.id === id)
        if(!user) throw new NotFoundException('User Not Found')
        return user
    }

    create(user: CreateUserDto) {
        const userByHighestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }
    update(id: number, updateUser:  UpdateUserDto){
        this.users = this.users.map(user => {
            if(user.id === id){
                return {...user, ...updateUser}
            }
            return user
        })
        return this.findOne(id)
    }
    delete(id: number){
        const removeUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removeUser
    }

}
