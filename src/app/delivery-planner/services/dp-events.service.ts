import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DpEventsService {
  @Output() setRouteAddress = new EventEmitter<any>();
  @Output() routeCustomerAddress = new EventEmitter<any>();
  @Output() showLoad = new EventEmitter<boolean>();
  constructor() { }
}
