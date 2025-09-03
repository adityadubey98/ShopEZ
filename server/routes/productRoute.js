import express from 'express';
import { upload } from '../configs/multer.js';
import authSeller from '../middlewares/authSeller.js';
import { addProduct, changeStock, productById, productList, pendingProductList, approveProduct } from '../controllers/productController.js';

const productRouter = express.Router();

// Corrected route
productRouter.post('/add', upload.array('images'), authSeller, addProduct);
productRouter.get('/list', productList);
productRouter.get('/id', productById);
productRouter.post('/stock', authSeller, changeStock);
// Route to get a list of pending products (for the seller)
productRouter.get('/pending', authSeller, pendingProductList);

// Route to approve a product
productRouter.patch('/:id/approve', authSeller, approveProduct);

export default productRouter;