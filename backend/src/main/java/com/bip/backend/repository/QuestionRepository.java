package com.bip.backend.repository;

import com.bip.backend.entity.InfoCard;
import com.bip.backend.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByQuizId(int quizId);
}
