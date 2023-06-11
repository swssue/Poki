import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import * as bcrypt from 'bcryptjs';
import { AuthSignInDto } from './dto/auth-signin.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRopository: UserRepository,
    ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.userRopository.createUser(authCredentialsDto);
    }

    async siginIn(authsignindto: AuthSignInDto):Promise<string> {
        const { userid, password } = authsignindto;
        const user = await this.userRopository.findOneBy({ userid });

        if (user && (await bcrypt.compare(password, user.password))) {
            return 'logIn success'
        } else {
            throw new UnauthorizedException('login faild');
        }
    }
}
