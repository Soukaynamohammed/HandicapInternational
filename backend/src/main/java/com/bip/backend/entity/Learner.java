package com.bip.backend.entity;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Learner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private Date dateOfBirth;
    private String occupation;

    @OneToMany(mappedBy = "learner")
    private List<Progress> progressList;
    public Learner() {
    }

    public Learner(int id, String name, Date dateOfBirth, String occupation) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.occupation = occupation;
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
}
