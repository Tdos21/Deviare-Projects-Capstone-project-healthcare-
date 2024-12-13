import { Routes } from '@angular/router';

import { HomepageComponent } from './dashboards/homepage/homepage.component';
import { MedicineComponent } from './forms/medicine/medicine.component';
import { CategoryComponent } from './forms/category/category.component';
import { BrandComponent } from './forms/brand/brand.component';
import { ProductListComponent } from './indexes/product-list/product-list.component';
import { BrandListComponent } from './indexes/brand-list/brand-list.component';
import { CategoryListComponent } from './indexes/category-list/category-list.component';
import { InvoiceListComponent } from './indexes/invoice-list/invoice-list.component';
import { CustomerListComponent } from './indexes/customer-list/customer-list.component';
import { OrderListComponent } from './indexes/order-list/order-list.component';
import { PaymentListComponent } from './indexes/payment-list/payment-list.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsListComponent } from './dashboards/brands-list/brands-list.component';
import { ClientDashboardComponent } from './dashboards/client-dashboard/client-dashboard.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { PayConfirmComponent } from './components/pay-confirm/pay-confirm.component';
import { QuotationComponent } from './components/quotation/quotation.component';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductDisplayComponent } from './dashboards/product-display/product-display.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'clientdash',
        pathMatch: 'full',
      },
      {
        path: 'adminLogin',
        component: AdminLoginComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'clientLogin',
        component: HomepageComponent,
      },
      {
        path: 'brands',
        component: BrandsListComponent,
      },
      {
        path: 'clientdash',
        component: ClientDashboardComponent,
      },
      
      {
        path: 'adminpage',
        component: AdminpageComponent,
      },
      {
        path: 'payconfirm',
        component: PayConfirmComponent,
      },
      {
        path: 'quote',
        component: QuotationComponent,
      },
      {
        path: 'track',
        component: TrackOrderComponent,
      },
      {
        path: 'order',
        component: OrdersComponent,
      },


  // add routes
    {
      path: 'addProducts',
      component: MedicineComponent,
    },
    {
        path: 'homepage',
        component: HomepageComponent,
      },
      {
        path: 'addCategory',
        component: CategoryComponent,
      },
      {
        path: 'addBrand',
        component: BrandComponent,
      },

// index routes
      {
        path: 'productIndex',
        component: ProductListComponent,
      },
      {
        path: 'brandIndex',
        component: BrandListComponent,
      },
      {
        path: 'categoryIndex',
        component: CategoryListComponent,
      },
      {
        path: 'invoiceIndex',
        component: InvoiceListComponent,
      },
      {
        path: 'customerIndex',
        component: CustomerListComponent,
      },
      {
        path: 'productIndex',
        component: ProductListComponent,
      },
      {
        path: 'orderIndex',
        component: OrderListComponent,
      },
      {
        path: 'paymentIndex',
        component: PaymentListComponent,
      },


      //updates paths

      
      { path: 'brands', component: BrandListComponent },
      { path: 'productDisplay', component: ProductDisplayComponent },
]
