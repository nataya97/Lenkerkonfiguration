package com.lenker.Lenkerkonfiguration.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)


public class Lenkertyp {

    private String lenkertyp;

    public Lenkertyp() {

    }

    public void setLenkertyp(String lenkertyp) {
        this.lenkertyp = lenkertyp;
    }

    public String getLenkertyp() {
        return lenkertyp;
    }
}
