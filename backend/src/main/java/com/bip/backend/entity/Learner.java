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

    @OneToMany(mappedBy = "learner")
    private List<Progress> progressList;
    public Learner() {
    }

    public Learner(int id, String authId) {
        this.id = id;
        this.authId = authId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAuthId() {
        return authId;
    }

    public void setAuthId(String authId) {
        this.authId = authId;
    }
}
