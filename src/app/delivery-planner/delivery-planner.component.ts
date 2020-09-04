import { Component, OnInit, ViewChild, ElementRef, NgZone, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AgmMap, MapsAPILoader } from '@agm/core';
import * as _ from 'lodash';



@Component({
  selector: 'app-delivery-planner',
  templateUrl: './delivery-planner.component.html',
  styleUrls: ['./delivery-planner.component.scss']
})
export class DeliveryPlannerComponent implements OnInit {
  

 


  taxPrice: number;

 



 

 

  readonly TAX = 4;





  constructor(
      private mapsApiLoader: MapsAPILoader,
      private ngZone: NgZone,
  ) {}

  ngOnInit() {
     
      
  }

  










  trackByIndex(index: number, obj: any): any {
      return index;
  }

 



  
}
