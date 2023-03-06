package com.aistore.backend.controller;


import com.aistore.backend.Product;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.sql.SQLException;
import java.util.ArrayList;

@RestController
public class ProductController {
    private ArrayList<Product> products = new ArrayList<Product>();

    @Repository
    public interface ProductRepository extends JpaRepository<Product,Long> {}

    @Autowired
    private ProductRepository productRepository;

    public ProductRepository getProductRepository() {
        return productRepository;
    }

    @PostMapping("/test")
    public void add(HttpServletRequest request) throws SQLException {

        int id = Integer.parseInt(request.getParameter("id"));
        String productName = request.getParameter("productName");
        int quantity = Integer.parseInt(request.getParameter("quantity"));
        int price = Integer.parseInt(request.getParameter("price"));
        String productImgUrl = request.getParameter("productImgUrl");
        String description = request.getParameter("description");
        String type = request.getParameter("type");

        Product product = new Product();
        product.setId(id);
        product.setProductName(productName);
        product.setQuantity(quantity);
        product.setPrice(price);
        product.setProductImgUrl(productImgUrl);
        product.setDescription(description);
        product.setType(type);

        System.out.println(id);

        products.add(product);

        productRepository.save(product);

    }

}
