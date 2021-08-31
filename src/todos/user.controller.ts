import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Req} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserModel} from "../model/user.model";
import {UserDto} from "../dto/user.dto";

@Controller('todos')
export class UserController {

    constructor(private readonly todoService: UserService) {
    }

    @Get()
    getUsers(): UserModel[] {
        return this.todoService.getUsers();
    }

    @Get(':id')
    getUserWithId(@Param('id') id: string): UserModel {
        return this.todoService.getUser(id);
    }

    @Post()
    postUser(@Body() user: UserDto) {
        this.todoService.postUser(user);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() user: UserDto) {
        return this.todoService.updateUser(id,user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.todoService.deleteUser(id);
    }
}
