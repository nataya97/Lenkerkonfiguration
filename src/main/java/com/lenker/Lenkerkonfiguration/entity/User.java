package com.lenker.Lenkerkonfiguration.entity;

import javax.persistence.*;

@Entity
@Table(name = "USER_TABLE")

public class User {
    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer ID;

    @Column(name = "FIRSTNAME", nullable = false, length = 50)
    private String firstname;;

    @Column(name = "LASTNAME", nullable = false, length = 50)
    private String lastname;

    @Column(name = "USERNAME", nullable = false, length = 50)
    private String username;

    //public User() { }

    public User(String username) { this.username = username; }

    public User(String firstname, String lastname) { this.firstname = firstname; this.lastname = lastname; }

    public Integer getID() { return ID; }

    public void setID(Integer ID) { this.ID = ID; }

    public String getFirstname() { return firstname; }

    public void setFirstname(String firstname) { this.firstname = firstname; }

    public String getLastname() { return lastname; }

    public void setLastname(String lastname) { this.lastname = lastname; }

    public String getUsername() { return username; }

    public void setUsername(String username) { this.username = username; }

}
