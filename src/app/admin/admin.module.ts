import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { MaterialFeatures } from './material.module';
import { ProductEditorComponent } from './components/product-editor/product-editor.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { OrderTableComponent } from './components/order-table/order-table.component';

@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductEditorComponent,
    ProductTableComponent,
    OrderTableComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, MaterialFeatures],
  providers: [AuthGuard],
})
export class AdminModule {}
