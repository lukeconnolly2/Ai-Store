package com.aistore.backend.controller;


import com.aistore.backend.Model.Product;
import com.aistore.backend.dao.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {
    @Autowired
    private ProductRepository repository;

    @PostMapping("/addProduct")
    public String addProduct(@RequestBody Product product){
        repository.save(product);
        return "Product Saved";
    }

    @GetMapping("/getProducts")
    public List<Product> getProducts() {
        return repository.findAll();
    }
}