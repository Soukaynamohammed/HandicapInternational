package com.bip.backend.repository;
import java.util.List;

import com.bip.backend.entity.Progress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProgressRepository extends JpaRepository<Progress, Long> {

    List<Progress> findByLearnerId(Long learnerId);
}
