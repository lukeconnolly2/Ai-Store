CREATE DATABASE AiStore;

USE AiStore;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  productName VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  productImgUrl VARCHAR(200),
  description VARCHAR(500),
  type VARCHAR(50),
  available BOOL NOT NULL
);

INSERT INTO products (productName, price, productImgUrl, description, type, available)
VALUES ('Smartphone X', 999, 'https://example.com/img/smartphone_x.jpg', 'The latest smartphone from X brand', 'Electronics', true),
       ('Laptop Y', 1499, 'https://example.com/img/laptop_y.jpg', 'Powerful laptop with high-performance specs', 'Computers', true),
       ('Fitness Tracker Z', 199, 'https://example.com/img/fitness_tracker_z.jpg', 'Tracks your fitness activity and monitors your health', 'Wearables', false);