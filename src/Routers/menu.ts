import express from "express";
import validateToken from "../Middlewares/validateToken";
import isAdmin from "../Middlewares/isAdmin";
import MenuController from "../Controllers/MenuController";

const router = express.Router();

router.post('/Create',validateToken,isAdmin,MenuController.createMenu);
router.get('/',MenuController.getMenu);
router.get('/:id',MenuController.getMenuById);

export default router;