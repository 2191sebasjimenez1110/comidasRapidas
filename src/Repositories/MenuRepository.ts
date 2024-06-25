import Menu from "../Dto/MenuDto";
import db from "../Config/configBD";
    

class MenuRepository {
    static async add(menu : Menu){
        try {
            const sql = 'INSERT INTO menu (nombre,precio, descripcion) VALUES (?, ?, ?)';
            const values = [menu.nombre,menu.precio,menu.descripcion];
            await db.execute(sql,values);
            return {create: true,status: "successfully created menu",}
    } catch (error) {
        console.error("Error en la inserción del usuario:", error);
        return {create: false,status: "menu I don't believe",}
    } 
        
    }

    static async getMenu(): Promise<Menu[]>{
        const result : any = await db.query('SELECT * FROM menu');
        return result[0];
    }

    static async getMenuById(id: number) {
        try{
            const result : any = await db.query('SELECT * FROM menu WHERE id = ?', [id]);
            if (result[0].length === 0) {
                return { exist : false, status: 'Menú no encontrado' };
            }
            return {exist: true,menu : result[0]}
        } catch (error) {
            console.error('Error al obtener el menú:', error);
            return { exist : false, status: 'erro en la consulta' };
        }
    }
};
    


export default MenuRepository