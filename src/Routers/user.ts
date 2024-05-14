import express from "express";
import validateToken from "../Middlewares/validateToken";

const router = express.Router();

router.post('/Register');
router.post('/Auht');

export default router;