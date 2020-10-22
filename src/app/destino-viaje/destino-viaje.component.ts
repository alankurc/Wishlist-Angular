import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {DestinoViaje} from './../models/destino-viaje.model';
import {createHostBinding} from '@angular/compiler/src/core';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino: DestinoViaje;
  @HostBinding('attr.class') cssClass = 'col-12 col-md-4 mt-3';
  constructor() {}

  ngOnInit(): void {
  }

}
