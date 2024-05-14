import { NextFunction, Response, Request } from "express";

type Rol = 'Admin' | 'User';

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const rol: Rol = req.body.rol;
        if (!rol) {
            return res.status(400).json({ error: "El campo 'rol' es obligatorio" });
        }
        if (rol === "Admin") {
            next();
        } else {
            res.status(403).json({ status: "Acceso denegado: se requiere rol de administrador" });
        }
    } catch (error) {
        console.error("Error en la validación de rol:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export default isAdmin;