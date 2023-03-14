package com.aistore.backend.controller;


import com.aistore.backend.Model.Product;
import com.aistore.backend.dao.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ProductController {
    @Autowired
    private ProductRepository repository;

    @PostMapping("/addproduct")
    @CrossOrigin
    public String addProduct(@RequestBody Product product){
        repository.save(product);
        return "Product Saved";
    }

    @GetMapping("/getProducts")
    @CrossOrigin
    public List<Product> getProducts() {
        return repository.findAll();
    }

    @GetMapping("/getProduct/{id}")
    @CrossOrigin
    public Optional<Product> getProductById(@PathVariable String id){
        return repository.findById(Integer.parseInt(id));
    }

    @PostMapping("/deleteProduct/{id}")
    @CrossOrigin
    public String deleteProduct(@PathVariable String id){
        Optional<Product> p = repository.findById(Integer.parseInt(id));
        if(p.isEmpty()){
            return "Product doesnt exits";
        }
        repository.delete(p.get());
        return "Deleted";
    }

    @PostMapping("/updateproduct/{id}")
    @CrossOrigin
    public String updateProductById(@PathVariable String id, @RequestBody Product newProduct){
        Optional<Product> p = repository.findById(Integer.parseInt(id));
        if(p.isEmpty()){
            return "Product doesnt exits";
        }
        Product oldProduct = p.get();
        oldProduct.setProductName(newProduct.getProductName());
        oldProduct.setProductImgUrl(newProduct.getProductImgUrl());
        oldProduct.setType(newProduct.getType());
        oldProduct.setPrice(newProduct.getPrice());
        oldProduct.setDescription(newProduct.getDescription());
        oldProduct.setVisibility(newProduct.getVisibility());
        System.out.println(oldProduct);
        repository.save(oldProduct);
        return "Success";
    }
}