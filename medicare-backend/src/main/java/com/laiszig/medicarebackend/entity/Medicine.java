package com.laiszig.medicarebackend.entity;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Entity
@Table(name = "medicine")
@NoArgsConstructor
@AllArgsConstructor
public class Medicine {

    @Id
    @Column(name = "medicine_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    @Column(name = "medicine_name")
    public String name;

    @ManyToOne
    @JoinColumn(name = "company_id", nullable = true)
    public Company company;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = true)
    public Category category;

    @Column(name = "medicine_description")
    public String description;

    @Column(name = "medicine_price")
    public BigDecimal price;

}
