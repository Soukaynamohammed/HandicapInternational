package com.bip.backend.repository;
import java.util.List;
import java.util.Optional;

import com.bip.backend.entity.Chapter;
import com.bip.backend.entity.Learner;
import com.bip.backend.entity.Progress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProgressRepository extends JpaRepository<Progress, Long> {

    List<Progress> findByLearnerAuthId(String authId);
    Optional<Progress> findByLearnerAndChapter(Learner learner, Chapter chapter);
}
