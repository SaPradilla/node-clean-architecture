import { JwtAdapter } from "../../../config";
import { RegisterUserDto } from "../../dtos/auth/register-user.dto";
import { CustomError } from "../../errors/custom.error";
import { AuthRepository } from "../../repositories/auth.repositories";

interface UserToken {
    token:string;
    user:{
        id:string;
        name:string;
        email:string;
    };
}

type SingToken = (payload : Object, Duration?:string)=> Promise<string | null>;

interface RegisterUserUseCase{
    execute( registerUserDto: RegisterUserDto) : Promise<any>
}

export class RegisterUser implements RegisterUserUseCase{


    constructor(
        private readonly authRepository : AuthRepository,
        private readonly signToken: SingToken = JwtAdapter.generateToken,
    ){}

    async execute(registerUserDto: RegisterUserDto): Promise<UserToken> {

        // crear token
        const user = await this.authRepository.register(registerUserDto);
        // token
        const token = await this.signToken({ id: user.id}, '2h')
        if(!token) throw CustomError.internalServer('Error generating token ')

        return{
            token: token,
            user:{
                id: user.id,
                name: user.name,
                email: user.email
            }
        }
    }
    
}