package com.aistore.backend.controller;

import com.aistore.backend.Model.Order;
import com.aistore.backend.Model.Product;
import com.aistore.backend.Model.User;
import com.aistore.backend.dao.OrdersRepository;
import com.aistore.backend.dao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class OrdersController {

    @Autowired
    private OrdersRepository ordersRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/addOrder/{userId}")
    @CrossOrigin
    public String addOrder(@RequestBody List<Product> products, @PathVariable String userId){
        Optional<User> u = userRepository.findById(Integer.parseInt(userId));
        if(u.isEmpty()){return "user doesnt exist";}
        Order o = new Order();
        o.setUser(u.get());
        o.setOrderItems(products);
        ordersRepository.save(o);
        System.out.println(o);
        return "Saved";
    }

    @GetMapping("/getOrders")
    @CrossOrigin
    public List<Order> getOrders(){
        return ordersRepository.findAll();
    }
}
