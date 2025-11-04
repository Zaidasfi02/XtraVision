package com.xtraVision.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xtraVision.backend.entity.Product;
import com.xtraVision.backend.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	public void  createProduct(Product product)
	{
		productRepository.save(product);
	}
	
	public void deleteProduct(Long id)
	{
		productRepository.deleteById(id);
	}
	public Product updateProduct(Long id,Product product)
	{
		Product existing=productRepository.findById(id).orElseThrow(()->new RuntimeException("Product not found by this id"+id) );
		 existing.setName(product.getName());
	        existing.setDescription(product.getDescription());
	        existing.setPrice(product.getPrice());
	        existing.setImageUrl(product.getImageUrl());
	        return productRepository.save(existing);
	}
	public List<Product> getAllProduct()
	{
		return productRepository.findAll();
	}
	public Product getProductById(Long id)
	{
		return productRepository.findById(id).orElseThrow(()->new RuntimeException("Product not found by this id"+id));
	}

}
