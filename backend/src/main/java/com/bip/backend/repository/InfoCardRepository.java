package com.bip.backend.repository;

import com.bip.backend.entity.InfoCard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InfoCardRepository  extends JpaRepository<InfoCard, Integer> {
    List<InfoCard> findByChapterId(int chapterId);
}
