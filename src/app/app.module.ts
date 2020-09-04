import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CONFIG } from './config';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DpMapComponent } from './delivery-planner/dp-components/dp-map/dp-map.component';
import { DpQueryComponent } from './delivery-planner/dp-components/dp-query/dp-query.component';
import { DeliveryPlannerComponent } from './delivery-planner/delivery-planner.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DpResultsComponent } from './delivery-planner/dp-components/dp-results/dp-results.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    DpMapComponent,
    DpQueryComponent,
    DeliveryPlannerComponent,
    DpResultsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: CONFIG.GOOGLE_API_KEY,
      libraries: ['places', 'geometry']
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
