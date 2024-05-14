import express from "express";
import validateToken from "../Middlewares/validateToken";
import isAdmin from "../Middlewares/isAdmin";

const router = express.Router();

router.post('/create',validateToken,isAdmin)

export default router;