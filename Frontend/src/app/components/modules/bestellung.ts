import {Griff} from "./griff";
import {Lenkertyp} from "./lenkertyp";
import {Material} from "./material";
import {Schaltung} from "./schaltung";

export class Bestellung {
  ID: number;
  griff: Griff;
  lenkertyp: Lenkertyp;
  material: Material;
  schaltung: Schaltung;
}
