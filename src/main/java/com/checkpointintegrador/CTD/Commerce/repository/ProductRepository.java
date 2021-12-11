package com.checkpointintegrador.CTD.Commerce.repository;

import com.checkpointintegrador.CTD.Commerce.model.Category;
import com.checkpointintegrador.CTD.Commerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

  @Query("SELECT p FROM Product p WHERE p.category.name = ?1")
  List<Product> findByCategoryName(String name);
}
