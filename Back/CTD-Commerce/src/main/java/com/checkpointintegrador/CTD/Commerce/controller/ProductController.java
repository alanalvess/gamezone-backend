package com.checkpointintegrador.CTD.Commerce.controller;

import com.checkpointintegrador.CTD.Commerce.model.Category;
import com.checkpointintegrador.CTD.Commerce.model.Product;
import com.checkpointintegrador.CTD.Commerce.repository.CategoryRepository;
import com.checkpointintegrador.CTD.Commerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {

    ProductRepository productRepository;
    CategoryRepository categoryRepository;

    @Autowired
    public ProductController(ProductRepository productRepository, CategoryRepository categoryRepository){

        this.productRepository = productRepository;
        this.categoryRepository =  categoryRepository;
    }

    @PostMapping()
    private ResponseEntity<Product> registerProduct(@RequestBody Product product) {
        return ResponseEntity.status(HttpStatus.CREATED).body(productRepository.save(product));
    }

    @GetMapping
    private ResponseEntity<List<Product>> listAllProducts() {
        return ResponseEntity.ok(productRepository.findAll());
    }

    @GetMapping("/{id}")
    private ResponseEntity<Optional<Product>> findProductById(@PathVariable Integer id) {
        return ResponseEntity.ok(productRepository.findById(id));
    }

    @GetMapping("/categories")
    private  ResponseEntity<List<Category>> listAllCategories() {
        return ResponseEntity.ok(categoryRepository.findAll());
    }

    @GetMapping("/category/{name}")
    private ResponseEntity<List<Product>> listProductsByCategory(@PathVariable String name) {
        return ResponseEntity.ok(categoryRepository.findByCategoryName(name));
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<String> deleteProductById(@PathVariable Integer id){
        productRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Produto excluído com êxito!");
    }

    @DeleteMapping("/category/{id}")
    private ResponseEntity<String> deleteCategoryById(@PathVariable Integer id){
        categoryRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Categoria excluída com êxito!");
    }

//    @PostMapping("/category")
//    private ResponseEntity<Category> registerCategory(@RequestBody Category category) {
//        return ResponseEntity.status(HttpStatus.CREATED).body(categoryRepository.save(category));
//    }

}
