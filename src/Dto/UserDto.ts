class User{
    private _email: string;
    private _nombres: string;
    private _apellidos: string;
    private _rol: string;
    private _password: string;

    constructor(
        email : string,
        nombres : string,
        apellidos : string,
        rol : string,
        password: string
    ){
        this._email = email;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._rol = rol
        this._password = password;
    }

    get email(): string{
        return this._email;
    }

    set email(email : string){
        this._email = email;
    }

    get nombres():string{
        return this._nombres 
    }

    set nombres(nombres:string){
        this._nombres = nombres
    }

    get apellidos(): string{
        return this._apellidos
    }

    set apellidos(apellidos:string){
        this._apellidos;
    }

    get rol():string{
        return this._rol;
    }

    set rol(rol:string){
        this._rol = rol;
    }

    get password():string{
        return this._password;
    }

    set password(password:string){
        this._password = password;
    }
}

export default User
