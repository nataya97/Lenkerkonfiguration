package dao;

import com.lenker.Lenkerkonfiguration.entity.Griff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GriffDao extends JpaRepository<Griff,Integer> {
    boolean existsByGriff(Griff griff);

    Griff findByGriff(String griff);

}
