package com.checkpointintegrador.CTD.Commerce.repository;

import com.checkpointintegrador.CTD.Commerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
}
