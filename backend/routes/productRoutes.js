import express from 'express'
import {
  getProducts,
  getProductById,
  deleteProduct,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

// @desc     Fetch all products
// @route    GET /api/products
// @access   Public
router.route('/').get(getProducts)

// @desc     Fetch single product
// @route    GET /api/products/:id
// @access   Public
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

export default router
