import { Component, OnInit } from '@angular/core';
import {Griff} from "../modules/griff";
import {ActivatedRoute, Router} from "@angular/router";
import {GriffService} from "../services/griff.service";
import {LenkertypService} from "../services/lenkertyp.service";
import {Lenkertyp} from "../modules/lenkertyp";
import {Material} from "../modules/material";
import {MaterialService} from "../services/material.service";
import {FormBuilder, FormGroup} from "@angular/forms";

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

  ngOnInit(): void {

    this.lenkertypService.findAll().subscribe(lenker =>
    lenker.forEach(entry => {
      this.lenkertypen.push(entry)
    }))

  }

  onSubmit() {
    this.materialService.findAll(this.lenkertyp).subscribe(material =>
      material.forEach(entry => {
        this.materialien.push(entry)
        console.log(entry, this.lenkertyp, 'xxx', )
      }) )

    this.materialien = new Array<Material>();



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

  onSelectGriff(griff: Griff) {
    this.griff = griff;

  }

  onChange(obj: any) {
    console.log(obj)
  }


}
