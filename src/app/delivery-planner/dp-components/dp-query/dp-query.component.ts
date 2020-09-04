import { Component, OnInit } from '@angular/core';
import { DpConstantsService } from '../../services/dp-contants.service';
import { DpEventsService } from '../../services/dp-events.service';
import { DpService } from '../../services/dp.service';

@Component({
  selector: 'app-dp-query',
  templateUrl: './dp-query.component.html',
  styleUrls: ['./dp-query.component.scss']
})
export class DpQueryComponent implements OnInit {
  customers = [];
  selectedCustomer = "";
  constructor(private dpService: DpService,private dpConstants: DpConstantsService) { }

  ngOnInit() {
    this.initCustomersAddresses();
  }
  //Method Initializes the Customer List 
  initCustomersAddresses() {
    this.customers = this.dpConstants.getcustomerAddresses();    
  }
  //Event Call Back for the Customer Select Box
  onCustomerSelect(val) {   
    this.selectedCustomer = val;   
    this.dpService.getCustomerRoute(this.selectedCustomer);
  }
}
