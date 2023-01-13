import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";


interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({email, password}:  IRequest): Promise<IResponse> {

        const user = await this.usersRepository.findByEmail(email);

        if(!user) {
            throw new AppError("Email or password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        if(!password) {
            throw new AppError("Email or password incorrect!");
        }

        const token = sign({}, "3087fef099356ee4eb120feee83a80e2", {
            subject: user.id,
            expiresIn: "1d"
        })

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn;

    }
}

export { AuthenticateUserUseCase }