import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}

    async validateUser(username:string, password:string){
        const user = await this.userService.findOneByUserName(username);

        if(user && user.password == password){
            const {password, ...result} =user;
            return result
        }
        return null
    }
}