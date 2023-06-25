package com.laiszig.medicarebackend.service;

import com.laiszig.medicarebackend.commons.ItemAlreadyExistsException;
import com.laiszig.medicarebackend.entity.Category;
import com.laiszig.medicarebackend.entity.Company;
import com.laiszig.medicarebackend.entity.Medicine;
import com.laiszig.medicarebackend.repository.CategoryRepository;
import com.laiszig.medicarebackend.repository.MedicineRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class MedicineService {

    private final MedicineRepository medicineRepository;
    private final CategoryRepository categoryRepository;

    public MedicineService(MedicineRepository medicineRepository, CategoryRepository categoryRepository) {
        this.medicineRepository = medicineRepository;
        this.categoryRepository = categoryRepository;
    }

    public List<Medicine> findAll() {
        return medicineRepository.findAll();
    }

    public void saveMedicine(Medicine medicine) {
        if(medicineRepository.existsByName(medicine.getName())) {
            throw new ItemAlreadyExistsException("The Medicine " + medicine.getName() + " has already been inserted.");
        } else {
            medicine.setName(medicine.getName());
            medicine.setDescription(medicine.getDescription());
            medicine.setPrice(medicine.getPrice());
            medicine.setCompany(medicine.getCompany());
            medicine.setCategory(categoryRepository.findById(medicine.getCategory().getId()).get());
            medicineRepository.save(medicine);
        }
    }

    public void updateMedicine(Integer medicineId, String name, BigDecimal price,
                               Company company, String description, Category category) {
        Optional<Medicine> optionalMedicine = medicineRepository.findById(medicineId);

        if (optionalMedicine.isPresent()) {
            Medicine medicine = optionalMedicine.get();

            if (name != null) {
                medicine.setName(name);
            }

            if (company != null) {
                medicine.setCompany(company);
            }

            if (category != null) {
                medicine.setCategory(category);
            }

            if (description != null) {
                medicine.setDescription(description);
            }

            if (price != null) {
                medicine.setPrice(price);
            }

            medicineRepository.save(medicine);
        } else {
            throw new IllegalArgumentException("Medicine not found with ID: " + medicineId);
        }
    }

    public List<Medicine> searchByCategory(Integer id){
        return medicineRepository.findByCategoryId(id);
    }

    public Medicine getMedicine(Integer id) {
        return medicineRepository.findById(id).get();
    }

    public void deleteMedicine(Integer id) {
        medicineRepository.deleteById(id);
    }
}
