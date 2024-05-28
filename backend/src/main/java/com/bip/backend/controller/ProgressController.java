package com.bip.backend.controller;
import org.springframework.web.bind.annotation.*;

import com.bip.backend.entity.Learner;
import com.bip.backend.entity.Progress;
import com.bip.backend.repository.LearnerRepository;
import com.bip.backend.repository.ProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;

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

    @GetMapping("/learner/{learnerId}")
    public List<Progress> getByLearnerId(@PathVariable Long learnerId) {
        return progressRepository.findByLearnerId(learnerId);
    }

    @PostMapping("/add")
    public Progress postScore(@RequestBody Progress progress) {
        return progressRepository.save(progress);
    }
}
