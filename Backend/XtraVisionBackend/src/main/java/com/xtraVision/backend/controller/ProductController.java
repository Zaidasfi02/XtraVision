package com.xtraVision.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xtraVision.backend.entity.Product;
import com.xtraVision.backend.service.ProductService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = {"https://xtravision-3.onrender.com",
	"http://localhost:5173"
})
public class ProductController {

	@Autowired
	private ProductService productService;
	
	 @PostMapping
	    public void addProduct(@RequestBody Product product) {
	         productService.createProduct(product);
	    }
	 @DeleteMapping("/{id}")
	    public void deleteProduct(@PathVariable Long id) {
	        productService.deleteProduct(id);
	 }
	 
	 @PutMapping("/{id}")
	    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
	        return productService.updateProduct(id, product);
	    }
	 @GetMapping
	 public List<Product> getAllProducts()
	 {
		return productService.getAllProduct(); 
	 }
	 @GetMapping("/{id}")
	 public Product getProductById(@PathVariable Long id)
	 {
		 return productService.getProductById(id);
	 }
}
