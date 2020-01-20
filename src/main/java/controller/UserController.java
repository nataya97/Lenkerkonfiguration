package controller;

import com.lenker.Lenkerkonfiguration.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.UserService;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "https://localhost:4200")

public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<User> getAllUsers() { return userService.getAllUsers(); }

    @PutMapping(path = {"/add"} )
    public User addNewUser(@RequestBody User user) { return this.userService.addUser(user); }

}
