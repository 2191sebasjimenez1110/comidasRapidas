import db from '../Config/configBD'; 


class DeliveryRepositorie{
    static async add(){
        
    }

    static async findById(){
        const result : any = await db.query('SELECT delivery.Id AS order_id, delivery.address AS order_address, p.name AS product_name, p.price, u.name AS user_name FROM delivery INNER JOIN product p ON delivery.FKId_Product = p.Id INNER JOIN user u ON delivery.FKemail_User = u.email');
        
        const history : any[] = result[0].map((row: any) => {
            return {
              id: row.order_id,
              adress: row.order_address,
              product: row.product_name,
              precio: row.price,
              user_name: row.user_name
            };
          });
      return history;
           
    }
}

export default DeliveryRepositorie;