import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { AgmMap, MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import * as _ from 'lodash';
import { DpEventsService } from '../../services/dp-events.service';

class Address {
  street?: string;
  lat?: number;
  lng?: number;
}

@Component({
  selector: 'app-dp-map',
  templateUrl: './dp-map.component.html',
  styleUrls: ['./dp-map.component.scss']
})
export class DpMapComponent implements OnInit {

  // google maps zoom level
  zoom = 11;

  // initial center position for the map
  lat = 51.2277;
  lng = 6.7735;

  directionsService: google.maps.DirectionsService;
  directionsRequest: google.maps.DirectionsRequest;
  directionsDisplay: google.maps.DirectionsRenderer;

  // markers labels
  alphabeticLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  labelIndex: number;

  idListener: google.maps.MapsEventListener;
  depotaddress: Address = null;
  storeaddress: Address = null;
  customeraddress: Address = null;
  distance: number;
  distancePrice: number;
  addresses: Address[];

  @ViewChild(AgmMap) public maps: AgmMap;

  markers: any[] = [];
  searchControl: FormControl;

  constructor(private mapsApiLoader: MapsAPILoader,
    private dpEvent: DpEventsService) {}

  ngOnInit() {
    this.initializeRouteAndComponents();
    this.setGoogleMaps();
    this.searchControl = new FormControl();

    this.dpEvent.routeCustomerAddress.subscribe((data: any) => {
      this.depotaddress = this.getAddressObject(data.Depot.Address, data.Depot.Coordinates.Lat, data.Depot.Coordinates.Lng);
      this.storeaddress = this.getAddressObject(data.Store.Address, data.Store.Coordinates.Lat, data.Store.Coordinates.Lng);
      this.customeraddress = this.getAddressObject(data.Customer.Address, data.Customer.Coordinates.Lat, data.Customer.Coordinates.Lng);
      this.drawRoute();
    });
  }

  ngOnDestroy() {
    google.maps.event.removeListener(this.idListener);
  }

  getAddressObject(street: string, lat: number, lng: number): Address {
    var address = new Address();
    address.street = street;
    address.lat = lat;
    address.lng = lng;
    return address;
  }

  initializeRouteAndComponents(): void {
    this.addresses = [];
    this.markers = [];
  }

  setGoogleMaps(): void {
    this.maps.mapReady.subscribe(
      mapReady => this.directionsDisplay.setMap(mapReady),
      e => console.log('Error setting map in DirectionRenderer', e)
    );

    this.labelIndex = 0;

    this.mapsApiLoader
      .load()
      .then(() => {
        // services have to be initialized inside MapsApiLoader to work
        this.initializeGoogleMapsServices();

        //this.setPlacesAutocomplete();

        // workaround to restrict Autocomplete to get addresses within the chosen city boundaries
        //this.maps.boundsChange.subscribe(bounds => this.autoComplete.setBounds(bounds));

        //this.setupPlaceChangedListener();
      })
      .catch(e => console.log('Error loading MapsApi', e));
  }



  initializeGoogleMapsServices(): void {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRequest = {} as google.maps.DirectionsRequest;
    this.directionsDisplay = new google.maps.DirectionsRenderer();
  }

  drawRoute(): void {
    this.setDirectionsRequest();
    const waypoints: google.maps.DirectionsWaypoint[] = [];
    const way: google.maps.DirectionsWaypoint = { location: this.storeaddress.street, stopover: true };
    waypoints.push(way);
    this.directionsRequest.waypoints = waypoints;
    console.log('Waypoints: ', JSON.stringify(waypoints));
    this.callDirectionServiceRoute();
  }

  setDirectionsRequest(): void {
    this.directionsRequest.origin = this.depotaddress.street;
    this.directionsRequest.destination = this.customeraddress.street;
    this.directionsRequest.travelMode = google.maps.TravelMode.DRIVING;
    this.directionsRequest.optimizeWaypoints = false;
    this.directionsRequest.unitSystem = google.maps.UnitSystem.METRIC;
  }

  callDirectionServiceRoute(): void {
    this.directionsService.route(
      this.directionsRequest,
      (
        response: google.maps.DirectionsResult,
        status: google.maps.DirectionsStatus
      ) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsDisplay.setDirections(response);
        } else {
          console.log('Failed to display directions');
        }
      }
    );
  }
}
