import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DeleteFacturaComponent } from './components/delete-factura/delete-factura.component';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';
import { RegistrarFacturaComponent } from './components/registrar-factura/registrar-factura.component';
import { GestionFacturaComponent } from './components/gestion-factura/gestion-factura.component';
import { PendingOrdersComponent } from './components/pending-orders/pending-orders.component';

@NgModule({
  declarations: [HomeComponent, InvoiceDetailComponent,DeleteFacturaComponent, RegistrarFacturaComponent, PendingOrdersComponent,GestionFacturaComponent],

  providers: [],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class InvoiceModule {}
