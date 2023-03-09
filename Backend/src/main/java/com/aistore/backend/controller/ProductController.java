package com.aistore.backend.controller;


import com.aistore.backend.Model.Product;
import com.aistore.backend.dao.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.support.NullValue;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/getProduct/{id}")
    public Optional<Product> getProductById(@PathVariable String id){
        return repository.findById(Integer.parseInt(id));
    }

    @PostMapping("/deleteProduct")
    public String deleteProduct(@RequestBody String id){
        Optional<Product> p = repository.findById(Integer.parseInt(id));
        if(p.isEmpty()){
            return "Product doesnt exits";
        }
        repository.delete(p.get());
        return "Deleted";
    }
}