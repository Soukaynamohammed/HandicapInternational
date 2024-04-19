package com.bip.backend.entity;

import jakarta.persistence.*;

@Entity
public class Progress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "learner_id")
    private Learner learner;

    @ManyToOne
    @JoinColumn(name = "chapter_id")
    private Chapter chapter;

    private int statusProgress;
    private double score;

    public Progress() {
    }

    public Progress(int id, Learner learner, Chapter chapter, int statusProgress, double score) {
        this.id = id;
        this.learner = learner;
        this.chapter = chapter;
        this.statusProgress = statusProgress;
        this.score = score;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Learner getLearner() {
        return learner;
    }

    public void setLearner(Learner learner) {
        this.learner = learner;
    }

    public Chapter getChapter() {
        return chapter;
    }

    public void setChapter(Chapter chapter) {
        this.chapter = chapter;
    }

    public int getStatusProgress() {
        return statusProgress;
    }

    public void setStatusProgress(int statusProgress) {
        this.statusProgress = statusProgress;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }
}
