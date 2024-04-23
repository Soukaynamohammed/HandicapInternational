package com.bip.backend.controller;

import com.bip.backend.entity.Chapter;
import com.bip.backend.repository.ChapterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.List;

@RestController
@RequestMapping("/chapters")
public class ChapterController {
    @Autowired
    private ChapterRepository chapterRepository;

    @GetMapping("/chapters")
    public String getAll(Model model){
        List<Chapter> chapters = chapterRepository.findAll();
        model.addAttribute("chapters", chapters);
        return "chapter-list";
    }


}
