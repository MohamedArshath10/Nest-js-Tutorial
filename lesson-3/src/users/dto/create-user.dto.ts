import { IsEmail, isEnum, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsEmail()
    email!: string;

    @IsEnum(['MANAGER', 'SOFTWARE ENGINEER', 'SYSTEM ENGINEER', 'SOCIAL MEDIA MANAGER', 'INTERN'], {
        message: 'Valid Role required'
    })
    role!: 'MANAGER' | 'SOFTWARE ENGINEER' | 'SYSTEM ENGINEER' | 'SOCIAL MEDIA MANAGER' | 'INTERN'
}