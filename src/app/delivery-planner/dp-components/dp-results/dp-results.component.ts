import { Component, OnInit } from '@angular/core';
import { DpEventsService } from '../../services/dp-events.service';

@Component({
  selector: 'app-dp-results',
  templateUrl: './dp-results.component.html',
  styleUrls: ['./dp-results.component.scss']
})
export class DpResultsComponent implements OnInit {
  depotaddress = "";
  storeaddress = "";
  deliverytime = "";
  deliverydistance = "";
  constructor(private dpEvent: DpEventsService) { }

  ngOnInit() {
    this.dpEvent.setRouteAddress.subscribe((data: any) => {     
      this.depotaddress = data.Depot.Address;
      this.storeaddress = data.Store.Address;
      this.deliverytime = data.Time;
      this.deliverydistance = data.Distance;
    });
  }
}