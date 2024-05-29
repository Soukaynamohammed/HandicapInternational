package com.bip.backend.controller;

import com.bip.backend.entity.InfoCard;
import com.bip.backend.entity.Learner;
import com.bip.backend.repository.LearnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/learner")
public class LearnerController {
    @Autowired
    private LearnerRepository learnerRepository;

    @GetMapping
    public List<Learner> getAll() {
        return learnerRepository.findAll();
    }



}
