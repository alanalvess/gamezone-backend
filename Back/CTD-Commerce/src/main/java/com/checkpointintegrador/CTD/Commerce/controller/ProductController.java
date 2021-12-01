package com.checkpointintegrador.CTD.Commerce.controller;

import com.checkpointintegrador.CTD.Commerce.model.Category;
import com.checkpointintegrador.CTD.Commerce.model.Product;
import com.checkpointintegrador.CTD.Commerce.service.CategoryService;
import com.checkpointintegrador.CTD.Commerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    ProductService productService;
    CategoryService categoryService;

    @Autowired
    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @PostMapping()
    public ResponseEntity<Product> registerProduct(@RequestBody Product product){
        return ResponseEntity.ok(productService.registerProduct(product));
    }

    @GetMapping
    public ResponseEntity<List<Product>> listProducts(){
        return ResponseEntity.ok(productService.listProducts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findProduct(@PathVariable Integer id){
        Product product = productService.findProduct(id).orElse(null);

        return ResponseEntity.ok(product);
    }

    @GetMapping("/categories")
    public ResponseEntity<List<Category>> listCategories(){
        return ResponseEntity.ok((categoryService.listCategories()));
    }
}
