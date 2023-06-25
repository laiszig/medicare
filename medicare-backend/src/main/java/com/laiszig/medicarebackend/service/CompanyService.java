package com.laiszig.medicarebackend.service;

import com.laiszig.medicarebackend.commons.ItemAlreadyExistsException;
import com.laiszig.medicarebackend.entity.Company;
import com.laiszig.medicarebackend.repository.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    private final CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public List<Company> findAll() {
        return companyRepository.findAll();
    }

    public void saveCompany(Company company) {
        if(companyRepository.existsByName(company.getName())) {
            throw new ItemAlreadyExistsException("The Company " + company.getName() + " has already been inserted.");
        } else {
            companyRepository.save(company);
        }
    }

    public Company getCompany(Integer id) {
        return companyRepository.findById(id).get();
    }

    public void deleteCompany(Integer id) {
        companyRepository.deleteById(id);
    }
}
