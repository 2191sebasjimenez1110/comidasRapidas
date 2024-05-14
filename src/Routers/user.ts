import express from "express";
import userController from "../Controllers/UserController";

const router = express.Router();

router.post('/Register',userController.register);
router.post('/Auht', userController.auht);

export default router;