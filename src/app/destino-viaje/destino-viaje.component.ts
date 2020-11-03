import {Component, OnInit, Input, HostBinding, Output, EventEmitter} from '@angular/core';
import {DestinoViaje} from './../models/destino-viaje.model';
import {createHostBinding} from '@angular/compiler/src/core';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino: DestinoViaje;
  @Input('idx') posicion: number;
  @HostBinding('attr.class') cssClass = 'col-12 col-md-4 mt-3';
  @Output() clicked: EventEmitter<DestinoViaje>;

  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ir() {
    this.clicked.emit(this.destino);
    return false;
  }

}
