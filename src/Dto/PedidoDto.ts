class Pedido {
    private _domicilio : string;
    private _fecha : string;
    private _total : number;

    constructor(
        domicilio:string,
        fecha:string,
        total:number
    ){
        this._domicilio = domicilio;
        this._fecha = fecha;
        this._total = total;
    }

    get domicilio(): string{
        return this._domicilio;
    }

    set domicilio(domicilio : string){
        this._domicilio = domicilio;
    }

    get fecha(): string{
        return this._fecha;
    }

    set fecha(fecha : string){
        this._fecha = fecha;
    }

    get total(): number{
        return this._total;
    }

    set total(total : number){
        this._total = total;
    }
}
export default Pedido
