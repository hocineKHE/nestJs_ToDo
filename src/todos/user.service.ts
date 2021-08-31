import {Injectable, NotFoundException} from '@nestjs/common';
import { UserModel } from 'src/model/user.model';
import {UserDto} from "../dto/user.dto";

@Injectable()
export class UserService {

     userModels : UserModel[]  = [
        {
            id: 1,
            name: "hocine",
            lastName: "khed"
        },
        {
            id: 2,
            name: "Ali",
            lastName: "Tarfa"
        },
        {
            id: 3,
            name: "Tarek",
            lastName: "Rebai"
        }
    ]

    getUsers(): UserModel[] {
        return this.userModels;
    }

    getUser(id: string): UserModel {
        return this.userModels.find(result => result.id === Number(id));
    }

    postUser(user : UserDto) {
         this.userModels = [...this.userModels, user as UserModel];
    }

    updateUser(id: string, user : UserDto) {
        const userUpdate = this.userModels.find(result => result.id === +id);
        if(!userUpdate){
            return new NotFoundException('no user with this id', id);
        }
        if(user.name){
            userUpdate.name = user.name;
        }

        if (user.lastName){
            userUpdate.lastName = user.name;
        }
        const updatedUsers = this.userModels.map(u => u.id !== +id ? u : userUpdate);
        this.userModels = [...updatedUsers];
        return {updatedUsers : 1, user : updatedUsers};
    }

    deleteUser(id: string){
        const userUpdate = this.userModels.find(result => result.id === Number(id)-1);
        if(!userUpdate){
            return new NotFoundException('no user with this id', id);
        }
        delete this.userModels[Number(id)-1];
    }
}
