package com.aistore.backend.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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