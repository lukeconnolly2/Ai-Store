package com.aistore.backend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table( name = "user")
public class User {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private long id;
    private String username;
    private String password;


}
