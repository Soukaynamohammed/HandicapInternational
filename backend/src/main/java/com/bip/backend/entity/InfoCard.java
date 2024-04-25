package com.bip.backend.entity;

import jakarta.persistence.*;
import org.w3c.dom.Text;

@Entity
public class InfoCard {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int orderNumber;
    private String subtitle;
    @Column(columnDefinition="TEXT")
    private String alineaText;

    @ManyToOne
    @JoinColumn(name = "chapter_id")
    private Chapter chapter;

    public InfoCard() {
    }

    public InfoCard(int id, int orderNumber, String subtitle, String alineaText, Chapter chapter) {
        this.id = id;
        this.orderNumber = orderNumber;
        this.subtitle = subtitle;
        this.alineaText = alineaText;
        this.chapter = chapter;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(int orderNumber) {
        this.orderNumber = orderNumber;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public String getAlineaText() {
        return alineaText;
    }

    public void setAlineaText(String alineaText) {
        this.alineaText = alineaText;
    }

    public Chapter getChapter() {
        return chapter;
    }

    public void setChapter(Chapter chapter) {
        this.chapter = chapter;
    }
}
