import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { BaseRoutingModule } from './base-routing.module';
import { LayoutModule } from '@layout/layout.module';
import { CustomerService, CompanyAccountService, CompanyService, ProductService } from 'services';
import { CompanyComponent } from './company/company.component';
import { CreateCompanyAccountComponent } from './company/create-company-account/create-company-account.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ProductComponent } from './product/product.component';
import { CreateOrUpdateProductComponent } from './product/create-or-update-product/create-or-update-product.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BaseRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [
    CustomerComponent,
    CompanyComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    CreateCompanyAccountComponent,
    ProductComponent,
    CreateOrUpdateProductComponent
  ],
  entryComponents: [
    CustomerComponent,
    CompanyComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    CreateCompanyAccountComponent,
    ProductComponent,
    CreateOrUpdateProductComponent
  ],
  providers: [
    CustomerService, CompanyAccountService, CompanyService, ProductService
  ],
}
)
export class BaseModule { }