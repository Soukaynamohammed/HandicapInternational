package com.bip.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Chapter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String title;

    @OneToOne(mappedBy = "chapter", fetch = FetchType.LAZY)
    @JsonIgnore
    private Quiz quiz;

    @OneToMany(mappedBy = "chapter")
    @JsonIgnore
    private List<InfoCard> infoCards;

    public Chapter() {
    }

    public Chapter(int id, String title) {
        this.id = id;
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public List<InfoCard> getInfoCards() {
        return infoCards;
    }

    public void setInfoCards(List<InfoCard> infoCards) {
        this.infoCards = infoCards;
    }
}
