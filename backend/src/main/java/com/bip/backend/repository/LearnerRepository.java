package com.bip.backend.repository;
import java.util.Optional;
import com.bip.backend.entity.Learner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LearnerRepository extends JpaRepository<Learner, Long> {

    default Learner findOrCreateByAuthId(String authId) {
        Learner learner = findByAuthId(authId);
        if (learner == null) {
            learner = new Learner();
            learner.setAuthId(authId);
            // Set other default values for the learner if needed
            save(learner);
        }
        return learner;
    }

    Learner findByAuthId(String authId);
}
