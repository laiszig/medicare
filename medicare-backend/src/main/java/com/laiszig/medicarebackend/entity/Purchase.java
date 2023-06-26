package com.laiszig.medicarebackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "purchases")
@NoArgsConstructor
@AllArgsConstructor
public class Purchase {

    @Id
    @Column(name = "purchase_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "medicine_id", nullable = true)
    private Medicine medicine;

    @Column(name = "medicine_quantity")
    private Integer quantity;
}
