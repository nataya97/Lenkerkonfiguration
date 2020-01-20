package com.lenker.Lenkerkonfiguration.entity;

import javax.persistence.*;

@Entity
@Table(name = "ORDER_TABLE")

public class Bestellung {

    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer ID;

    @Column(name = "ORDER", length = 100)
    private String order;

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public Integer getID() {
        return ID;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }
}
