import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    // GET /users
    @Get()
    findAll(){
        return []
    }

    // GET /users/:id
    @Get(':id')
    findOne(@Param('id') id: string){
        return {id}
    }

    // POST /users
    @Post()
    create(@Body() user: {}){
        return user
    }

    // PATCH /users/:id
    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate: {}){
        return {id, ...userUpdate}
    }

    // DELETE /users/:id
    @Delete(':id')
    delete(@Param('id') id: string){
        return {id}
    }
}
