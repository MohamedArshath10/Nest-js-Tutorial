import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    
    // GET /users
    @Get()
    findAll(@Query('role') role?: 'MANAGER' | 'SOFTWARE ENGINEER' | 'SYSTEM ENGINEER' | 'SOCIAL MEDIA MANAGER' | 'INTERN'){
        return this.userService.findAll(role)
    }

    // GET /users/:id
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.userService.findOne(id)
    }

    // POST /users
    @Post()
    create(@Body(ValidationPipe) user: CreateUserDto){
        return this.userService.create(user)
    }

    // PATCH /users/:id
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) userUpdate: UpdateUserDto){
        return this.userService.update(id, userUpdate)
    }

    // DELETE /users/:id
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
        return this.userService.delete(id)
    }
}
