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
        
        const menus : any[] = result[0].map((row: any) => {
            return {
              id: row.id,
              nombre: row.nombre,
              precio: row.precio,
              descripcion: row.descripcion
            };
          });
          console.log(menus);
          
      return menus;
    }

    static async getMenuById(id: number) {
        try{
            const result : any = await db.query('SELECT * FROM menu WHERE id = ?', [id]);
            
            if (result[0].length === 0) {
                return { exist : false, status: 'Menú no encontrado' };
            }
            
            const menu = {
                id: result[0][0].id,
                nombre: result[0][0].nombre,
                precio: result[0][0].precio,
                descripcion: result[0][0].descripcion
            };

            
            return {
                exist: true,
                menu : menu
            }
        } catch (error) {
            console.error('Error al obtener el menú:', error);
            return { exist : false, status: 'erro en la consulta' };
        }
    }
};
    


export default MenuRepository