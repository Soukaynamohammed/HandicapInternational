package com.bip.backend.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Chapter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String title;
    private int quizId;

    @OneToMany(mappedBy = "chapter")
    private List<InfoCard> infoCards;

    @OneToOne(mappedBy = "chapter")
    private Quiz quiz;
}
