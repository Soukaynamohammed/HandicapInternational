package com.bip.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "chapter_id", referencedColumnName = "id")
    private Chapter chapter;
    @OneToMany(mappedBy = "quiz")
    @JsonIgnore
    private List<Question> questions;

    public Quiz() {
    }

    public Quiz(int id, Chapter chapter, List<Question> questions) {
        this.id = id;
        this.chapter = chapter;
        this.questions = questions;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Chapter getChapter() {
        return chapter;
    }

    public void setChapter(Chapter chapter) {
        this.chapter = chapter;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }
}
