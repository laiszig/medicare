package com.laiszig.medicarebackend.controller;

import com.laiszig.medicarebackend.entity.Company;
import com.laiszig.medicarebackend.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CompanyController {

    private final CompanyService companyService;

    @Autowired
    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/companies")
    public List<Company> getAll() {
        return companyService.findAll();
    }

    @PostMapping("/companies")
    public ResponseEntity<Company> saveCompany(@RequestBody Company company) {
        companyService.saveCompany(company);
        return new ResponseEntity<>(company, HttpStatus.CREATED);
    }

    @GetMapping("/companies/{id}")
    public ResponseEntity<Company> getCompany(@PathVariable Integer id) {
        try {
            Company company = companyService.getCompany(id);
            return new ResponseEntity<>(company, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/companies/{id}")
    public ResponseEntity<Company> deleteCompany(@PathVariable Integer id) {
        try {
            companyService.deleteCompany(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (EmptyResultDataAccessException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
