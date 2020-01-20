package com.lenker.Lenkerkonfiguration.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@JsonIgnoreProperties(ignoreUnknown = true)

@Entity
@Table

public class Griff {

    @Column(name = "GRIFF_TABLE", nullable = false, length = 50)
    private String griff;

    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private final long ID;

    public Griff(long id, String content) {
        this.ID = id;
        this.griff = content;
    }

    public long getID() {
        return ID;
    }

    public String getGriff() { return griff; }

    public void setGriff(String griff) { this.griff = griff; }

    @Override
    public String toString() {
        return "SOMETHING " + griff;
    }
}
