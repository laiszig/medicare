package com.laiszig.medicarebackend.repository;

import com.laiszig.medicarebackend.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {

    boolean existsByName(String name);
}