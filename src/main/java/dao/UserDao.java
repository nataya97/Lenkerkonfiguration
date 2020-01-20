package dao;

import com.lenker.Lenkerkonfiguration.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User,Integer> {
    boolean existsByUsername(String username);

    User findByUsername(String username);

}
