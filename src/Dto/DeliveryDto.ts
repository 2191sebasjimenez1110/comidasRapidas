class Delivery {
    private _idMenu : number;
    private _emailUser : string;
    private _domicilio : string;
    private _fecha : Date;
    private _total : number;

    constructor(
        idMenu:number,
        emailUser:string,
        domicilio:string,
        fecha:Date,
        total:number
    ){  
        this._idMenu = idMenu;
        this._emailUser = emailUser;
        this._domicilio = domicilio;
        this._fecha = fecha;
        this._total = total;
    }

    get idMenu(): number {
        return this._idMenu;
    }

    set idMenu(idMenu:number){
        this._idMenu = idMenu;
    }

    get emailUser(): string {
        return this._emailUser;
    }

    set emailUser(emailUser:string){
        this._emailUser = emailUser;
    }

    get domicilio(): string{
        return this._domicilio;
    }

    set domicilio(domicilio : string){
        this._domicilio = domicilio;
    }

    get fecha(): Date{
        return this._fecha;
    }

    set fecha(fecha : Date){
        this._fecha = fecha;
    }

    get total(): number{
        return this._total;
    }

    set total(total : number){
        this._total = total;
    }
}
export default Delivery;
