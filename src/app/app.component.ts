/// <reference types="@types/googlemaps" />

import { Component, OnInit, ViewChild, ElementRef, NgZone, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AgmMap, MapsAPILoader } from '@agm/core';
import * as _ from 'lodash';
import { DpEventsService } from './delivery-planner/services/dp-events.service';

class Address {
  id?: number;
  street?: string;
  additionalInfo?: string;
  lat?: number;
  lng?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public loading = false;
    constructor(private dpEvent: DpEventsService) {}

    ngOnInit() {
        this.dpEvent.showLoad.subscribe((show: boolean) => {
          this.loading = show; 
        });
    }
     
}
