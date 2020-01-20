import { Component, OnInit } from '@angular/core';
import {Griff} from "../modules/griff";
import {ActivatedRoute, Router} from "@angular/router";
import {GriffService} from "../services/griff.service";
import {LenkertypService} from "../services/lenkertyp.service";
import {Lenkertyp} from "../modules/lenkertyp";
import {Material} from "../modules/material";
import {MaterialService} from "../services/material.service";
import {Schaltung} from "../modules/schaltung";
import {SchaltungService} from "../services/schaltung.service";
import {Bestellung} from "../modules/bestellung";
import {BestellungService} from "../services/bestellung.service";
import {timeout} from "rxjs/operators";


@Component({
  selector: 'app-griff',
  templateUrl: './griff.component.html',
  styleUrls: ['./griff.component.css']
})
export class GriffComponent implements OnInit {

  griff: Griff;
  griffe: Griff[];

  material: Material;
  materialien: Material[];

  lenkertyp: Lenkertyp;
  lenkertypen: Lenkertyp[];

  schaltung: Schaltung;
  schaltungen: Schaltung[];

  bestellung: Bestellung;
  bestellungen: Bestellung[];

  isValid: boolean;
  statuscode: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private griffService: GriffService,
    private materialService: MaterialService,
    private lenkertypService: LenkertypService,
    private schaltungService: SchaltungService,
    private bestellungService: BestellungService
  ) {
    this.griff = new Griff();
    this.griffe = new Array<Griff>();
    this.lenkertyp = new Lenkertyp();
    this.lenkertypen = new Array<Lenkertyp>();
    this.material = new Material();
    this.materialien = new Array<Material>();
    this.schaltung  = new Schaltung();
    this.schaltungen = new Array<Schaltung>();
    this.bestellung = new Bestellung();
    this.bestellungen = new Array<Bestellung>();
    this.isValid = false;
  }

  ngOnInit(): void {
    this.lenkertypService.findAll().subscribe(lenker =>
    lenker.forEach(entry => {
      this.lenkertypen.push(entry)
    }))
  }

  onSelectLenker(lenkertyp: Lenkertyp) {
    this.lenkertyp = lenkertyp;
    this.materialService.findAll(this.lenkertyp).subscribe(material =>
      material.forEach(entry => {
        this.materialien.push(entry)
      }) )

    this.materialien = new Array<Material>();
  }

  onSelectMaterial(material: Material) {
    this.material = material;
    this.griffService.findAll(this.material).subscribe(griffe =>
      griffe.forEach(entry => {
        this.griffe.push(entry)
      }))

    this.griffe = new Array<Griff>();
  }

  onSelectSchaltung(lenkertyp: Lenkertyp) {
    this.lenkertyp = lenkertyp;
    this.schaltungService.findAll(this.lenkertyp).subscribe(schaltungen =>
    schaltungen.forEach(entry => {
      this.schaltungen.push(entry)
    }))

    this.schaltungen = new Array<Schaltung>();
  }

  onSelectGriff(griff: Griff) {
    this.griff = griff;
    this.isValid = true;
  }

  onSpecifySchaltung(schaltung: Schaltung) {
    this.schaltung = schaltung;
  }

  onChange(obj: any) {
    console.log(obj)
  }

  onSubmit() {
    this.bestellung.griff = this.griff;
    this.bestellung.lenkertyp = this.lenkertyp;
    this.bestellung.material = this.material;
    this.bestellung.schaltung = this.schaltung;

    console.log(this.bestellung);

    this.bestellungService.save(this.bestellung).subscribe();
    setTimeout(() => {
      this.router.navigate(['bestellung']);
    }, 3000);
  }

}
