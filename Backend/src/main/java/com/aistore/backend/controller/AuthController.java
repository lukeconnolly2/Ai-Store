package com.aistore.backend.controller;

import com.aistore.backend.Model.AdminUser;
import com.aistore.backend.Model.User;
import com.aistore.backend.dao.AdminRepository;
import com.aistore.backend.dao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@RestController
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/login")
    @CrossOrigin
    public Map<String, String> login(@RequestBody User user){
        HashMap<String, String> res = new HashMap<>();
        Optional<User> u = userRepository.findByUsername(user.getUsername());
        if(u.isEmpty()){
            res.put("type", "Invalid Username");
            return res;
        }

        if(!Objects.equals(u.get().getPassword(), user.getPassword())){
            res.put("type", "Invalid Password");
            return res;
        }
        res.put("accessToken",  user.getUsername());
        return res;
    }

    @PostMapping("/signup")
    @CrossOrigin
    public Map<String, String> signup(@RequestBody User user){
        HashMap<String, String> res = new HashMap<>();
        userRepository.save(user);
        res.put("type", "Saved");
        return res;
    }

    @PostMapping("/adminlogin")
    @CrossOrigin
    public Map<String, String> adminlogin(@RequestBody AdminUser user){
        System.out.println(user);
        HashMap<String, String> res = new HashMap<>();
        Optional<AdminUser> u = adminRepository.findByUsername(user.getUsername());
        if(u.isEmpty()){
            res.put("type", "Invalid Username");
            return res;
        }

        if(!Objects.equals(u.get().getPassword(), user.getPassword())){
            res.put("type", "Invalid Password");
            return res;
        }
        res.put("accessToken",  user.getUsername());
        return res;
    }
}