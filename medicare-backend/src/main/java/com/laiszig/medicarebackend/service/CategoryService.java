package com.laiszig.medicarebackend.service;

import com.laiszig.medicarebackend.commons.ItemAlreadyExistsException;
import com.laiszig.medicarebackend.entity.Category;
import com.laiszig.medicarebackend.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    public void saveCategory(Category category) {
        if(categoryRepository.existsByName(category.getName())) {
            throw new ItemAlreadyExistsException("The Category " + category.getName() + " has already been inserted.");
        } else {
            categoryRepository.save(category);
        }
    }

    public Category getCategory(Integer id) {
        return categoryRepository.findById(id).get();
    }

    public void deleteCategory(Integer id) {
        categoryRepository.deleteById(id);
    }
}
