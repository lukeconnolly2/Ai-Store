package com.aistore.backend.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table( name = "product")
public class Product {
    @Id
    @GeneratedValue
    private long id;
    private String productName;
    private int price;
    private String productImgUrl;
    private String description;
    private String type;
    private String visibility;
}