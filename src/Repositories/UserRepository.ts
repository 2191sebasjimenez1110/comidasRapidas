import userAuht from "../Dto/AuhtDto";
import User from "../Dto/UserDto";
import bcrypt from "bcryptjs";
import db from "../Config/configBD";


class userRepository {

    static async save(user : User){
        try {
                const sql = 'INSERT INTO user (email, nombres, apellidos, rol, password) VALUES (?, ?, ?, ?, ?)';
                const values = [user.email, user.nombres, user.apellidos, user.rol, user.password];
                await db.execute(sql, values);
                return {register: true,status: "user inserted correctly",}
        } catch (error) {
            console.error("Error en la inserción del usuario:", error);
            return {register: false,status: "User insertion error",}
        } 
    }

    static async login(userAuth : userAuht){
        const sql = 'SELECT  password, email, rol FROM user WHERE email= ?';
        const values = [userAuth.email];
        const result: any = await db.query(sql,values);
        if (result[0].length > 0) { 
            const userRow = result[0]; 
            const isPasswordValid = await bcrypt.compare(userAuth.password, userRow[0].password);
            if (isPasswordValid){
                return {
                logged: true, 
                status: "Successful authentication",
                email: userRow[0].email,
                rol: userRow[0].rol
            }
                }
        return {logged: false, status: "Invalid username or password" };
    }
    
    }
}

export default userRepository;