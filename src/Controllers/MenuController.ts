import { Request, Response } from "express";
import MenuService from "../Services/MenuService";
import Menu from "../Dto/MenuDto";

class MenuController {
        static async createMenu(req:Request,res:Response){
            const {nombre,precio,descripcion} = req.body;
            const createmenu = await MenuService.add(new Menu(nombre,precio,descripcion));

            if (createmenu.create) {
                res.status(200).json({status:createmenu.status})
            }else{
                res.status(400).json({status:createmenu.status})
            }
        }

        static async getMenu(req:Request, res:Response){
            return res.status(200).json({
                menu : await MenuService.getMenu()
            })
        }

        static async getMenuById(req:Request, res:Response){
            try {
                const {id} = req.params;
                const menu = await MenuService.getMenuById(Number(id));
                if(menu.exist){
                    return res.status(200).json({menu: menu.menu});
                }return res.status(400).json({status:menu.status});  
            } catch (error) {
                return res.status(500).json({status:"erro interno del servidor"})
            }
        }
}

export default MenuController;