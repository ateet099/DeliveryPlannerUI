import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, isEmpty } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DpEventsService } from './dp-events.service';

@Injectable({
  providedIn: 'root'
})
export class DpService {
  /* handle subscribe */
  dpUpdateDataService: any;
  constructor(private http: HttpClient, private dpEvent: DpEventsService) { }

  // Method to get the route data from server
  getCustomerRoute(address: string): void {
    this.dpEvent.showLoad.emit(true);
    this.dpUpdateDataService = this.getRouteInformationFromLambda(address).subscribe(
      (data) => this.success(data));

  }

  success(data: any) {
    this.dpEvent.showLoad.emit(false);
    if (data.statusCode == 200) {
      var jsonObj = JSON.parse(data.body);
      this.dpEvent.setRouteAddress.emit(jsonObj);
      this.dpEvent.routeCustomerAddress.emit(jsonObj);
    } else {
      alert("Error reading route data");
    }
  }

  //Method to call route lambda
  getRouteInformationFromLambda(address: string): Observable<any> {
    let url = "https://glsc9pxycc.execute-api.us-east-1.amazonaws.com/Prod";
    var postBodyJson1 = { "UserName": "ateet@", "ClientRequestId": "123", "Address": address };
    let postBody = JSON.stringify(postBodyJson1);
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: httpHeaders
    };
    var response = this.http.post(url, postBody, options).pipe(
      retry(1)
    );

    return response;
  }



}
