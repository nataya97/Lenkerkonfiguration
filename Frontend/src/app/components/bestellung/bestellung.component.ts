import { Component, OnInit } from '@angular/core';
import {Bestellung} from "../modules/bestellung";
import {ActivatedRoute, Router} from "@angular/router";
import {BestellungService} from "../services/bestellung.service";
import {Griff} from "../modules/griff";
import {Material} from "../modules/material";
import {Lenkertyp} from "../modules/lenkertyp";
import {Schaltung} from "../modules/schaltung";

@Component({
  selector: 'app-bestellung',
  templateUrl: './bestellung.component.html',
  styleUrls: ['./bestellung.component.css']
})
export class BestellungComponent implements OnInit {

  bestellung: Bestellung;
  bestellungen: Bestellung[];

  griff: Griff;
  griffe: Griff[];

  material: Material;
  materialien: Material[];

  lenkertyp: Lenkertyp;
  lenkertypen: Lenkertyp[];

  schaltung: Schaltung;
  schaltungen: Schaltung[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bestellungService: BestellungService
  ) {
    this.bestellung = new Bestellung();
    this.bestellungen = new Array<Bestellung>();
    this.griff = new Griff();
    this.griffe = new Array<Griff>();
    this.lenkertyp = new Lenkertyp();
    this.lenkertypen = new Array<Lenkertyp>();
    this.material = new Material();
    this.materialien = new Array<Material>();
    this.schaltung  = new Schaltung();
    this.schaltungen = new Array<Schaltung>();
  }

  ngOnInit() {

  }

  onSelectOrders() {
    
  }

}
