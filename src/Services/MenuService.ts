import Menu from "../Dto/MenuDto";
import MenuRepository from "../Repositories/MenuRepository";

class MenuService  {
    static async add (menu : Menu){
        const createMenu = await MenuRepository.add(menu);
        if (createMenu.status) {
            return {
                create : createMenu.create,
                status: createMenu.status,
            };
        }else{
            return {
                create : createMenu.create,
                status: createMenu.status,
            }
        }
    }

    static async getMenu (){
        return await MenuRepository.getMenu();
    }

    static async getMenuById(id:number){
        const menu = await MenuRepository.getMenuById(id);

        if(menu.exist){
            return {
                exist : menu.exist,
                menu : menu.menu
            }
        } return {exist : menu.exist, status: menu.status}
    }
}

export default MenuService

