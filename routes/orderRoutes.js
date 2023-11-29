import express from "express";
import { isAdmin, isAuth } from "./../middlewares/authMiddleWare.js";
import {
  changeOrderStatusController,
  createOrderController,
  getAllOrdersController,
  getMyOrdersController,
  singleOrderDetailsController,
} from "../controllers/orderController.js";

const router = express.Router();

//ROUTES
// -----------  --- ORDER ROUTES---

//CREATE Order
router.post("/create", isAuth, createOrderController);

//GET ALL OSRDERS
router.get("/my-orders", isAuth, getMyOrdersController);

//GET SINGLEL OSRDERS DETAIL
router.get("/my-orders/:id", isAuth, singleOrderDetailsController);

//--------ADMIN -------
//GET ALL ORDERS
router.get("/admin/get-all-orders", isAuth, isAdmin, getAllOrdersController);

//CHANGE ORDER STATUS
router.put("/admin/order/:id", isAuth, isAdmin, changeOrderStatusController);

export default router;
