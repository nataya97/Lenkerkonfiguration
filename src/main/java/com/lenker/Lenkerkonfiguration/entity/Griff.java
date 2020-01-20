package com.lenker.Lenkerkonfiguration.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@JsonIgnoreProperties(ignoreUnknown = true)

public class Griff {

    private String griff;

    public Griff() {

    }

    public String getGriff() { return griff; }

    public void setGriff(String griff) { this.griff = griff; }

}
