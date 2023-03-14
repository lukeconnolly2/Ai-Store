package com.aistore.backend.dao;

import com.aistore.backend.Model.AdminUser;
import com.aistore.backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<AdminUser, Integer> {
    Optional<User> findByUsername(String username);
}
