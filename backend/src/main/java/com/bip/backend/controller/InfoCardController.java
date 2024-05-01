package com.bip.backend.controller;

import com.bip.backend.entity.Chapter;
import com.bip.backend.entity.InfoCard;
import com.bip.backend.repository.InfoCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/infocard")
public class InfoCardController {
    @Autowired
    private InfoCardRepository infoCardRepository;

    @GetMapping
    public List<InfoCard> getAll() {
        return infoCardRepository.findAll();
    }
}

