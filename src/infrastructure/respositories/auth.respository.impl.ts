import { AuthDatasourse, AuthRepository, RegisterUserDto, UserEntity } from "../../domain";


export class AuthRepositoryImpl implements AuthRepository{

    constructor(
        private readonly authDatasource : AuthDatasourse
    ){}

    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.authDatasource.register(registerUserDto)
    }

    


}