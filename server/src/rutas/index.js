import { Router } from "express";
const router = Router();

//routers
import auth from "./auth/authRouter.js";
import carts from "./cart/carritoRouter.js";
import error from "./error/errorRouter.js";
import home from "./home/homeRouter.js";
import info from "./info/infoRouter.js";
import orders from "./order/orderRouter.js";
import products from "./product/productRouter.js";
import user from "./user/userRouter.js";

//middlewares

router.use("/products", products);
router.use("/carts", carts);
router.use("/user", user);
router.use("/info", info);
router.use("/orders", orders);
router.use("/", home);
router.use("/auth", auth);
router.use("*", error);

export { router };