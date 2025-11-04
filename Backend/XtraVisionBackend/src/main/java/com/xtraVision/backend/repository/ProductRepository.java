package com.xtraVision.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xtraVision.backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
