package com.checkpointintegrador.CTD.Commerce.service;

import com.checkpointintegrador.CTD.Commerce.model.Product;
import com.checkpointintegrador.CTD.Commerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product registerProduct(Product product) {
        return productRepository.save(product);
    }

    public Optional<Product> findProduct(Integer id) {
        return productRepository.findById(id);
    }

    public List<Product> listProducts() {
        return productRepository.findAll();
    }
}
