import express from "express";
const router = express.Router();
import { addOrderItems, addOrderById } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, addOrderById);

export default router;
