import { Injectable } from '@angular/core';

const customerAddresses =
  [
    "Friedrichstraße 133, 40217 Düsseldorf",
    "Fischerstraße 23, 40477 Düsseldorf",
    "Wildenbruchstraße 2, 40545 Düsseldorf",
    "Reisholzer Str. 48, 40231 Düsseldorf"
  ];

@Injectable({
  providedIn: 'root'
})
export class DpConstantsService {
  constructor() { }
  public getcustomerAddresses() {
    return customerAddresses;
  }
}