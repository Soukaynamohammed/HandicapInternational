package com.bip.backend.controller;

import com.bip.backend.entity.Learner;
import com.bip.backend.entity.Progress;
import com.bip.backend.repository.LearnerRepository;
import com.bip.backend.repository.ProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/progress")
public class ProgressController {
    @Autowired
    private ProgressRepository progressRepository;

    @GetMapping
    public List<Progress> getAll() {
        return progressRepository.findAll();
    }
}
