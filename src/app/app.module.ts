import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { MedicineComponent } from "./forms/medicine/medicine.component";
import { BrandComponent } from "./forms/brand/brand.component";
import { CategoryComponent } from "./forms/category/category.component";
import { CustomerComponent } from "./forms/customer/customer.component";
import { DeliveriesComponent } from "./forms/deliveries/deliveries.component";
import { PaymentGateawayComponent } from "./forms/payment-gateaway/payment-gateaway.component";
import { PrescriptionComponent } from "./forms/prescription/prescription.component";
import { AboutusComponent } from "./dashboards/aboutus/aboutus.component";
import { AdminDashboardComponent } from "./dashboards/admin-dashboard/admin-dashboard.component";
import { BrandListComponent } from "./indexes/brand-list/brand-list.component";
import { BrandsListComponent } from "./dashboards/brands-list/brands-list.component";
import { CategoryFilterComponent } from "./dashboards/category-filter/category-filter.component";
import { ClientDashboardComponent } from "./dashboards/client-dashboard/client-dashboard.component";
import { HomepageComponent } from "./dashboards/homepage/homepage.component";
import { SearchComponent } from "./dashboards/search/search.component";
import { AdminLoginComponent } from "./components/admin-login/admin-login.component";
import { CartComponent } from "./components/cart/cart.component";
import { InvoiceListComponent } from "./indexes/invoice-list/invoice-list.component";
import { InvoicesComponent } from "./components/invoices/invoices.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { PayConfirmComponent } from "./components/pay-confirm/pay-confirm.component";
import { QuotationComponent } from "./components/quotation/quotation.component";
import { TrackOrderComponent } from "./components/track-order/track-order.component";
import { CategoryListComponent } from "./indexes/category-list/category-list.component";
import { CustomerListComponent } from "./indexes/customer-list/customer-list.component";
import { OrderListComponent } from "./indexes/order-list/order-list.component";
import { PaymentListComponent } from "./indexes/payment-list/payment-list.component";
import { ProductListComponent } from "./indexes/product-list/product-list.component";




@NgModule({
    declarations: [
      AppComponent,
      MedicineComponent,
      BrandComponent,
      CategoryComponent,
      CustomerComponent,
      DeliveriesComponent,
      PaymentGateawayComponent,
      PrescriptionComponent,
      AboutusComponent,
      AdminDashboardComponent,
      BrandListComponent,
      BrandsListComponent,
      CategoryFilterComponent,
      ClientDashboardComponent,
      HomepageComponent,
      SearchComponent,
      
      AdminLoginComponent,
      CartComponent,
      InvoiceListComponent,
      InvoicesComponent,
      OrdersComponent,
      PayConfirmComponent,
      QuotationComponent,
      TrackOrderComponent,
      CategoryListComponent,
      CustomerListComponent,
      InvoiceListComponent,
      OrderListComponent,
      PaymentListComponent,
      ProductListComponent,
      CartComponent,
      
      ProductListComponent
      
    ],
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      FormsModule, // Add FormsModule
      HttpClientModule, // Add HttpClientModule
      RouterModule.forRoot(routes), // Use the routes from app.routes.ts
    ],
    providers: [],
    bootstrap: [AppComponent], // Bootstrap the main AppComponent
  })
  export class AppModule {}