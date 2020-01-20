package com.lenker.Lenkerkonfiguration.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Lenkertyp {

    @Column(name ="LENKER_TYP", nullable = false, length = 50)
    private String lenkertyp;

    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer ID;

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public Integer getID() {
        return ID;
    }

    public void setLenkertyp(String lenkertyp) {
        this.lenkertyp = lenkertyp;
    }

    public String getLenkertyp() {
        return lenkertyp;
    }
}
