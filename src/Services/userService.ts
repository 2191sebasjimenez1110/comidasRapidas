import userAuht from "../Dto/AuhtDto";
import User from "../Dto/UserDto";
import generateHash from "../Helpers/generateHash";
import generateToken from "../Helpers/generateToken";
import userRepository from "../Repositories/UserRepository";

class userService {
    static async register(user : User){
        const password = await generateHash(user.password);
        user.password =  password;
        const register = await userRepository.save(user);
        if (register.status) {
            return {
                register : register.register,
                status: register.status,
            };
        }else{
            return {
                register : register.register,
                status: register.status,
            }
        }
    }
    
    static async login (userAuht : userAuht){
            try {
            const login = await userRepository.login(userAuht);
            const data = {
                email : login?.email,
                rol : login?.rol
            }
            if (login?.logged) {
                return {
                    logged: login.logged,
                    status: login.status,
                    token : generateToken(data,process.env.JWT_SECRET,60)
                }
            }else{
                return {login: login?.status}
            }
        } catch (error) {
            console.log(error);
            
        }
    }
}


export default userService;

