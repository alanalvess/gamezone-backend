package com.checkpointintegrador.CTD.Commerce.controller;

import com.checkpointintegrador.CTD.Commerce.model.Category;
import com.checkpointintegrador.CTD.Commerce.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @PostMapping()
    public ResponseEntity<Category> registerCategory(@RequestBody Category category){
        return ResponseEntity.ok(categoryService.registerCategory(category));
    }
}
