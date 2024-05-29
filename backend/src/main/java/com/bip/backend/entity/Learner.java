package com.bip.backend.entity;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Learner {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String authId;
    private String name;
    private Date dateOfBirth;
    private String occupation;

    @OneToMany(mappedBy = "learner")
    private List<Progress> progressList;
    public Learner() {
    }

    public Learner(int id, String name, Date dateOfBirth, String occupation, String AuthId) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.occupation = occupation;
        this.authId = authId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getAuthId() {
        return authId;
    }

    public void setAuthId(String authId) {
        this.authId = authId;
    }
}
