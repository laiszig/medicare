package com.laiszig.medicarebackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Entity
@Table(name = "cart_items")
@NoArgsConstructor
@AllArgsConstructor
public class CartItem {

    @Id
    @Column(name = "item_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "medicine", nullable = true)
    private Medicine medicine;

    @Column(name = "total_price")
    private BigDecimal totalPrice;

    @Column(name = "medicine_quantity")
    private Integer quantity;
}
