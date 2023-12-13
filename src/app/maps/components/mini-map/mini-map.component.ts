import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {

  @Input() lngLat?: [number, number];
  @ViewChild ('map') divMap?: ElementRef;

  ngAfterViewInit(){
    if( !this.divMap?.nativeElement) throw 'map not found';
    if( !this.lngLat ) throw 'lngLat cant be null';

    //mapa
  const map = new Map({
    container: this.divMap?.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: this.lngLat, // starting position [lng, lat]
    zoom: 9, // starting zoom
    interactive: false,
  });

  //marker
  new Marker()
    .setLngLat( this.lngLat )
    .addTo( map );

  }



}
