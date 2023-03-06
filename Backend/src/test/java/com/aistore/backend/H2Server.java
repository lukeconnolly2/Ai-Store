package com.aistore.backend;

import com.aistore.backend.controller.ProductController;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.mock.web.MockHttpServletRequest;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class H2Server {
    private static ArrayList<Product> products;

    public H2Server(ArrayList<Product> products) {
        this.products = products;
    }

    public static void main(String[] args) throws SQLException {
        ProductController productController = new ProductController();
        HttpServletRequest request = new MockHttpServletRequest();
        productController.add(request);


        Connection conn = DriverManager.getConnection("jdbc:h2:~/test");
        Statement stmt = conn.createStatement();
        stmt.executeUpdate("CREATE TABLE IF NOT EXISTS products(id INT PRIMARY KEY, productName VARCHAR(255), price INT, description VARCHAR(255), type VARCHAR(255), quantity INT)");
        PreparedStatement pstmt = conn.prepareStatement("INSERT INTO products(id, productName, price, description, type, quantity) VALUES (?, ?, ?, ?, ?, ?)");


        for (Product product : products) {
            pstmt.setInt(1, product.getId());
            pstmt.setString(2, product.getProductName());
            pstmt.setInt(3, product.getPrice());
            pstmt.setString(4, product.getDescription());
            pstmt.setString(5, product.getType());
            pstmt.setInt(6, product.getQuantity());
            pstmt.executeUpdate();
        }


        ResultSet rs = stmt.executeQuery("SELECT * FROM test");
        while (rs.next()) {
            System.out.println(rs.getInt(1) + ": " + rs.getString(2));
        }
        stmt.close();
        conn.close();

    }


}
