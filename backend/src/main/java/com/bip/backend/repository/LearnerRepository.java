package com.bip.backend.repository;

import com.bip.backend.entity.Learner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LearnerRepository extends JpaRepository<LearnerRepository, Long> {
        Learner getById();
}
