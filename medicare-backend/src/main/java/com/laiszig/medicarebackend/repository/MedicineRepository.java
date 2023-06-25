package com.laiszig.medicarebackend.repository;

import com.laiszig.medicarebackend.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Integer> {

    boolean existsByName(String name);

    List<Medicine> findByCategoryId (Integer categoryId);
}
