import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryPlannerComponent } from './delivery-planner/delivery-planner.component';


const routes: Routes = [
	{ path: '', redirectTo: './index.html', pathMatch: 'full' },
  { path: './index.html', component: DeliveryPlannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
