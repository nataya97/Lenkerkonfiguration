import { Component, OnInit } from '@angular/core';
import {Griff} from "../modules/griff";
import {ActivatedRoute, Router} from "@angular/router";
import {GriffService} from "../services/griff.service";
import {LenkertypService} from "../services/lenkertyp.service";
import {Lenkertyp} from "../modules/lenkertyp";
import {Material} from "../modules/material";
import {MaterialService} from "../services/material.service";

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private griffService: GriffService,
    private materialService: MaterialService,
    private lenkertypService: LenkertypService,
  ) {
    this.griff = new Griff();
    this.griffe = new Array<Griff>();
    this.lenkertyp = new Lenkertyp();
    this.lenkertypen = new Array<Lenkertyp>();
    this.material = new Material();
    this.materialien = new Array<Material>();
  }

  ngOnInit() {
    this.lenkertypService.findAll().subscribe(lenker =>
    lenker.forEach(entry => {
      this.lenkertypen.push(entry)
      console.log(entry)

    }))


  }


  onSubmit() {
    this.materialService.findAll(this.lenkertyp).subscribe(material =>
      material.forEach(entry => {
        this.materialien.push(entry)
        console.log(entry, this.lenkertyp, 'xxx', )
      }) )

    this.materialien = new Array<Material>();

    this.griffService.findAll(this.material).subscribe(griffe =>
      griffe.forEach(entry => {
        this.griffe.push(entry)
        console.log(entry, this.material)
      }))

    this.griffe = new Array<Griff>();

  }

  onChange(lenkertyp: any) {
    console.log(lenkertyp)
  }

  compareById(i1: Griff, i2: Griff): boolean {
    return i1 && i2 ? i1.ID == i2.ID : i1 == i2;
  }

}
