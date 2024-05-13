package com.bip.backend.controller;

import com.bip.backend.entity.Chapter;
import com.bip.backend.repository.ChapterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chapter")
public class ChapterController {
    @Autowired
    private ChapterRepository chapterRepository;

    @GetMapping
    public List<Chapter> getAll(){
        return chapterRepository.findAll();
    }

    @GetMapping("/{id}")
    public String getTitleById(@PathVariable Long id) {
        Chapter chapter = chapterRepository.findById(id).orElse(null);
        if (chapter != null) {
            return chapter.getTitle();
        } else {
            return "Chapter not found";
        }
    }



}
