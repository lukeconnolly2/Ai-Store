package com.aistore.backend.dao;

import com.aistore.backend.Model.Order;
import com.aistore.backend.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersRepository extends JpaRepository<Order, Integer> {
}
