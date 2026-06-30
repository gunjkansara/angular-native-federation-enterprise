import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { AddProduct } from './pages/add-product/add-product';
import { ProductDetails } from './pages/product-details/product-details';

export const routes: Routes = [
    {
        path: '',
        component: ProductList
    },
    {
        path: 'add',
        component: AddProduct
    },
    {
        path: 'details/:id',
        component: ProductDetails
    }
];