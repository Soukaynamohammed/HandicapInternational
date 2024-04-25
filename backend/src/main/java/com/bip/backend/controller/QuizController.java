package com.bip.backend.controller;

import com.bip.backend.entity.Question;
import com.bip.backend.entity.Quiz;
import com.bip.backend.repository.QuestionRepository;
import com.bip.backend.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/quiz")
public class QuizController {
    @Autowired
    private QuizRepository quizRepository;

    @GetMapping
    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }
}
