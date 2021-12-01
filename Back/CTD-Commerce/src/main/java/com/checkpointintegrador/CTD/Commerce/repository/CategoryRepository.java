package com.checkpointintegrador.CTD.Commerce.repository;

import com.checkpointintegrador.CTD.Commerce.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
