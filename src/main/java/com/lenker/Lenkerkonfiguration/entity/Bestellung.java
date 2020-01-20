package com.lenker.Lenkerkonfiguration.entity;

import javax.persistence.*;

@Entity
@Table(name = "ORDER_TABLE")

public class Bestellung {

    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer ID;

    @Column(name = "GRIFF", length = 100, nullable = false)
    private String griff;

    @Column(name = "LENKERTYP", length = 100, nullable = false)
    private String lenkertyp;

    @Column(name = "MATERIAL", length = 100, nullable = false)
    private String material;

    @Column(name = "SCHALTUNG", length = 100, nullable = false)
    private String schaltung;

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public Integer getID() {
        return ID;
    }

    public void setGriff(String griff) {
        this.griff = griff;
    }

    public String getGriff() {
        return griff;
    }

    public void setSchaltung(String schaltung) {
        this.schaltung = schaltung;
    }

    public String getSchaltung() {
        return schaltung;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getMaterial() {
        return material;
    }

    public String getLenkertyp() {
        return lenkertyp;
    }

    public void setLenkertyp(String lenkertyp) {
        this.lenkertyp = lenkertyp;
    }
}
