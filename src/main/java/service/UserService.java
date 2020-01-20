package service;

import com.lenker.Lenkerkonfiguration.entity.User;
import dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserDao userDao;

    public List getAllUsers() {
        List userList = this.userDao.findAll();
        return userList;
    }

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    public User addUser(User user) {
        return this.userDao.save(user);
    }
}
