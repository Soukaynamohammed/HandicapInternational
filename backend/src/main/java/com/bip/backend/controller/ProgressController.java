package com.bip.backend.controller;
import com.bip.backend.entity.Chapter;
import com.bip.backend.repository.ChapterRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.bip.backend.entity.Learner;
import com.bip.backend.entity.Progress;
import com.bip.backend.repository.LearnerRepository;
import com.bip.backend.repository.ProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/progress")
public class ProgressController {
    @Autowired
    private ProgressRepository progressRepository;
    @Autowired
    private LearnerRepository learnerRepository;
    @Autowired
    private ChapterRepository chapterRepository;

    @GetMapping
    public List<Progress> getAll() {
        return progressRepository.findAll();
    }

    @GetMapping("/learner/{authId}")
    public List<Progress> getByLearnerId(@PathVariable String authId) {
        return progressRepository.findByLearnerAuthId(authId);
    }

    @PostMapping("/add/{authId}/{chapterId}")
    public Progress postScore(@PathVariable String authId, @PathVariable Long chapterId, @RequestBody Progress progress) {
        Learner learner = learnerRepository.findOrCreateByAuthId(authId);
        if (learner == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Learner not found");
        }
        Optional<Chapter> chapter = chapterRepository.findById(chapterId);
        if (!chapter.isPresent())
        {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Chapter not found");
        }

        Optional<Progress> existingProgress = progressRepository.findByLearnerAndChapter(learner, chapter.get());
        if (existingProgress.isPresent()) {
            // Update the existing Progress entry
            Progress existing = existingProgress.get();
            if (existing.getScore() > progress.getScore())
            {
                // Only update if them new score is higher
                return existing;
            }
            existing.setScore(progress.getScore()); // Assuming Progress has a score field
            return progressRepository.save(existing);
        } else {
            // Create a new Progress entry
            progress.setLearner(learner);
            progress.setChapter(chapter.get());
            return progressRepository.save(progress);
        }
    }

}
