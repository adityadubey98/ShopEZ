import express from 'express';
import { isSellerAuth, sellerLogin, sellerLogout } from '../controllers/sellerController.js';
import authSeller from '../middlewares/authSeller.js';


const sellerRouter = express.Router();

// ADD THIS VERIFICATION ROUTE
sellerRouter.get('/verify', authSeller, (req, res) => {
    // If the authSeller middleware passes, it means the token is valid.
    res.json({ success: true, message: 'Seller is authenticated.' });
});

sellerRouter.post('/login', sellerLogin);
sellerRouter.get('/is-Auth',authSeller,  isSellerAuth);
sellerRouter.get('/logout', sellerLogout);


export default sellerRouter;
