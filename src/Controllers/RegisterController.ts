import { Request, Response } from "express";
import UserService  from "../Services/userService";
import User from "../Dto/UserDto";
import userAuht from "../Dto/AuhtDto";

class UserController{
    constructor(private readonly userService: UserService) {}
    static async register (req:Request, res: Response){
        const {email,nombres,apellidos,rol,password} = req.body;
    
        const register = await UserService.register(new User(email, nombres,apellidos,rol,password))
        if (register.status) {
            return res.status(202).json({status: register.status,});
        }else{
            return res.status(400).json({status: register.status,});
        }
    }

    static async auht (req:Request,res:Response){
        try{
            const {email,password} = req.body
            const login = await UserService.login(new userAuht(email,password));
            
            if (login?.logged) {
                return res.status(200).json({status: login.status,token: login.token});
            }else{
                return res.status(404).json({status : login?.status})
            }  
        }catch (error) {
            console.error(error);
            return res.status(500).json({ status: 'Internal Server Error' });
        }
        }
}

export default UserController