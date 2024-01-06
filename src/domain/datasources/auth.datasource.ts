import { UserEntity } from "../entities/user.entity";
import { RegisterUserDto } from "../dtos/auth/register-user.dto"; 

//  abstract = solo sirve para implementarla, no se puede crear instancia, solose define para crear reglas

export abstract class AuthDatasourse {
    // todo:

    abstract register( registerUserDto : RegisterUserDto ):Promise<UserEntity>


}