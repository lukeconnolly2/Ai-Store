package com.aistore.backend.controller;

import com.aistore.backend.Model.User;
import com.aistore.backend.dao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class UserController {
    @Autowired
    private UserRepository repository;

    @PostMapping("/addUser")
    public String addUser(@RequestBody User user){
        repository.save(user);
        return "User Saved";
    }
}
