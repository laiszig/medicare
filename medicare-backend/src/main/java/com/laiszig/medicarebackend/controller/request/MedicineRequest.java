package com.laiszig.medicarebackend.controller.request;

import com.laiszig.medicarebackend.entity.Category;
import com.laiszig.medicarebackend.entity.Company;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class MedicineRequest {

    public Integer id;
    public String name;
    public Company company;
    public Category category;
    public String description;
    public BigDecimal price;
}
