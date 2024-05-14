class Producto{
    private _Id:number
    private _nombre:string;
    private _precio:number;
    private _descripcion:string;

    constructor(
        Id:number,
        nombre:string,
        precio:number,
        descripcion:string
    ){
        this._Id = Id;
        this._nombre = nombre;
        this._precio = precio;
        this._descripcion = descripcion;

    }

    get Id():number{
        return this._Id;
    }

    set Id(Id:number){
        this._Id = Id;
    }

    get nombre():string{
        return this._nombre;
    }

    set nombre(nombre:string){
        this._nombre = nombre;
    }

    get precio():number{
        return this._precio;
    }

    set precio(precio:number){
        this._precio = precio;
    }

    get descripcion():string{
        return this._descripcion;
    }

    set descripcion(descripcion:string){
        this._descripcion = descripcion;
    }
}

export default Producto